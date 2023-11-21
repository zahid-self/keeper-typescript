"use client"
import React, { useState } from "react"
import InputUI from "@/components/InputUI"
import { Todo } from "./model"
import TodoList from "@/components/Todos"
import { DragDropContext, DropResult } from "@hello-pangea/dnd"

const Home: React.FC = () => {
  const [todoInput, setTodoInput] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    setTodos([...todos, { id: Date.now(), title: todoInput, isDone: false, createdAt: new Date() }])
    setTodoInput("")
  }

  const handleDragAndDrop = (result: DropResult) => {
    const { source, destination } = result

    if (!destination.droppableId) return
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return
    }

    let add
    const active = todos
    const completed = completedTodos

    if (source.droppableId === "todoList") {
      add = active[source.index]
      active.splice(source.index, 1)
    } else {
      add = completed[source.index]
      completed.splice(source.index, 1)
    }

    if (destination.droppableId === "completedTodoList") {
      completed.splice(destination.index, 0, add)
    } else {
      active.splice(destination.index, 0, add)
    }

    console.log(add, "add")
    console.log(active, "active")
    console.log(completed, "completed")

    setTodos(active)
    setCompletedTodos(completed)
  }

  return (
    <DragDropContext onDragEnd={handleDragAndDrop}>
      <main className="w-11/12 mx-auto flex justify-center items-start h-auto text-white mt-20">
        <div className=" p-4 rounded-md	">
          <InputUI
            todoInput={todoInput}
            setTodoInput={setTodoInput}
            handleAddTodo={handleAddTodo}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        </div>
      </main>
    </DragDropContext>
  )
}

export default Home
