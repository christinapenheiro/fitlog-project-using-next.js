"use client"
import Link from "next/link";
import { useState } from "react";


const NavButton = () => {
    const [activeButton,setActiveButton] = useState<"workout"|"myPlan">("workout")




    return (
      <div className="navbar-center">
        <div className="flex items-center gap-1 text-[10px] sm:text-sm">
          <button className="hidden sm:block">
            <Link
              href="/"
              className={`rounded-full ${activeButton === "workout" ? `bg-[#c2f80052]` : `bg-none text-white/50 hover:text-white`} px-3 py-1 font-medium text-[#C2F800]`}
              onClick={() => setActiveButton("workout")}
            >
              Workouts
            </Link>
          </button>

          <button className="sm:block hidden">
            <Link
              href="/my-plan"
              className={`rounded-full px-3 py-1 ${activeButton === "myPlan" ? `bg-[#c2f80052] text-[#C2F800]` : ` text-white/50 hover:text-white`} transition`}
              onClick={() => setActiveButton("myPlan")}
            >
              My Plan
            </Link>
          </button>

          <div className="sm:hidden">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  {" "}
                  <Link
                    href="/"
                    className={`rounded-full ${activeButton === "workout" ? `bg-[#c2f80052]` : `bg-none text-white/50 hover:text-white`} px-3 py-1 font-medium text-[#C2F800]`}
                    onClick={() => setActiveButton("workout")}
                  >
                    Workouts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/my-plan"
                    className={`rounded-full px-3 py-1 ${activeButton === "myPlan" ? `bg-[#c2f80052] text-[#C2F800]` : ` text-white/50 hover:text-white`} transition `}
                    onClick={() => setActiveButton("myPlan")}
                  >
                    My Plan
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NavButton;