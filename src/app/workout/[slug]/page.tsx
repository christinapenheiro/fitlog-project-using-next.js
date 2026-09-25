import Image from "next/image";
import IExercise from "@/types/type";
import SaveButton from "@/components/shared/SaveButton";
import PlanButton from "@/components/shared/PlanButton";
import { notFound } from "next/navigation";

const libraryData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    notFound();
  }

  return res.json();
};

export default async function WorkoutDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await libraryData();

  const exercise = post.find(
    (data: IExercise) => String(data.id) === String(slug)
  );

  if (!exercise) {
    notFound();
  }

  const specs = [
    {
      label: "EQUIPMENT",
      value: exercise.equipment,
    },
    {
      label: "DIFFICULTY",
      value: exercise.difficulty,
    },
    {
      label: "SETS",
      value: exercise.sets,
    },
    {
      label: "REPS",
      value: exercise.reps,
    },
    {
      label: "DURATION",
      value: `${exercise.duration} min`,
    },
    {
      label: "CALORIES",
      value: `${exercise.caloriesBurned} kcal`,
    },
    {
      label: "RATING",
      value: exercise.rating,
    },
  ];

  return (
    <main className="px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-10 my-10 lg:my-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 max-w-180 mx-auto lg:max-w-none">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-[#15171D] lg:aspect-auto lg:min-h-162.5">
            <Image
              src={exercise.image}
              alt={exercise.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl text-center lg:text-left">
              {exercise.name}
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400 text-center lg:text-left">
              {exercise.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {exercise.muscleGroups.map((muscle:string) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#C2F800] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#15171D]">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex min-h-10.25 items-center justify-between border-b border-white/5 px-4 last:border-b-0 sm:px-5"
                >
                  <span className="text-[9px] font-bold tracking-widest text-gray-500">
                    {spec.label}
                  </span>

                  <span className="max-w-[65%] text-right text-xs text-gray-200">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <h2 className="text-[11px] font-black tracking-wider">
                INSTRUCTIONS
              </h2>

              <ol className="mt-3 space-y-3">
                {exercise.instructions.map((instruction : string, index : number) => (
                  <li
                    key={index}
                    className="flex gap-3 text-xs leading-relaxed text-gray-400"
                  >
                    <span className="shrink-0 text-gray-500">{index + 1}.</span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <PlanButton card={exercise}></PlanButton>

              <SaveButton card={exercise}></SaveButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
