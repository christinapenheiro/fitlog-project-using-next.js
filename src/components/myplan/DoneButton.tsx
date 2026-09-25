"use client";
import IExercise from "@/types/type";
import { toast } from "react-toastify";
import { useContext } from "react";
import { PlanContext } from "@/context/plan";

interface IdoneProps {
  activeTab: "today" | "saved";
  card: IExercise
}


const DoneButton = ({ activeTab,card }: IdoneProps) => {
   const { todayPlan, setTodayPlan, saveLater, setSaveLater } =
     useContext(PlanContext);
  // const [isDone, setIsDone] = useState<boolean>(false);
  // const handleClick = () => {
  //   setIsDone(!isDone);
  //   toast.success("Marked as done!");
  // };


  const selectedPlan = activeTab === "today" ? todayPlan : saveLater;



   const filterPlan = () => {
    toast.success("Marked as done!");
    const updatedPlan = [...selectedPlan].filter((exercise) => exercise.id !== card.id);
    if(activeTab === "today"){
      setTodayPlan(updatedPlan)
    } else {
      setSaveLater(updatedPlan)
    }}


  return (
    <button
      className={`btn btn-sm rounded-lg bg-[#C2F800] text-[10px] sm:text-xs font-black uppercase text-black hover:bg-[#D4FF33] sm:flex-none cursor-pointer w-full lg:flex-1`}
      onClick={filterPlan}
    >
    Mark as Done
    </button>
  );
};

export default DoneButton;
