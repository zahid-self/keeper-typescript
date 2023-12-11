import React, { useEffect, useRef } from "react"

type Props = {
  todoInput: string
  setTodoInput: React.Dispatch<React.SetStateAction<string>>
  handleAddTodo: (e: React.FormEvent) => void
}

const InputUI: React.FC<Props> = ({ todoInput, setTodoInput, handleAddTodo }) => {
  const intpurRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (intpurRef.current) {
      intpurRef.current.style.outline = "none"
    }
  }, [])

  return (
    <div className="w-full">
      <form className="flex justify-center px-4 py-2" onSubmit={handleAddTodo}>
        <input
          ref={intpurRef}
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          className="text-[#22A699] w-6/12 px-4 py-2 border-2 border-[#B0D9B1] rounded-md"
          placeholder="Enter your job here"
        />
        <button type="submit" className="bg-[#22A699] px-9 rounded-lg font-bold">
          Add Task
        </button>
      </form>
    </div>
  )
}
export default InputUI
