import React from "react"

type Props = {
  todoInput: string
  setTodoInput: React.Dispatch<React.SetStateAction<string>>
  handleAddTodo: (e: React.FormEvent) => void
}

const InputUI: React.FC<Props> = ({ todoInput, setTodoInput, handleAddTodo }) => {
  return (
    <div className="w-full">
      <form className="flex justify-between" onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          className="text-[#618264] w-10/12 px-4 py-2 border-2 border-[#B0D9B1] rounded-md"
          placeholder="Enter your job here"
        />
        <button type="submit" className="bg-[#B0D9B1] px-10 rounded-lg font-bold">
          Add Task
        </button>
      </form>
    </div>
  )
}
export default InputUI
