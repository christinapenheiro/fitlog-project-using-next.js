import Image from "next/image";
import Link from "next/link";
import NavEnd from "./NavEnd";

const Nav = () => {
    return (
      <div className="border-b border-white/10 bg-[#090A0C]">
        <div className="navbar px-6 sm:px-8">
          <div className="navbar-start">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/logo.png"
                alt="FITLOG"
                width={20}
                height={20}
              />
              <span className="text-xs font-bold text-white">FITLOG</span>
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
                href="/my-plan"
                className="px-3 py-1 text-white/50 transition hover:text-white"
              >
                My Plan
              </Link>
            </div>
          </div>
          <NavEnd></NavEnd>
        
        </div>
      </div>
    );
};

export default Nav;