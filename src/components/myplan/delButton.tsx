import { PlanContext } from "@/context/plan";
import IExercise from "@/types/type";
import { useContext } from "react";
import { toast } from "react-toastify";

export interface DelButtonProps {
  card: IExercise;
}

export default function DelButton({ card }: DelButtonProps) {
  const { todayPlan, setTodayPlan } =
    useContext(PlanContext);

  const filterTodayPlan = () => {
    const updatedPlan = [...todayPlan].filter((exercise) => exercise.id !== card.id);
    setTodayPlan(updatedPlan);
    toast.info("Exercise removed from today's plan", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div>
      <button
        className="btn btn-square btn-sm rounded-lg border border-[#30343D] bg-transparent text-gray-500 hover:border-red-500 hover:bg-transparent hover:text-red-500"
        aria-label="Remove exercise"
        onClick={filterTodayPlan}
      >
        {" "}
        ×{" "}
      </button>{" "}
    </div>
  );
}
