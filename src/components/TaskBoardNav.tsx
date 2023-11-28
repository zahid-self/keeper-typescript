import Link from "next/link"
import React from "react"

const TaskBoardNav = () => {
  return (
    <div className="inline-flex items-center gap-[32px]">
      <Link
        href={"#"}
        className="text-[#898E99] font-[Inter] text-[16px] not-italic font-medium leading-[26px]"
      >
        Overview
      </Link>
      <Link
        href={"#"}
        className="text-[#898E99] font-[Inter] text-[16px] not-italic font-medium leading-[26px]"
      >
        Board
      </Link>
      <Link
        href={"#"}
        className="text-[#898E99] font-[Inter] text-[16px] not-italic font-medium leading-[26px]"
      >
        Calender
      </Link>
    </div>
  )
}

export default TaskBoardNav
