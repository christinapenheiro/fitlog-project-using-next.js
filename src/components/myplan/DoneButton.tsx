"use client";
import { useState } from "react";
import { toast } from "react-toastify";

const DoneButton = () => {
  const [isDone, setIsDone] = useState<boolean>(false);
  const handleClick = () => {
    setIsDone(!isDone);
    toast.success("Marked as done!");
  };

  return (
    <button
      className={`btn btn-sm flex-1 rounded-lg bg-[#C2F800] text-xs font-black ${isDone && "btn-disabled bg-gray-400"} uppercase text-black hover:bg-[#D4FF33] sm:flex-none cursor-pointer`}
      onClick={handleClick}
    >
      Mark as Done
    </button>
  );
};

export default DoneButton;
