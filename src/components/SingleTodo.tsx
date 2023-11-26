import React, { CSSProperties } from "react"
import { MdDeleteOutline } from "react-icons/md"
import { MdOutlineModeEdit } from "react-icons/md"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

interface ITodoItem {
  title: string
}

const SingleTodo: React.FC<ITodoItem> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props.title,
    transition: {
      duration: 500, // milliseconds
      easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)"
    }
  })

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div
      className="flex p-[20px] flex-col items-start gap-[16px] self-stretch rounded-[12px] bg-[#F2BE22]"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
    >
      <p className="self-stretch text-[18px] not-italic font-bold leading-[normal]">
        {props.title}
      </p>
      <div className="flex gap-[10px]">
        <span className="text-white text-xl">
          <MdOutlineModeEdit />
        </span>
        <span className="text-white text-xl">
          <MdDeleteOutline />
        </span>
      </div>
    </div>
  )
}

export default SingleTodo
