import Image from "next/image"
import React from "react"

const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="flex container mx-auto flex-col justify-center items-center gap-[60px] py-[150px]"
    >
      <div className="flex flex-col justify-center items-center gap-[60px]">
        <div className="flex w-full flex-col items-center gap-[24px]">
          <h3 className="self-stretch text-[#212529] text-center text-[72px] font-bold leading-[normal] tracking-[-1.44px]">
            Choose Your Plan
          </h3>
          <p className="text-[#212529] text-center text-[18px] font-normal leading-[30px] tracking-[-0.36px]">
            Whether you want to get organized, keep your personal life on track, or boost workplace
            productivity, Evernote has the right plan for you.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center items-center gap-[32px]">
        <div className="flex px-[44px] py-[40px] flex-col justify-center items-start gap-[25px] flex-[1_0_0] rounded-[10px] border-[1px] border-[solid] border-[#FFE492] bg-[#FFF]">
          <div className="flex flex-col items-start gap-[25px] self-stretch">
            <p className="text-[#212529] text-[24px] font-semibold leading-[36px]">Free</p>
            <p className="text-[#212529] text-[36px] font-bold leading-normal -tracking-[0.72px]">
              $0
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
        <div className="flex px-[44px] py-[80px] flex-col justify-center items-start gap-[25px] flex-[1_0_0] rounded-[10px] border-[1px] border-[solid] border-[#FFE492] bg-[#FFF]">
          <div className="flex flex-col items-start gap-[25px] self-stretch">
            <p className="text-[#212529] text-[24px] font-semibold leading-[36px]">Free</p>
            <p className="text-[#212529] text-[36px] font-bold leading-normal -tracking-[0.72px]">
              $0
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
          <button className="flex px-[40px] py-[16px] justify-center items-center rounded-[8px] border-[1px] border-solid bg-[#4F9CF9] text-white">
            Get Started
          </button>
        </div>
        <div className="flex px-[44px] py-[40px] flex-col justify-center items-start gap-[25px] flex-[1_0_0] rounded-[10px] border-[1px] border-[solid] border-[#FFE492] bg-[#FFF]">
          <div className="flex flex-col items-start gap-[25px] self-stretch">
            <p className="text-[#212529] text-[24px] font-semibold leading-[36px]">Free</p>
            <p className="text-[#212529] text-[36px] font-bold leading-normal -tracking-[0.72px]">
              $0
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
      </div>
    </section>
  )
}

export default Pricing
