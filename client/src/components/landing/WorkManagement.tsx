import Image from "next/image"
import React from "react"

const WorkManagement = () => {
  return (
    <section className="flex w-full flex-col justify-center items-center gap-[100px] py-[150px]">
      <div className="flex flex-col justify-center items-center gap-[100px]">
        <div className="flex container mx-auto items-center gap-[60px]">
          <div className="flex flex-col items-start gap-[60px] flex-[1_0_0]">
            <div className="flex flex-col items-start gap-[24px] self-stretch relative">
              <div className="w-[678.738px] h-[65.549px] -rotate-[0.504deg] absolute lef-0 top-[160px] bottom-[106.027px] -z-50">
                <Image
                  src={"./horizontal.svg"}
                  width={482}
                  height={29}
                  alt=""
                  className="-rotate-[0.697deg] flex-shrink-0"
                />
              </div>
              <h3 className="self-stretch text-[#212529] text-[72px] font-bold leading-[normal] tracking-[-1.44px] z-50">
                Project <br /> Management
              </h3>
              <p className="self-stretch text-[#212529] text-[18px] font-normal leading-[30px] tracking-[-0.36px]">
                Images, videos, PDFs and audio files are supported. Create math expressions and
                diagrams directly from the app. Take photos with the mobile app and save them to a
                note.
              </p>
            </div>
            <button className="flex px-[40px] py-[20px] justify-center items-center gap-[10px] rounded-[6px] bg-[#4F9CF9] text-white">
              Get Started
              <span className="flex items-start gap-[4px]">
                <Image src={"./rightArrow.svg"} width={14} height={14} alt="" />
              </span>
            </button>
          </div>
          <div className="w-[748px] h-[547px] flex-shrink-0 bg-black"></div>
        </div>
      </div>
      <div className="flex container mx-auto items-center gap-[100px]">
        <Image src={"/work_together.png"} width={710} height={661} alt="" />
        <div className="flex flex-col items-start gap-[60px] flex-[1_0_0]">
          <div className="flex flex-col items-start gap-[24px] self-stretch relative">
            <div className="w-[678.738px] h-[65.549px] -rotate-[0.504deg] absolute lef-0 top-[160px] bottom-[106.027px] -z-50">
              <Image
                src={"./horizontal.svg"}
                width={482}
                height={29}
                alt=""
                className="-rotate-[0.697deg] flex-shrink-0"
              />
            </div>
            <h3 className="self-stretch text-[#212529] text-[72px] font-bold leading-[normal] tracking-[-1.44px] z-50">
              Work Together
            </h3>
            <p className="self-stretch text-[#212529] text-[18px] font-normal leading-[30px] tracking-[-0.36px]">
              Images, videos, PDFs and audio files are supported. Create math expressions and
              diagrams directly from the app. Take photos with the mobile app and save them to a
              note.
            </p>
          </div>
          <button className="flex px-[40px] py-[20px] justify-center items-center gap-[10px] rounded-[6px] bg-[#4F9CF9] text-white">
            Get Started
            <span className="flex items-start gap-[4px]">
              <Image src={"./rightArrow.svg"} width={14} height={14} alt="" />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default WorkManagement
