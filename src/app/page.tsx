"use client"
import React, { useState } from "react"
import { MdDeleteOutline } from "react-icons/md"
import { IoCheckmarkDoneOutline } from "react-icons/io5"
import InputUI from "@/components/InputUI"
import { Todo } from "./model"

const Home: React.FC = () => {
  const [todoInput, setTodoInput] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    setTodos([...todos, { id: Date.now(), title: todoInput, isDone: false, createdAt: Date.now() }])
    setTodoInput("")
  }

  return (
    <main className="w-8/12 mx-auto flex justify-center items-center h-screen text-white">
      <div className="bg-[#618264] p-4 rounded-md	">
        <InputUI todoInput={todoInput} setTodoInput={setTodoInput} handleAddTodo={handleAddTodo} />
        <header className="w-full flex justify-between"></header>
        <section className="w-full flex text-left">
          <table className="table-fixed w-full">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-4">
                  Title
                </th>
                <th scope="col" className="px-6 py-4">
                  Status
                </th>
                <th scope="col" className="px-6 py-4">
                  Created
                </th>
                <th scope="col" className="px-6 py-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <tr key={todo.id} className="bg-[#79AC78] rounded-lg mb-4 border-2">
                    <td className="px-6 py-4">{todo.title}</td>
                    <td className="px-6 py-4">{todo.isDone ? "Completed" : "Pending"}</td>
                    <td className="px-6 py-4">{todo.createdAt}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-[5px]">
                        <IoCheckmarkDoneOutline />
                        <MdDeleteOutline />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-6 py-4">No todo added yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  )
}

export default Home
