"use client"
import React, { useState } from "react"
import SingleNavItem from "./SingleNavItem"
import Image from "next/image"
import Link from "next/link"
import AddProject from "./AddProject"
import TaskSvg from "./svgs/TaskSvg"
import HomeSvg from "./svgs/HomeSvg"
import ProjectsSvg from "./svgs/Projects"
import { usePathname } from "next/navigation"

const Sidebar: React.FC = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <div className="flex flex-col items-start gap-[48px] self-stretch">
        <h1 className="text-[28px] font-normal leading-[40px] tracking-[-0.28px]">Keeper</h1>
        <div className="flex flex-col items-start gap-[4px] self-strech">
          <SingleNavItem
            title="Home"
            strokeColor={pathname === "/dashboard" ? "#157BFF" : "#898E99"}
            link="/dashboard"
            SvgComponent={HomeSvg}
          />
          <SingleNavItem
            title="Projects"
            SvgComponent={ProjectsSvg}
            link="/dashboard/projects"
            strokeColor={pathname.includes("projects") ? "#157BFF" : "#898E99"}
          />
          <SingleNavItem
            title="Tasks"
            SvgComponent={TaskSvg}
            link="/dashboard/tasks"
            strokeColor={pathname.includes("tasks") ? "#157BFF" : "#898E99"}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <p className="w-full border border-[#898E99] mb-4"></p>
        <div className="flex justify-between">
          <p className="uppercase text-[#898E99] text-[16px] font-medium leading-[26px]">
            My Projects
          </p>
          <div className="w-50">
            <Image
              onClick={() => setIsShowModal(true)}
              className="cursor-pointer"
              src={"/plus.svg"}
              width={25}
              height={25}
              alt="Add Projects"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-[#F2EBFE] rounded-[6px] p-4">
            <p className="text-[16px] font-semibold leading-[normal]">Mobile App</p>
          </div>
          <div className="rounded-[6px] p-4">
            <p className="text-[16px] font-semibold leading-[normal]">Prisma App</p>
          </div>
          <div className="rounded-[6px] p-4">
            <p className="text-[16px] font-semibold leading-[normal]">Dashboard App</p>
          </div>
        </div>
      </div>
      <div className="flex px-[12px] py-[16px] items-center gap-[10px] self-strech">
        <div className="flex items-center gap-[16px] rounded-[6px] w-[50px]">
          <Image src={"/Profile Picture.png"} width={68} height={68} alt="User name" />
        </div>
        <div className="flex flex-col items-start flex-[1_0_0]">
          <h5 className="self-stretch text-[16px] not-italic font-medium leading-[26px]">
            Zahid Hasan
          </h5>
          <p className="self-stretch text-[#898E99] font-[Inter] text-[14px] not-italic font-normal leading-[24px]">
            mdjahidhasan920@gmail.com
          </p>
        </div>
      </div>

      {isShowModal && <AddProject setIsShowModal={setIsShowModal} />}
    </>
  )
}

export default Sidebar
