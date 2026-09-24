"use client";
import IExercise from "@/types/type";
import React, { createContext, ReactNode, useState } from "react";

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

  const planData = {
    todayPlan,
    setTodayPlan,
    saveLater,
    setSaveLater,
  };

  return (
    <PlanContext.Provider value={planData}>{children}</PlanContext.Provider>
  );
};

export default PlanProvider;
