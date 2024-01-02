import Image from "next/image"
import React from "react"

const Footer = () => {
  return (
    <footer className="container mx-auto flex gap-[200px] pt-[150px] pb-[50px]">
      <div className="flex flex-col gap-[100px] w-full">
        <div className="w-full flex justify-evenly items-start gap-[100px]">
          <div className="flex flex-col items-start gap-[15px] flex-[1_0_0]">
            <h1 className="text-[#000] text-[28px] font-bold leading-[normal]">Keeper</h1>
            <p className="text-[#000] text-[18px] font-normal leading-[30px] tracking-[-0.36px]">
              whitepace was created for the new ways we live and work. We make a better workspace
              around the world
            </p>
          </div>
          <div className="flex flex-col items-start gap-[15px] flex-[1_0_0]">
            <p className="text-[#000] text-[18px] font-bold leading-[normal] tracking-[-0.36px]">
              Product
            </p>
            <p className="text-[#000] text-[16px] font-normal leading-[20px] tracking-[-0.32px]">
              Overview
            </p>
            <p className="text-[#000] text-[16px] font-normal leading-[20px] tracking-[-0.32px]">
              Overview
            </p>
            <p className="text-[#000] text-[16px] font-normal leading-[20px] tracking-[-0.32px]">
              Overview
            </p>
          </div>
          <div className="flex flex-col items-start gap-[15px] flex-[1_0_0]">
            <p className="text-[#000] text-[18px] font-bold leading-[normal] tracking-[-0.36px]">
              Product
            </p>
            <p className="text-[#000] text-[16px] font-normal leading-[20px] tracking-[-0.32px]">
              Overview
            </p>
            <p className="text-[#000] text-[16px] font-normal leading-[20px] tracking-[-0.32px]">
              Overview
            </p>
            <p className="text-[#000] text-[16px] font-normal leading-[20px] tracking-[-0.32px]">
              Overview
            </p>
          </div>
          <div className="flex flex-col items-start gap-[15px] flex-[1_0_0]">
            <p className="text-[#000] text-[18px] font-bold leading-[normal] tracking-[-0.36px]">
              Product
            </p>
            <p className="text-[#000] text-[16px] font-normal leading-[20px] tracking-[-0.32px]">
              Overview
            </p>
            <p className="text-[#000] text-[16px] font-normal leading-[20px] tracking-[-0.32px]">
              Overview
            </p>
            <p className="text-[#000] text-[16px] font-normal leading-[20px] tracking-[-0.32px]">
              Overview
            </p>
          </div>
          <div className="flex flex-col items-start gap-[23px]">
            <p className="text-[28px] font-bold leading-[36px] tracking-[-0.56px]">Try It Today</p>
            <p className="text-[#000] text-[16px] font-normal leading-[20px] tracking-[-0.32px]">
              Get started for free. Add your whole team as your needs grow.
            </p>
            <button className="flex px-[40px] py-[20px] justify-center items-center gap-[10px] rounded-[6px] bg-[#4F9CF9] text-white">
              Start Today
              <span className="flex items-start gap-[4px]">
                <Image src={"./rightArrow.svg"} width={14} height={14} alt="" />
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <p>© 2023 Keepr Inc. Copyright and rights reserved</p>
          <div className="flex gap-4">
            <p>Terms and conditions</p>
            <span>.</span>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
