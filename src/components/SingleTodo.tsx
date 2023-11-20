import { Todo } from "@/app/model"
import React, { useEffect, useRef, useState } from "react"
import { MdDeleteOutline } from "react-icons/md"
import { IoCheckmarkDoneOutline } from "react-icons/io5"
import { MdOutlineModeEdit } from "react-icons/md"

interface Props {
  todos: Todo[]
  todo: Todo
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  setTodoInput: React.Dispatch<React.SetStateAction<string>>
  todoInput: string
}

const SingleTodo: React.FC<Props> = ({ todos, todo, setTodos, setTodoInput, todoInput }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const intpurRef = useRef<HTMLInputElement>(null)
  const [editTodo, setEditTodo] = useState<string>(todo.title)

  useEffect(() => {
    if (intpurRef.current) {
      intpurRef.current.style.outline = "none"
    }
  }, [])

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
    <tr className="rounded-lg mb-4">
      {isEdit ? (
        <td className="w-full">
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
        </td>
      ) : (
        <td className="px-6 py-4">{todo.title}</td>
      )}
      <td className="px-6 py-4">{todo.isDone ? "Completed" : "Pending"}</td>
      <td className="px-6 py-4">{todo.createdAt.toLocaleString()}</td>
      <td className="px-6 py-4">
        <div className="flex gap-[5px]">
          <span onClick={handleEdit}>
            <MdOutlineModeEdit />
          </span>
          <span onClick={(e) => handeCompleted(e, todo.id)}>
            <IoCheckmarkDoneOutline />
          </span>
          <span onClick={(e) => handeDelete(e, todo.id)}>
            <MdDeleteOutline />
          </span>
        </div>
      </td>
    </tr>
  )
}

export default SingleTodo
