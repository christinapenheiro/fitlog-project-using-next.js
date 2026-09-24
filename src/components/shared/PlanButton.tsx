"use client"
import { PlanContext } from '@/context/plan';
import IExercise from '@/types/type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';




const PlanButton = ({card}:{card:IExercise}) => {
    const {todayPlan,setTodayPlan} = useContext(PlanContext)
    const somePlan = todayPlan.some(plan=>plan.id === card.id)
    const handlePlan = () => {
      if(somePlan){
        toast.error("Already in your plan!")
      } else{
        setTodayPlan([...todayPlan,card])
        toast.success("Added to today's plan");
      }
    }

    return (
      <button
        type="button"
        className="flex h-11 items-center justify-center gap-2 rounded-lg bg-[#C2F800] px-5 cursor-pointer text-xs font-bold text-black transition hover:bg-[#d4ff3d]" onClick={handlePlan}
      >
        <span>▣</span>
        Add to today&apos;s plan
      </button>
    );
};

export default PlanButton;