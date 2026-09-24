"use client"
import { useContext } from "react";
import { PlanContext } from "@/context/plan";
import IExercise from "@/types/type";
import Image from "next/image";
import Link from "next/link";

export interface PageProps {
    prop: string
}

export default function Page() {
    const {todayPlan,saveLater} = useContext(PlanContext)
    
    


    return (
      <div>
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

          <div className="tabs tabs-lift">
            <input
              type="radio"
              name="my_tabs_3"
              className="tab"
              aria-label="Today's Plan"
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              {todayPlan.length > 0 ? (
                todayPlan.map((plan: IExercise) => (
                  <div
                    className="group rounded-2xl border border-[#252832] bg-[#13161D] p-4 transition hover:border-[#3A3E49] mb-4"
                    key={plan.id}
                  >
                    {" "}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      {" "}
                      {/* Thumbnail */}{" "}
                      <div className="h-24 w-full shrink-0 overflow-hidden rounded-xl bg-[#1C2028] sm:h-24 sm:w-28">
                        {" "}
                        <Image
                          src={plan.image}
                          alt={plan.name}
                          width={112}
                          height={96}
                          className="h-full w-full object-cover"
                        />{" "}
                      </div>{" "}
                      {/* Main Content */}{" "}
                      <div className="min-w-0 flex-1">
                        {" "}
                        {/* Title + Equipment */}{" "}
                        <div>
                          {" "}
                          <h3 className="truncate text-base font-black uppercase tracking-tight text-white sm:text-lg">
                            {" "}
                            {plan.name}{" "}
                          </h3>{" "}
                          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                            {" "}
                            {plan.equipment}{" "}
                          </p>{" "}
                        </div>{" "}
                        {/* Stats */}{" "}
                        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                          {" "}
                          <div className="flex items-center gap-1.5 text-gray-400">
                            {" "}
                            <span>◷</span> <span>{plan.duration} min</span>{" "}
                          </div>{" "}
                          <div className="flex items-center gap-1.5 text-gray-400">
                            {" "}
                            <span>🔥</span>{" "}
                            <span>{plan.caloriesBurned}</span>{" "}
                          </div>{" "}
                          <div className="flex items-center gap-1.5 text-gray-400">
                            {" "}
                            <span className="text-[#C2F800]">★</span>{" "}
                            <span>{plan.rating}</span>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      {/* Actions */}{" "}
                      <div className="flex items-center gap-2  lg:flex-row">
                        {" "}
                        <button className="btn btn-sm flex-1 rounded-lg border border-[#30343D] bg-transparent text-xs font-bold uppercase hover:border-[#C2F800] hover:bg-transparent hover:text-[#C2F800] sm:flex-none">
                          {" "}
                          View Details{" "}
                        </button>{" "}
                        <button className="btn btn-sm flex-1 rounded-lg bg-[#C2F800] text-xs font-black uppercase text-black hover:bg-[#D4FF33] sm:flex-none">
                          {" "}
                          Mark as Done{" "}
                        </button>{" "}
                        <div>
                          <button
                            className="btn btn-square btn-sm rounded-lg border border-[#30343D] bg-transparent text-gray-500 hover:border-red-500 hover:bg-transparent hover:text-red-500"
                            aria-label="Remove exercise"
                          >
                            {" "}
                            ×{" "}
                          </button>{" "}
                        </div>
                      </div>{" "}
                    </div>{" "}
                  </div>
                ))
              ) : (
                <div className="my-12 rounded-2xl bg-[#13161D] px-5 py-6 sm:px-8 text-center flex flex-col max-w-full h-100 space-y-2  justify-center">
                  <span className="text-l font-black text-white sm:text-xl">
                    NOTHING HERE YET
                  </span>
                  <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                    Browse the library and add a lift to get today moving.
                  </span>
                  <div className="flex justify-center">
                    <Link href="/">
                      <button
                        type="button"
                        className="flex h-10 items-center justify-center gap-2 bg-[#C2F800] px-5 cursor-pointer text-xs font-bold text-black transition hover:bg-[#d4ff3d] rounded-3xl mt-5"
                      >
                        Go to workouts
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <input
              type="radio"
              name="my_tabs_3"
              className="tab"
              aria-label="Saved"
              defaultChecked
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              {saveLater.length > 0 ? (
                saveLater.map((plan: IExercise) => (
                  <div
                    className="group rounded-2xl border border-[#252832] bg-[#13161D] p-4 transition hover:border-[#3A3E49] mb-4"
                    key={plan.id}
                  >
                    {" "}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      {" "}
                      {/* Thumbnail */}{" "}
                      <div className="h-24 w-full shrink-0 overflow-hidden rounded-xl bg-[#1C2028] sm:h-24 sm:w-28">
                        {" "}
                        <Image
                          src={plan.image}
                          alt={plan.name}
                          width={112}
                          height={96}
                          className="h-full w-full object-cover"
                        />{" "}
                      </div>{" "}
                      {/* Main Content */}{" "}
                      <div className="min-w-0 flex-1">
                        {" "}
                        {/* Title + Equipment */}{" "}
                        <div>
                          {" "}
                          <h3 className="truncate text-base font-black uppercase tracking-tight text-white sm:text-lg">
                            {" "}
                            {plan.name}{" "}
                          </h3>{" "}
                          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                            {" "}
                            {plan.equipment}{" "}
                          </p>{" "}
                        </div>{" "}
                        {/* Stats */}{" "}
                        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                          {" "}
                          <div className="flex items-center gap-1.5 text-gray-400">
                            {" "}
                            <span>◷</span> <span>{plan.duration} min</span>{" "}
                          </div>{" "}
                          <div className="flex items-center gap-1.5 text-gray-400">
                            {" "}
                            <span>🔥</span>{" "}
                            <span>{plan.caloriesBurned}</span>{" "}
                          </div>{" "}
                          <div className="flex items-center gap-1.5 text-gray-400">
                            {" "}
                            <span className="text-[#C2F800]">★</span>{" "}
                            <span>{plan.rating}</span>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                      {/* Actions */}{" "}
                      <div className="flex items-center gap-2 lg:flex-row">
                        {" "}
                        <button className="btn btn-sm flex-1 rounded-lg border border-[#30343D] bg-transparent text-xs font-bold uppercase hover:border-[#C2F800] hover:bg-transparent hover:text-[#C2F800] sm:flex-none">
                          {" "}
                          View Details{" "}
                        </button>{" "}
                        <button className="btn btn-sm flex-1 rounded-lg bg-[#C2F800] text-xs font-black uppercase text-black hover:bg-[#D4FF33] sm:flex-none">
                          {" "}
                          Mark as Done{" "}
                        </button>{" "}
                        <button
                          className="btn btn-square btn-sm rounded-lg border border-[#30343D] bg-transparent text-gray-500 hover:border-red-500 hover:bg-transparent hover:text-red-500"
                          aria-label="Remove exercise"
                        >
                          {" "}
                          ×{" "}
                        </button>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                ))
              ) : (
                <div className="my-12 rounded-2xl bg-[#13161D] px-5 py-6 sm:px-8 text-center flex flex-col max-w-full h-100 space-y-2  justify-center">
                  <span className="text-l font-black text-white sm:text-xl">
                    NOTHING HERE YET
                  </span>
                  <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                    Browse the library and add a lift to get today moving.
                  </span>
                  <div className="flex justify-center">
                    <Link href="/">
                      <button
                        type="button"
                        className="flex h-10 items-center justify-center gap-2 bg-[#C2F800] px-5 cursor-pointer text-xs font-bold text-black transition hover:bg-[#d4ff3d] rounded-3xl mt-5"
                      >
                        Go to workouts
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <div className="my-12 rounded-2xl bg-[#13161D] px-5 py-6 sm:px-8 text-center flex flex-col max-w-full h-100 space-y-2  justify-center">
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
          </div> */}
        </div>
      </div>
    );
}