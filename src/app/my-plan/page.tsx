"use client"
import { useContext } from "react";
import { PlanContext } from "@/context/plan";

export interface PageProps {
    prop: string
}

export default function Page() {
    const {todayPlan,saveLater} = useContext(PlanContext)
    

    
    return (
      <div className="mx-6 sm:mx-8 lg:mx-12 my-10">
        <div className="mb-8">
          <h1 className="text-center text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl md:text-left">
            MY PLAN
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-gray-400 lg:mx-0 md:text-left md:max-w-none">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mb-8 rounded-2xl bg-[#13161D] px-5 py-6 sm:px-8">
          <div className="grid grid-cols-3 divide-x divide-[#2A2D35]">
            <div className="flex flex-col items-center gap-1 px-2 text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                Exercises
              </span>

              <span className="text-2xl font-black text-white sm:text-3xl">
                5
              </span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center gap-1 px-2 text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                Minutes
              </span>

              <span className="text-2xl font-black text-white sm:text-3xl">
                45
              </span>
            </div>

            {/* Calories */}
            <div className="flex flex-col items-center gap-1 px-2 text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                Calories
              </span>

              <span className="text-2xl font-black text-[#C2F800] sm:text-3xl">
                320
              </span>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="tabs tabs-box w-full justify-center rounded-xl bg-[#13161D] p-1 sm:w-fit">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab h-10 flex-1 px-5 text-xs font-bold uppercase tracking-wider sm:flex-none"
              aria-label="Today's Plan"
              defaultChecked
            />

            <input
              type="radio"
              name="my_tabs_1"
              className="tab h-10 flex-1 px-5 text-xs font-bold uppercase tracking-wider sm:flex-none"
              aria-label="Saved"
            />
          </div>
        </div>
        <div className="my-12 rounded-2xl bg-[#13161D] px-5 py-6 sm:px-8 text-center flex flex-col max-w-full h-100 space-y-2  justify-center">
          <span className="text-l font-black text-white sm:text-xl">
            NOTHING HERE YET
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
            Browse the library and add a lift to get today moving.
          </span>
          <div className="flex justify-center">
            <button
              type="button"
              className="flex h-10 items-center justify-center gap-2 bg-[#C2F800] px-5 cursor-pointer text-xs font-bold text-black transition hover:bg-[#d4ff3d] rounded-3xl mt-5"
            >
              Go to workouts
            </button>
          </div>
        </div>
      </div>
    );
}