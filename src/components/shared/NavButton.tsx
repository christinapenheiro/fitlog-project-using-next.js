"use client"
import Link from "next/link";
import { useState } from "react";

const NavButton = () => {
    const [activeButton,setActiveButton] = useState<"workout"|"myPlan">("workout")




    return (
      <div className="navbar-center">
        <div className="flex items-center gap-1 text-[10px] sm:text-sm">
          <Link
            href="/"
            className={`rounded-full ${activeButton === "workout" ? `bg-[#c2f80052]` : `bg-none text-white/50 hover:text-white`} px-3 py-1 font-medium text-[#C2F800]`}
            onClick={() => setActiveButton("workout")}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-3 py-1 ${activeButton === "myPlan" ? `bg-[#c2f80052] text-[#C2F800]` : ` text-white/50 hover:text-white`} transition `}
            onClick={() => setActiveButton("myPlan")}
          >
            My Plan
          </Link>
        </div>
      </div>
    );
};

export default NavButton;