import React from "react"

const SingleCardOverlay = ({ setNodeRef, listeners, attributes, style }) => {
  return (
    <div
      className="flex w-[356px] flex-col items-start gap-[2px]"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
    >
      <div className="flex p-[16px] flex-col items-start gap-[16px] self-stretch rounded-tl-[6px] rounded-br-none rounded-tr-[6px] rounded-bl-none border-[2px] border-[solid] border-[#F0F1F2] bg-[#FFF] h-[150px]"></div>
      <div className="flex px-[16px] py-[18px] items-start gap-[24px] self-stretch rounded-tl-none rounded-br-[6px] rounded-tr-none rounded-bl-[6px] border-[2px] border-[solid] border-[#F0F1F2] bg-[#FFF] h-[102px]"></div>
    </div>
  )
}

export default SingleCardOverlay
