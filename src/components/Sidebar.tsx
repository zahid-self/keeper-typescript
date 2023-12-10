import React from "react"
import SingleNavItem from "./SingleNavItem"
import Image from "next/image"

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-[48px] self-stretch">
        <h1 className="text-[28px] font-normal leading-[40px] tracking-[-0.28px]">Keeper</h1>
        <div className="flex flex-col items-start gap-[4px] self-strech">
          <SingleNavItem title="Home" imagePath="./home.svg" link="/" />
          <SingleNavItem title="Projects" imagePath="./teams.svg" link="/projects" />
          <SingleNavItem title="Tasks" imagePath="./tasks.svg" link="/tasks" />
        </div>
      </div>
      <div className="flex px-[12px] py-[16px] items-center gap-[10px] self-strech">
        <div className="flex items-center gap-[16px] rounded-[6px] w-[50px]">
          <Image src={"/Profile Picture.png"} width={68} height={68} alt="User name" />
        </div>
        <div className="flex flex-col items-start flex-[1_0_0]">
          <h5 className="self-stretch text-[16px] not-italic font-medium leading-[26px]">
            Zahid Hasan
          </h5>
          <p className="self-stretch text-[#898E99] font-[Inter] text-[14px] not-italic font-normal leading-[24px]">
            mdjahidhasan920@gmail.com
          </p>
        </div>
      </div>
    </>
  )
}

export default Sidebar
