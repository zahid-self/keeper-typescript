import React from "react"

const WorkTime: React.FC = () => {
  return (
    <div className="flex p-[24px] flex-col justify-between items-start flex-[1_0_0] self-stretch rounded-[6px] border-[2px] border-[solid] border-[#F0F1F2] bg-[#FFF]">
      <div className="flex justify-between items-center self-stretch">
        <p className="text-[20px] not-italic font-semibold leading-[30px] tracking-[-0.2px]">
          Work Time
        </p>
        <div className="flex px-[14px] py-[6px] justify-center items-center gap-[16px] rounded-[6px] border-[2px] border-[solid] border-[#2D3036] bg-[#FFF]">
          <span className="text-justify text-[14px] not-italic font-medium leading-[24px]">
            June, Week 1
          </span>
        </div>
      </div>
    </div>
  )
}

export default WorkTime
