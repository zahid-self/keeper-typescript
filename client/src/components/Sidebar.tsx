"use client"
import React, { useState } from "react"
import SingleNavItem from "./SingleNavItem"
import Image from "next/image"
import Link from "next/link"
import AddProject from "./AddProject"

const Sidebar: React.FC = () => {
  const [isShowModal, setIsShowModal] = useState(false)

  return (
    <>
      <div className="flex flex-col items-start gap-[48px] self-stretch">
        <h1 className="text-[28px] font-normal leading-[40px] tracking-[-0.28px]">Keeper</h1>
        <div className="flex flex-col items-start gap-[4px] self-strech">
          <SingleNavItem title="Home" imagePath="./home.svg" link="/" />
          <SingleNavItem title="Projects" imagePath="./teams.svg" link="/projects" />
          <SingleNavItem title="Tasks" imagePath="./tasks.svg" link="/tasks" />
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
              src={"./plus.svg"}
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
