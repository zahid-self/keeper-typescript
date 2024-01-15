import Image from "next/image"
import React from "react"

interface Props {
  packName: string
  price: number
}

const SinglePrice: React.FC<Props> = ({ packName, price }) => {
  return (
    <div className="flex px-[44px] py-[40px] flex-col justify-center items-start gap-[25px] flex-[1_0_0] rounded-[10px] border-[1px] border-[solid] border-[#FFE492] bg-[#FFF]">
      <div className="flex flex-col items-start gap-[25px] self-stretch">
        <p className="text-[#212529] text-[24px] font-semibold leading-[36px]">{packName}</p>
        <p className="text-[#212529] text-[36px] font-bold leading-normal -tracking-[0.72px]">
          ${price}
        </p>
        <p className="self-stretch text-[18px] font-medium leading-[23px] tracking-[-0.36px]">
          Capture ideas and find them quickly
        </p>
      </div>
      <div className="flex flex-col items-start gap-[28px] self-stretch">
        <div className="flex items-center gap-[19px] self-stretch">
          <Image src={"./tick.svg"} width={18} height={18} alt="Right" />
          <p className="text-[16px] font-normal leading-[20px] -tracking-[0.36px]">
            Sync unlimited devices
          </p>
        </div>
        <div className="flex items-center gap-[19px] self-stretch">
          <Image src={"./tick.svg"} width={18} height={18} alt="Right" />
          <p className="text-[16px] font-normal leading-[20px] -tracking-[0.36px]">
            Sync unlimited devices
          </p>
        </div>
        <div className="flex items-center gap-[19px] self-stretch">
          <Image src={"./tick.svg"} width={18} height={18} alt="Right" />
          <p className="text-[16px] font-normal leading-[20px] -tracking-[0.36px]">
            Sync unlimited devices
          </p>
        </div>
        <div className="flex items-center gap-[19px] self-stretch">
          <Image src={"./tick.svg"} width={18} height={18} alt="Right" />
          <p className="text-[16px] font-normal leading-[20px] -tracking-[0.36px]">
            Sync unlimited devices
          </p>
        </div>
        <div className="flex items-center gap-[19px] self-stretch">
          <Image src={"./tick.svg"} width={18} height={18} alt="Right" />
          <p className="text-[16px] font-normal leading-[20px] -tracking-[0.36px]">
            Sync unlimited devices
          </p>
        </div>
      </div>
      <button className="flex px-[40px] py-[16px] justify-center items-center rounded-[8px] border-[1px] border-solid border-[#FFE492] bg-[#FFF]">
        Get Started
      </button>
    </div>
  )
}

export default SinglePrice
