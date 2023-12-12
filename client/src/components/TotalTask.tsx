import React from "react"

const TotalTask: React.FC = () => {
  return (
    <div className="flex w-[658px] p-[24px] flex-col items-start gap-[24px] self-stretch rounded-[6px] border-[2px] border-[solid] border-[#F0F1F2] bg-[#FFF]">
      <div className="flex gap-[16px] items-center">
        <h2 className="text-[20px] not-italic font-semibold leading-[30px] tracking-[-0.2px]">
          Total Task
        </h2>
        <div className="flex px-[14px] py-[6px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-solid border-[#2D3036]">
          <p className="text-[14px] not-italic font-medium leading-[24px]">28</p>
        </div>
      </div>
      <div className="flex items-start gap-[4px] flex-[1_0_0] self-stretch">
        <div className="flex px-[24px] py-[32px] flex-col justify-center items-start gap-[32px] flex-[1_0_0] self-stretch rounded-[6px] bg-[#EF4444] relative">
          {/* <div className="w-[107px] h-[150px] absolute -left-[70px] -top-[127px] rounded-[6px] bg-[#F48282]"></div> */}
          <p className="text-white self-stretch text-[48px] not-italic font-normal leading-[54px] tracking-[-0.48px]">
            3
          </p>
          <p className="text-white self-stretch text-[16px] not-italic font-normal leading-[26px]">
            To do
          </p>
          {/* <div className="w-[107px] h-[150px] absolute -right-[63.5px] -bottom-[109px] rounded-[6px] bg-[#F48282]"></div> */}
        </div>
        <div className="flex px-[24px] py-[32px] flex-col justify-center items-start gap-[32px] flex-[1_0_0] self-stretch rounded-[6px] bg-[#F18E19] relative">
          {/* <div className="w-[107px] h-[150px] absolute -left-[70px] -top-[127px] rounded-[6px] bg-[#F48282]"></div> */}
          <p className="text-white self-stretch text-[48px] not-italic font-normal leading-[54px] tracking-[-0.48px]">
            3
          </p>
          <p className="text-white self-stretch text-[16px] not-italic font-normal leading-[26px]">
            To do
          </p>
          {/* <div className="w-[107px] h-[150px] absolute -right-[63.5px] -bottom-[109px] rounded-[6px] bg-[#F48282]"></div> */}
        </div>
        <div className="flex px-[24px] py-[32px] flex-col justify-center items-start gap-[32px] flex-[1_0_0] self-stretch rounded-[6px] bg-[#157BFF] relative">
          {/* <div className="w-[107px] h-[150px] absolute -left-[70px] -top-[127px] rounded-[6px] bg-[#F48282]"></div> */}
          <p className="text-white self-stretch text-[48px] not-italic font-normal leading-[54px] tracking-[-0.48px]">
            3
          </p>
          <p className="text-white self-stretch text-[16px] not-italic font-normal leading-[26px]">
            To do
          </p>
          {/* <div className="w-[107px] h-[150px] absolute -right-[63.5px] -bottom-[109px] rounded-[6px] bg-[#F48282]"></div> */}
        </div>
        <div className="flex px-[24px] py-[32px] flex-col justify-center items-start gap-[32px] flex-[1_0_0] self-stretch rounded-[6px] bg-[#59C3C8] relative">
          {/* <div className="w-[107px] h-[150px] absolute -left-[70px] -top-[127px] rounded-[6px] bg-[#F48282]"></div> */}
          <p className="text-white self-stretch text-[48px] not-italic font-normal leading-[54px] tracking-[-0.48px]">
            3
          </p>
          <p className="text-white self-stretch text-[16px] not-italic font-normal leading-[26px]">
            To do
          </p>
          {/* <div className="w-[107px] h-[150px] absolute -right-[63.5px] -bottom-[109px] rounded-[6px] bg-[#F48282]"></div> */}
        </div>
      </div>
    </div>
  )
}

export default TotalTask
