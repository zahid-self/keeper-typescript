import { Todo } from "@/app/model"
import Image from "next/image"
import React from "react"

interface Props {
  todo: Todo
  hasThumb: boolean
  thumbLink?: string
}

const SingleCard: React.FC<Props> = ({ todo, hasThumb, thumbLink }) => {
  return (
    <div className="flex w-[356px] flex-col items-start">
      <div className="flex p-[16px] flex-col items-start gap-[16px] self-stretch rounded-tl-[6px] rounded-br-none rounded-tr-[6px] rounded-bl-none border-[2px] border-[solid] border-[#F0F1F2] bg-[#FFF]">
        <div className="flex flex-col items-start gap-[16px] self-strech">
          <div className="flex flex-col items-start gap-[24px] self-stretch">
            <div className="flex justify-between items-center self-stretch">
              <div className="flex items-center gap-[12px]">
                <span
                  className={`flex px-[14px] py-[6px] flex-col justify-center items-center gap-[10px] rounded-[6px] ${
                    todo.status.isHigh
                      ? "text-[#832525] bg-[#FDECEC]"
                      : "bg-[#FDF7E6] text-[#816204]"
                  } font-[Inter] text-[14px] not-italic font-medium leading-[24px]`}
                >
                  {todo.status.label}
                </span>
                <span className="flex px-[14px] py-[6px] flex-col justify-center items-center gap-[10px] rounded-[6px] bg-[#E8F2FF] text-[#0C448C] font-[Inter] text-[14px] not-italic font-medium leading-[24px] uppercase">
                  ui/ux
                </span>
              </div>
              <div className="w-[24px] h-[24px] flex-shrink-0">
                <Image src={"./dotted.svg"} width={24} height={24} alt="" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-[8px] self-stretch">
              <h2 className="self-stretch text-[20px] not-italic font-semibold leading-[30px] tracking-[-0.2px]">
                {todo.title}
              </h2>
              <p className="self-stretch text-[16px] not-italic font-normal leading-[26px]">
                {todo.description}
              </p>
            </div>
          </div>
          {hasThumb && (
            <div
              className="h-[337px] self-stretch rounded-[6px] border-2 border-[#F0F1F2]"
              style={{
                backgroundImage: `url(${thumbLink})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            ></div>
          )}
        </div>
      </div>
      <div className="flex px-[16px] py-[18px] items-start gap-[24px] self-stretch rounded-tl-none rounded-br-[6px] rounded-tr-none rounded-bl-[6px] border-[2px] border-[solid] border-[#F0F1F2] bg-[#FFF]">
        <div className="flex flex-col items-start gap-[6px] flex-[1_0_0]">
          <h5 className="self-stretch text-[#616874] font-[Inter] text-[14px] not-italic font-medium leading-[24px]">
            Assign
          </h5>
          <div className="flex items-start self-stretch -space-x-2">
            <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-solid border-[#FFF] bg-[#73B06F]">
              <Image src={"./user.svg"} width={32} height={32} alt="User 1" />
            </div>
            <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-solid border-[#FFF] bg-[#73B06F]">
              <Image src={"./user.svg"} width={32} height={32} alt="User 1" />
            </div>
            <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-solid border-[#FFF] bg-[#73B06F]">
              <Image src={"./user.svg"} width={32} height={32} alt="User 1" />
            </div>
            <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-solid border-[#FFF] bg-[#73B06F]">
              <Image src={"./user.svg"} width={32} height={32} alt="User 1" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-[6px] flex-[1_0_0]">
          <h5 className="self-stretch text-[#616874] font-[Inter] text-[14px] not-italic font-medium leading-[24px] text-right">
            Deadline
          </h5>
          <div className="flex justify-end items-center gap-[6px] self-stretch">
            <p className="font-[16px] not-italic leading-[26px]">26 Nov</p>
            <Image src={"./single_dot.svg"} width={4} height={4} alt="" />
            <p className="font-[16px] not-italic leading-[26px]">7.00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
