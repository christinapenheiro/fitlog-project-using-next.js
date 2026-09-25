import { PlanContext } from "@/context/plan";
import IExercise from "@/types/type";
import { useContext } from "react";

export interface SaveDelButtonProps {
  card: IExercise;
}

export default function SaveDelButton({ card }: SaveDelButtonProps) {
  const { saveLater, setSaveLater } =
    useContext(PlanContext);

  const filterSaveLater = () => {
    const updatedPlan = [...saveLater].filter((exercise) => exercise.id !== card.id);
    setSaveLater(updatedPlan);
  };

  return (
    <div>
      <button
        className="btn btn-square btn-sm rounded-lg border border-[#30343D] bg-transparent text-gray-500 hover:border-red-500 hover:bg-transparent hover:text-red-500"
        aria-label="Remove exercise"
        onClick={filterSaveLater}
      >
        {" "}
        ×{" "}
      </button>{" "}
    </div>
  );
}
