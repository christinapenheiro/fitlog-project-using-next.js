import type IExercise from "@/types/type";
import Image from "next/image";
import Link from "next/link";

interface LibCardProps {
  cardData: IExercise;
}

export default function LibCard({ cardData }: LibCardProps) {

  return (
    <Link href={`/workouts/${cardData.id}`}>
      <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#15171D] transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-[#202228]">
          <Image
            src={cardData.image}
            alt={cardData.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Difficulty */}
          <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            {cardData.difficulty}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Muscle groups */}
          <div className="mb-3 flex flex-wrap gap-2">
            {cardData.muscleGroups.slice(0, 3).map((muscle) => (
              <span
                key={muscle}
                className="rounded-full border border-[#C2F800]/30 bg-[#C2F800]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#C2F800]"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout name */}
          <h2 className="mb-2 text-lg font-black uppercase tracking-tight text-white">
            {cardData.name}
          </h2>

          {/* Equipment */}
          <p className="mb-5 flex items-center gap-2 text-sm text-gray-400">
            <span className="text-base">⌁</span>
            {cardData.equipment}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <span className="text-[#C2F800]">◷</span>
              <span>{cardData.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[#C2F800]">●</span>
              <span>{cardData.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[#C2F800]">★</span>
              <span>{cardData.rating}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
