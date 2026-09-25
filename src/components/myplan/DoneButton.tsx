"use client";
import IExercise from "@/types/type";
import { toast } from "react-toastify";
import { useContext } from "react";
import { PlanContext } from "@/context/plan";
import { FaCheck } from "react-icons/fa";

interface IdoneProps {
  card: IExercise
}


const DoneButton = ({ card }: IdoneProps) => {
   const { todayPlan, setTodayPlan } =
     useContext(PlanContext);
  // const [isDone, setIsDone] = useState<boolean>(false);
  // const handleClick = () => {
  //   setIsDone(!isDone);
  //   toast.success("Marked as done!");
  // };




   const filterPlan = () => {
    toast.success("Marked as done!");
    const updatedPlan = [...todayPlan].filter((exercise) => exercise.id !== card.id);
    setTodayPlan(updatedPlan)
   }


  return (
    <button
      className={`btn btn-sm rounded-lg bg-[#C2F800] text-[10px] sm:text-xs font-black uppercase text-black hover:bg-[#D4FF33] sm:flex-none cursor-pointer w-full lg:flex-1`}
      onClick={filterPlan}
    >
      <FaCheck />
      Mark as Done
    </button>
  );
};

export default DoneButton;
