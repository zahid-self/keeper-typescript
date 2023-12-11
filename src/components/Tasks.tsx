import React, { useMemo } from "react"
import { Todo } from "@/app/model"
import { SortableContext } from "@dnd-kit/sortable"
import { useDroppable } from "@dnd-kit/core"
import ColumnHeader from "./ColumnHeader"
import SingleCard from "./SingleCard"

interface Props {
  todos: Todo[]
  title: string
}

const Tasks: React.FC<Props> = ({ todos, title }: Props) => {
  const { setNodeRef } = useDroppable({ id: title })
  const todoIds = useMemo(() => {
    return todos.map((todo) => todo.id)
  }, [todos])

  return (
    <>
      <div className="flex w-full flex-col items-start gap-[24px]">
        <ColumnHeader columnName={title} />
        <SortableContext id={title} items={todoIds}>
          <div ref={setNodeRef} className="flex flex-col items-start gap-[16px]">
            {todos.map((todo) => (
              <SingleCard todo={todo} hasThumb={false} key={todo?.id} />
            ))}
          </div>
        </SortableContext>
      </div>
    </>
  )
}

export default Tasks
