"use client";
import IExercise from "@/types/type";
import React, { createContext, ReactNode, useEffect, useState } from "react";

interface PlanData {
  todayPlan: IExercise[];
  setTodayPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  saveLater: IExercise[];
  setSaveLater: React.Dispatch<React.SetStateAction<IExercise[]>>;
}

export const PlanContext = createContext<PlanData>({
  todayPlan: [],
  setTodayPlan: () => {},
  saveLater: [],
  setSaveLater: () => {},
});






const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IExercise[]>([]);

  const [saveLater, setSaveLater] = useState<IExercise[]>([]);

/**
 * The code below has some problem because using state inside useEffect() is not recommended and it causes lagging in webpage loading and slow website.
 * 
 */

  // //Check whether local storage is loaded
  // const [hydrated, setHydrated] = useState<boolean>(false);

  // //Load existing data from localStorage
  // useEffect(() => {
  //   const storedTodayPlan = localStorage.getItem("todayPlan");
  //   const stroredSavedPlan = localStorage.getItem("saveLater");

  //   if(storedTodayPlan){
  //     setTodayPlan(JSON.parse(storedTodayPlan));
  //   };

  //   if(stroredSavedPlan){
  //     setSaveLater(JSON.parse(stroredSavedPlan))
  //   };

  //   //Loading is finished
  //   setHydrated(true);
  // },[])


  // //save todayPlan only after hydration
  // useEffect(()=>{
  //   if(!hydrated) return;

  //   localStorage.setItem(
  //     "todayPlan",JSON.stringify(todayPlan)
  //   );
  // },[todayPlan,hydrated])

  // //Save saveLater only after hydration
  // useEffect(()=> {
  //   if(!hydrated) return;

  //   localStorage.setItem(
  //     "saveLater",
  //     JSON.stringify(saveLater)
  //   );
  // },[saveLater,hydrated]);



















  
 const planData = {
   todayPlan,
   setTodayPlan,
   saveLater,
   setSaveLater,
 };

  return (
    <PlanContext.Provider value={planData}>{children}</PlanContext.Provider>
  );
};;

export default PlanProvider;
