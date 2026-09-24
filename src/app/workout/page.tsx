import type IExercise from "@/types/type";
import LibCard from "@/components/shared/LibCard";

export const libraryData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }
  return res.json();
};

const Workout = async () => {
  let libData: IExercise[] = [];

  try {
    libData = await libraryData();
    console.log(libData);
  } catch (error) {
    console.error(`Error loading data: ${error}`);
  }

  return (
    <div className="mx-4 sm:mx-6 lg:mx-8 overflow-hidden mb-15">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {libData.map((data: IExercise) => (
          <LibCard key={data.id} cardData={data} />
        ))}
      </div>
    </div>
  );
};

export default Workout;
