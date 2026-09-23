import Image from "next/image";
import Link from "next/link";

const Nav = () => {
    return (
      <div className="border-b border-white/10 bg-[#090A0C]">
        <div className="navbar px-6 sm:px-8">
          <div className="navbar-start">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/logo.png"
                alt="FITLOG"
                width={15}
                height={15}
              />
              <span className="text-[15px] font-bold text-white">FITLOG</span>
            </Link>
          </div>

          <div className="navbar-center">
            <div className="flex items-center gap-1 text-[10px] sm:text-sm">
              <Link
                href="/"
                className="rounded-full bg-[#c2f80052] px-3 py-1 font-medium text-[#C2F800]"
              >
                Workouts
              </Link>

              <Link
                href="/"
                className="px-3 py-1 text-white/50 transition hover:text-white"
              >
                My Plan
              </Link>
            </div>
          </div>

          <div className="navbar-end">
            <div className="flex items-center gap-4 text-[10px] sm:text-sm text-white/70">
              <Link href="/" className="flex items-center gap-1">
                <span>Plan</span>
                <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#C2F800] text-[7px] text-black">
                  0
                </span>
              </Link>

              <Link href="/" className="flex items-center gap-1.5">
                <span>Saved</span>
                <span className="flex h-3 w-3 items-center justify-center rounded-full border border-white/30 text-[7px]">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Nav;