import React from "react"
import { Todo } from "@/app/model"
import ColumnHeader from "./ColumnHeader"
import SingleCard from "./SingleCard"

interface Props {
  tasks: Todo[]
  title: string
}

const CurrenctTasks: React.FC<Props> = ({ tasks, title }: Props) => {
  return (
    <>
      <div className="flex w-full flex-col items-start gap-[24px]">
        <p className="text-[16px] font-medium leading-[26px] text-[#157BFF]">16.00</p>
        <div className="flex flex-col items-start gap-[16px]">
          {tasks.map((todo) => (
            <SingleCard todo={todo} hasThumb={false} key={todo?.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default CurrenctTasks
