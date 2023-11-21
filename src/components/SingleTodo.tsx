import { Todo } from "@/app/model"
import React, { useEffect, useRef, useState } from "react"
import { MdDeleteOutline } from "react-icons/md"
import { MdOutlineModeEdit } from "react-icons/md"
import { Draggable } from "@hello-pangea/dnd"

interface Props {
  index: number
  todos: Todo[]
  todo: Todo
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todos, todo, setTodos, index }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const intpurRef = useRef<HTMLInputElement>(null)
  const [editTodo, setEditTodo] = useState<string>(todo.title)

  useEffect(() => {
    intpurRef.current?.focus()
  }, [isEdit])

  const handeCompleted = (e: React.MouseEvent, id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)))
  }

  const handeDelete = (e: React.MouseEvent, id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEdit = (e: React.MouseEvent) => {
    setIsEdit(true)
  }

  const handleAddTodo = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title: editTodo } : todo)))
    setIsEdit(false)
  }

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <div
          className="flex p-[20px] flex-col items-start gap-[16px] self-stretch rounded-[12px] bg-[#F2BE22]"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {!todo.isDone && isEdit ? (
            <form
              className="w-full flex justify-between px-4 py-2"
              onSubmit={(e) => handleAddTodo(e, todo.id)}
            >
              <input
                ref={intpurRef}
                type="text"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
                className="text-[#618264] w-10/12 px-4 py-2 border-2 border-[#B0D9B1] rounded-md"
                placeholder="Enter your job here"
              />
            </form>
          ) : (
            <p className="self-stretch text-[18px] not-italic font-bold leading-[normal]">
              {todo.title}
            </p>
          )}

          <div className="flex gap-[10px]">
            <span className="text-white text-xl" onClick={handleEdit}>
              <MdOutlineModeEdit />
            </span>
            <span className="text-white text-xl">
              <MdDeleteOutline />
            </span>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default SingleTodo
