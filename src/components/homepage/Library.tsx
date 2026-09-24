import React from "react";
import type IExercise from "@/types/type";
import LibCard from "../shared/LibCard";

const libraryData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }
  return res.json();
};

const Library = async () => {
  let libData: IExercise[] = [];

  try {
    libData = await libraryData();
    console.log(libData);
  } catch (error) {
    console.error(`Error loading data: ${error}`);
  }

  return (
    <section id="Library" className="mx-4 sm:mx-6 lg:mx-8 overflow-hidden mb-15">
      <h1 className="max-w-xl text-2xl lg:text-3xl font-black leading-[0.95] tracking-tight text-white mx-auto md:mx-0 text-center md:text-left">
        THE LIBRARY
      </h1>
      <p className="mt-6 max-w-lg text-sm sm:text-base leading-7 text-gray-400 mx-auto md:mx-0 my-5 text-center md:text-left">
        Twelve lifts covering every major muscle group.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {libData.map((data: IExercise) => (
          <LibCard key={data.id} cardData={data} />
        ))}
      </div>
    </section>
  );
};

export default Library;
