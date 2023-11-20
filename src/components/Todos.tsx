import React from "react"

import { Todo } from "@/app/model"
import SingleTodo from "./SingleTodo"

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  setTodoInput: React.Dispatch<React.SetStateAction<string>>
  todoInput: string
}

const TodoList: React.FC<Props> = ({ todos, setTodos, setTodoInput, todoInput }: Props) => {
  return (
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
            todos.map((todo: Todo) => (
              <SingleTodo
                key={todo.id}
                todos={todos}
                todo={todo}
                setTodos={setTodos}
                setTodoInput={setTodoInput}
                todoInput={todoInput}
              />
            ))
          ) : (
            <tr>
              <td className="px-6 py-4">No todo added yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  )
}

export default TodoList
