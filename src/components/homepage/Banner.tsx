import Image from "next/image";
import BrowseButton from "./BrowseButton";

const Banner = () => {



  return (
    <div className="mx-4 sm:mx-6 lg:mx-8 overflow-hidden rounded-2xl bg-[#15171D] my-15">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* w-full */}
        <div className="w-full lg:w-[50%] px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16 text-center md:text-left">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#C2F800] mx-auto md:mx-0">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-xl text-4xl lg:text-6xl font-black leading-[0.95] tracking-tight text-white mx-auto md:mx-0">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-6 max-w-lg text-sm sm:text-base leading-7 text-gray-400 mx-auto md:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <BrowseButton />
        </div>

        <div className="relative w-full lg:w-1/2 py-8">
          <Image
            src="/assets/banner.png"
            alt="Workout"
            width={400}
            height={400}
            className="w-2xl mx-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
