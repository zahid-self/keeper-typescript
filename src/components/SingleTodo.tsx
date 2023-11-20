import { Todo } from "@/app/model"
import React from "react"
import { MdDeleteOutline } from "react-icons/md"
import { IoCheckmarkDoneOutline } from "react-icons/io5"

interface Props {
  todos: Todo[]
  todo: Todo
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todos, todo, setTodos }: Props) => {
  const handeCompleted = (e: React.MouseEvent, id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)))
  }

  const handeDelete = (e: React.MouseEvent, id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <tr className="rounded-lg mb-4">
      <td className="px-6 py-4">{todo.title}</td>
      <td className="px-6 py-4">{todo.isDone ? "Completed" : "Pending"}</td>
      <td className="px-6 py-4">{todo.createdAt.toLocaleString()}</td>
      <td className="px-6 py-4">
        <div className="flex gap-[5px]">
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
