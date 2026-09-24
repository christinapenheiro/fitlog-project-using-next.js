"use client"
import Link from 'next/link';
import { useContext } from 'react';
import { PlanContext } from '@/context/plan';

const NavEnd = () => {
    const {todayPlan,saveLater} = useContext(PlanContext)


    return (
      <div className="navbar-end">
        <div className="flex items-center gap-4 text-[10px] sm:text-sm text-white/70">
          <Link href="/my-plan" className="flex items-center gap-1">
            <span>Plan</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[10px] text-black font-semibold">
              {todayPlan.length}
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-1.5">
            <span>Saved</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/30 text-[10px] font-semibold ">
              {saveLater.length}
            </span>
          </Link>
        </div>
      </div>
    );
};

export default NavEnd;