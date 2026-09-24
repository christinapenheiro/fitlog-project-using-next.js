import React from 'react';


const SaveButton = () => {
    return (
      <button
        type="button"
        className="flex h-11 items-center justify-center gap-2 rounded-lg cursor-pointer border border-white/15 bg-transparent px-5 text-xs font-medium text-gray-300 transition hover:border-white/30 hover:text-white"
      >
        <span>♡</span>
        Save for later
      </button>
    );
};

export default SaveButton;