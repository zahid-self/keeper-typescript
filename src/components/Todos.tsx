import React from "react"
import { Todo } from "@/app/model"
import SingleTodo from "./SingleTodo"
import { SortableContext } from "@dnd-kit/sortable"
import { useDroppable } from "@dnd-kit/core"

interface Props {
  todos: string[]
  title: string
}

const Todos: React.FC<Props> = ({ todos, title }: Props) => {
  const { setNodeRef } = useDroppable({ id: title })

  return (
    <section className="w-[600px] p-[40px] items-start gap-[40px]">
      <div className="flex p-[24px] flex-col justify-center items-start gap-[24px] flex-[1_0_0] rounded-[16px] bg-[#F29727]">
        <h2>{title}</h2>
        <SortableContext id={title} items={todos}>
          <div className="w-full flex flex-col gap-[10px] py-4" ref={setNodeRef}>
            {todos.map((title, index) => (
              <SingleTodo key={index} title={title} />
            ))}
          </div>
        </SortableContext>
      </div>
    </section>
  )
}

export default Todos
