import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    return (
      <div className="">
        <footer className="border-t border-white/10 bg-[#090A0C]">
          <div className="flex  items-center justify-between px-6 sm:px-8 py-7">

            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/logo.png"
                alt="FITLOG"
                width={20}
                height={20}
              />
              <span className="text-xs font-bold text-white">FITLOG</span>
            </Link>

            <p className="text-right text-[10px] text-white/50 sm:text-xs">
              © 2026 FitLog — Workout Library. Train hard, log honest.
            </p>
          </div>
        </footer>
      </div>
    );
};

export default Footer;