import Image from "next/image"
import React from "react"

const Features: React.FC = () => {
  return (
    <div id="features" className="flex container mx-auto justify-between items-center">
      <div className="flex flex-col gap-[50px]">
        <h3 className="text-[72px] font-bold leading-[normal] tracking-[-1.44px]">
          What Benefit Will <br /> You Get
        </h3>
        <div className="flex flex-col gap-[30px] items-center">
          <div className="flex items-center gap-[19px] self-stretch">
            <Image src={"./subtract.svg"} width={18} height={18} alt="Right" />
            <p className="text-[16px] font-normal leading-[20px] -tracking-[0.36px]">
              Sync unlimited devices
            </p>
          </div>
          <div className="flex items-center gap-[19px] self-stretch">
            <Image src={"./subtract.svg"} width={18} height={18} alt="Right" />
            <p className="text-[16px] font-normal leading-[20px] -tracking-[0.36px]">
              Sync unlimited devices
            </p>
          </div>
          <div className="flex items-center gap-[19px] self-stretch">
            <Image src={"./subtract.svg"} width={18} height={18} alt="Right" />
            <p className="text-[16px] font-normal leading-[20px] -tracking-[0.36px]">
              Sync unlimited devices
            </p>
          </div>
        </div>
      </div>
      <div className="w-[600px] h-auto flex-shrink-0 rounded-[20px]">
        <Image src={"/services.png"} width={600} height={529} alt="Services" />
      </div>
    </div>
  )
}

export default Features
