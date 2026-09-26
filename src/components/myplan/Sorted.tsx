import { useState } from "react";
import { useContext } from "react";
import { PlanContext } from "@/context/plan";
import { LuSquareChevronDown } from "react-icons/lu";



const Sorted = ({ activeTab }: { activeTab: string }) => {
    const { todayPlan, setTodayPlan,saveLater,setSaveLater } = useContext(PlanContext);
    // const [selectedOption, setSelectedOption] = useState<"Duration" | "Calories" | "Rating">("Duration");
    const [todaySortedOption, setTodaySortedOption] = useState<"Duration" | "Calories" | "Rating">("Duration");
    const [saveLaterSortedOption, setSaveLaterSortedOption] = useState<"Duration" | "Calories" | "Rating">("Duration");

    const selectedOption = activeTab === "today" ? todaySortedOption : saveLaterSortedOption;
    
    
    const selectedPlan = activeTab === "today" ? todayPlan : saveLater;

    const handleOptionClick = (option: "Duration" | "Calories" | "Rating") => {
        // setSelectedOption(selectedOption === option ? selectedOption : option);
        const sortedPlan =
        option === "Duration"
        ? [...selectedPlan].sort((a, b) => b.duration - a.duration)
        : option === "Calories"
          ? [...selectedPlan].sort((a, b) => b.caloriesBurned - a.caloriesBurned)
          : [...selectedPlan].sort((a, b) => b.rating - a.rating); 

        if(activeTab === "today") {
            setTodayPlan(sortedPlan);
            setTodaySortedOption(option);
        } else {
            setSaveLater(sortedPlan);
            setSaveLaterSortedOption(option);
        }
        // setSelectedOption(option);
    }


    return (
      <div className=" dropdown sm:dropdown-end sm:absolute right-0 top-0 bg-[#14171E] mx-6 sm:mx-0">
        <div tabIndex={0} role="button" className="btn">
          <LuSquareChevronDown /> Sort By:
          <span className="ml-2 text-[#C2F800]">{selectedOption}</span>
        </div>
        <ul
          tabIndex={-1}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <span
              onClick={() => {
                handleOptionClick("Duration");
              }}
            >
              Duration
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                handleOptionClick("Calories");
              }}
            >
              Calories
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                handleOptionClick("Rating");
              }}
            >
              Rating
            </span>
          </li>
        </ul>
      </div>
    );
}

export default Sorted;