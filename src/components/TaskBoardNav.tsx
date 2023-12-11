import Link from "next/link"
import React from "react"
import { openTabs } from "@/utils/ulits"

const TaskBoardNav: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-[32px]">
      <Link
        href={"#"}
        className="text-[#898E99] font-[Inter] text-[16px] not-italic font-medium leading-[26px] hover:text-[#157BFF]"
        onClick={() => openTabs("taskTab-1", "tab-lable-1")}
      >
        <p className="tab-lable-1">Overview</p>
      </Link>
      <Link
        href={"#"}
        className="text-[#898E99] font-[Inter] text-[16px] not-italic font-medium leading-[26px] hover:text-[#157BFF]"
        onClick={() => openTabs("taskTab-2", "tab-lable-2")}
      >
        <p className="tab-lable-2">Baord</p>
      </Link>
      <Link
        href={"#"}
        className="text-[#898E99] font-[Inter] text-[16px] not-italic font-medium leading-[26px] hover:text-[#157BFF]"
        onClick={() => openTabs("taskTab-3", "tab-lable-3")}
      >
        <p className="tab-lable-3">Calender</p>
      </Link>
    </div>
  )
}

export default TaskBoardNav
