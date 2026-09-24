import Image from "next/image";
import Link from "next/link";
import NavEnd from "./NavEnd";
import NavButton from "./NavButton";

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

          <NavButton></NavButton>
          <NavEnd></NavEnd>
        
        </div>
      </div>
    );
};

export default Nav;