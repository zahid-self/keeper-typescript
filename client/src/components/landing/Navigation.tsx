import Link from "next/link"
import React from "react"

const Navigation: React.FC = () => {
  return (
    <header className="flex container mx-auto py-[16px] justify-between items-center">
      <div className="w-full flex justify-between items-center">
        <div className="flex w-[191px] justify-between items-center">
          <h1 className="text-[#4F9CF9] text-[28px] font-bold leading-[normal]">Keeper</h1>
        </div>
        <div className="flex items-center">
          <nav className="flex w-[551px] items-start gap-[32px]">
            <Link
              href={"#features"}
              className="text-[#4F9CF9] text-[18px] font-medium leading-[23px]"
            >
              Features
            </Link>
            <Link
              href={"#pricing"}
              className="text-[#4F9CF9] text-[18px] font-medium leading-[23px]"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex h-[60px] justify-end items-start gap-[24px]">
            <button className="flex h-[60px] px-[40px] py-[12px] justify-center items-center gap-[10px] rounded-[8px] bg-[#FFE492] text-[#043873] text-[18px] font-medium leading-[23px] tracking-[-0.36px]">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
