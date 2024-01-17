import Image from "next/image"
import React from "react"

interface Props {
  columnName: string
}

const ColumnHeader: React.FC<Props> = ({ columnName }) => {
  return (
    <div className="flex w-[356px] p-[16px] justify-between items-center rounded-[6px] border-[2px] border-[solid] border-[#F0F1F2] bg-[#FFF]">
      <div className="flex items-center gap-[16px]">
        <h3>{columnName}</h3>
        <div className="flex px-[14px] py-[6px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-solid border-[var(--gray-900,#2D3036)]">
          <p className="text-[14px] not-italic font-normal leading-[24px]">3</p>
        </div>
      </div>
      <div className="w-[24px] h-[24px] flex-shrink-0">
        <Image src={"/dotted.svg"} width={24} height={24} alt="" />
      </div>
    </div>
  )
}

export default ColumnHeader
