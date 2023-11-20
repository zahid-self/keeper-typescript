"use client"
import React, { useState } from "react"

import InputUI from "@/components/InputUI"
import { Todo } from "./model"
import TodoList from "@/components/Todos"

const Home: React.FC = () => {
  const [todoInput, setTodoInput] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    setTodos([...todos, { id: Date.now(), title: todoInput, isDone: false, createdAt: new Date() }])
    setTodoInput("")
  }

  return (
    <main className="w-8/12 mx-auto flex justify-center items-center h-screen text-white">
      <div className="bg-[#618264] p-4 rounded-md	">
        <InputUI todoInput={todoInput} setTodoInput={setTodoInput} handleAddTodo={handleAddTodo} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </main>
  )
}

export default Home
