"use client"

export default function BrowseButton() {
    
    return (
      <button
        className="mt-8 rounded-sm bg-[#C2F800] px-3  md:px-6 py-1.5 lg:py-3 text-sm font-semibold text-black transition hover:bg-[#d4ff38] hover:scale-100 cursor-pointer"
        onClick={() =>
          window.scrollTo({
            top: document.getElementById("Library")?.offsetTop,
            behavior: "smooth",
          })
        }
      >
        BROWSE WORKOUTS
      </button>
    );
}