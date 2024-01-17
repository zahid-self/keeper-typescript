import Image from "next/image"
import React from "react"

const TopNavigation: React.FC = () => {
  return (
    <nav className="flex w-full p-[32px] justify-between items-center rounded-tl-none rounded-br-none rounded-tr-[6px] rounded-bl-none border-[2px] border-[#F0F1F2] bg-[#FFF]">
      <h1 className="text-[28px] not-italic font-medium leading-[40px] tracking-[-0.28px]">
        Team Astrology
      </h1>
      <div className="flex w-[347px] px-[16px] py-[10px] justify-center items-center gap-[16px] flex-shrink-0 rounded-[6px] border-[2px] border-[solid] border-[#F0F1F2] bg-[#F4F6F8]">
        <Image src={"/search.svg"} width={24} height={24} alt="search" />
        <p className="flex-[1_0_0] text-[#898E99] font-[Inter] text-[16px] not-italic font-normal leading-[26px]">
          Search
        </p>
      </div>
      <div className="flex items-center gap-[32px]">
        <div className="flex items-center gap-[36px]">
          <div className="flex items-end -space-x-12">
            <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-[solid] border-[#FFF] bg-[#73B06F]">
              <Image src={"/user.svg"} width={32} height={32} alt="User 1" />
            </div>
            <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-[solid] border-[#FFF] bg-[#73B06F]">
              <Image src={"/user.svg"} width={32} height={32} alt="User 1" />
            </div>
            <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-[solid] border-[#FFF] bg-[#73B06F]">
              <Image src={"/user.svg"} width={32} height={32} alt="User 1" />
            </div>
            <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-[solid] border-[#FFF] bg-[#73B06F]">
              <Image src={"/user.svg"} width={32} height={32} alt="User 1" />
            </div>
            <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-[solid] border-[#FFF] bg-[#73B06F]">
              <Image src={"/user.svg"} width={32} height={32} alt="User 1" />
            </div>
            <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-[solid] border-[#FFF] bg-[#73B06F]">
              <Image src={"/user.svg"} width={32} height={32} alt="User 1" />
            </div>
          </div>
          <p className="text-center font-[Inter] text-[16px] not-italic font-medium leading-[26px]">
            14 Members
          </p>
        </div>
        <button className="flex w-[98px] px-[16px] py-[10px] justify-center items-center gap-[10px] rounded-[6px] bg-[#157BFF] text-white">
          Invite
        </button>
      </div>
    </nav>
  )
}

export default TopNavigation
