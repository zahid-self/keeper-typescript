import Image from "next/image"
import Link from "next/link"
import React from "react"

interface Props {
  title: string
  imagePath: string
  link: string
}

const SingleNavItem: React.FC<Props> = ({ title, imagePath, link }) => {
  return (
    <Link href={link} className="flex px-[16px] py-[12px] items-start gap-[16px] self-strech">
      <div className="w-[24px] h-auto">
        <Image src={imagePath} width={24} height={24} alt="/home" />
      </div>
      <p className="text-[16px] not-italic font-medium leading-[26px]">{title}</p>
    </Link>
  )
}

export default SingleNavItem
