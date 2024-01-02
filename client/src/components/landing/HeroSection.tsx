import Image from "next/image"
import React from "react"

const HeroSection: React.FC = () => {
  return (
    <div
      className="flex container mx-auto justify-between items-center py-[140px]"
      style={{
        backgroundImage: `url('./heroBg.svg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="flex justify-between gap-[30px] items-center z-10">
        <div className="flex w-[656px] flex-col items-start gap-[60px]">
          <div className="flex flex-col items-start gap-[24px] self-stretch">
            <h3 className="text-[#4F9CF9] text-[64px] font-bold leading-[70px] tracking-[-1.28px]">
              Get More Done with keeper
            </h3>
            <p className="text-[#4F9CF9] text-[18px] font-normal leading-[30px] tracking-[-0.36px]">
              Project management software that enables your teams to collaborate, plan, analyze and
              manage everyday tasks
            </p>
          </div>
          <button className="flex p-[20px] items-center gap-[10px] rounded-[8px] bg-[#4F9CF9] text-white">
            Try keeper free
          </button>
        </div>
        <div className="flex flex-col items-start gap-[4px]">
          <Image src={"/keeper.gif"} width={1000} height={549} alt="Keeper" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
