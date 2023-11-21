import React from "react"
import { Todo } from "@/app/model"
import SingleTodo from "./SingleTodo"
import { Droppable } from "@hello-pangea/dnd"

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  completedTodos: Todo[]
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos
}: Props) => {
  return (
    <section className="flex w-[1241px] p-[40px] items-start gap-[40px]">
      <Droppable droppableId="todoList">
        {(provided) => (
          <div
            className="flex p-[24px] flex-col justify-center items-start gap-[24px] flex-[1_0_0] rounded-[16px] bg-[#F29727]"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {todos.length > 0 ? (
              todos.map((todo, index) => (
                <SingleTodo
                  key={todo.id}
                  todos={todos}
                  todo={todo}
                  setTodos={setTodos}
                  index={index}
                />
              ))
            ) : (
              <p>No todos available</p>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="completedTodoList">
        {(provided) => (
          <div
            className="flex p-[24px] flex-col justify-center items-start gap-[24px] flex-[1_0_0] rounded-[16px] bg-[#22A699]"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {completedTodos.length > 0 ? (
              completedTodos.map((todo, index) => (
                <SingleTodo
                  key={todo.id}
                  todos={completedTodos}
                  todo={todo}
                  setTodos={setCompletedTodos}
                  index={index}
                />
              ))
            ) : (
              <p>No completed todos</p>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </section>
  )
}

export default TodoList
