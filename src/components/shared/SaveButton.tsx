"use client"
import { useContext } from "react";
import { PlanContext } from "@/context/plan";
import IExercise from "@/types/type";
import { toast } from "react-toastify";

const SaveButton = ({card}:{card:IExercise}) => {
  const {saveLater, setSaveLater} = useContext(PlanContext);
  const somePlan = saveLater.some(plan=>plan.id === card.id)
      const handlePlan = () => {
        if(somePlan){
          toast.error("Already in your plan!")
        } else{
          setSaveLater([...saveLater,card])
          toast.success("Added to saved plan");
        }
      }

  return (
    <button
      type="button"
      className="flex h-11 items-center justify-center gap-2 rounded-lg cursor-pointer border border-white/15 bg-transparent px-5 text-xs font-medium text-gray-300 transition hover:border-white/30 hover:text-white" onClick={handlePlan}
    >
      <span>♡</span>
      Save for later
    </button>
  );
};

export default SaveButton;
