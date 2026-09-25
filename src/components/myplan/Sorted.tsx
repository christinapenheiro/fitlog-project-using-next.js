import { useState } from "react";
import { useContext } from "react";
import { PlanContext } from "@/context/plan";



const Sorted = ({ activeTab }: { activeTab: string }) => {
    const { todayPlan, setTodayPlan,saveLater,setSaveLater } = useContext(PlanContext);
    const [selectedOption, setSelectedOption] = useState<"Duration" | "Calories" | "Rating">("Duration");
    const selectedPlan = activeTab === "today" ? todayPlan : saveLater;

    const handleOptionClick = (option: "Duration" | "Calories" | "Rating") => {
        // setSelectedOption(selectedOption === option ? selectedOption : option);
        const sortedPlan =
        option === "Duration"
        ? [...selectedPlan].sort((a, b) => a.duration - b.duration)
        : option === "Calories"
          ? [...selectedPlan].sort((a, b) => a.caloriesBurned - b.caloriesBurned)
          : [...selectedPlan].sort((a, b) => a.rating - b.rating); 

        if(activeTab === "today") {
            setTodayPlan(sortedPlan);
        } else {
            setSaveLater(sortedPlan);
        }
        setSelectedOption(option);
    }


    return (
      <div className="dropdown dropdown-end absolute right-0 top-0">
        <div tabIndex={0} role="button" className="btn">
          Sort By: <span className="ml-2 text-[#C2F800]">{selectedOption}</span>
        </div>
        <ul
          tabIndex={-1}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <span onClick={() => {handleOptionClick("Duration");
                }}>Duration</span>
          </li>
          <li>
            <span onClick={() => {handleOptionClick("Calories");
                }}>Calories</span>
          </li>
          <li>
            <span onClick={() => {handleOptionClick("Rating");
                }}>Rating</span>
          </li>
        </ul>
      </div>
    );
}

export default Sorted;