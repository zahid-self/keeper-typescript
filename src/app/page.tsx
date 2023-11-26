"use client"
import React, { useState } from "react"
import { DndContext, DragEndEvent, DragOverEvent } from "@dnd-kit/core"
import Todos from "@/components/Todos"
import { arrayMove } from "@dnd-kit/sortable"

interface ITodoList {
  [key: string]: string[]
}

const Home: React.FC = () => {
  const [todoList, setTodoList] = useState<ITodoList>({
    Process: ["Learn React", "Learn dnd-kit"],
    Done: ["Learn Typescript", "Learn css"]
  })

  //drag end event handler function
  const dradEndHandler = (e: DragEndEvent) => {
    // check if item is drag into unknown area
    if (!e.over || !e.active.data.current || !e.over.data.current) return

    //check if the position is still the same
    if (e.active?.id === e.over?.id) return

    //check if it's not in the same column (moved to different column)
    if (
      e.active.data.current?.sortable.containerId !== e.over?.data.current?.sortable.containerId
    ) {
      return
    }

    const containerName = e.active.data.current?.sortable.containerId
    //change the items position based on drag end target position
    setTodoList((todoList) => {
      const temp = { ...todoList }
      if (!e.over) return temp
      const oldIdx = temp[containerName].indexOf(e.active.id.toString())
      const newIdx = temp[containerName].indexOf(e.over.id.toString())
      temp[containerName] = arrayMove(temp[containerName], oldIdx, newIdx)
      return temp
    })
  }

  const dragOnverHanlder = (e: DragOverEvent) => {
    //Check if item is drag into unknown area
    if (!e.over) return

    //Get the initial and target sortable list name
    const initialContainer = e.active.data.current?.sortable?.containerId
    const targetContainer = e.over.data.current?.sortable.containerId

    //if there are none inital sortable list name then it not sortable item
    if (!initialContainer) return

    //order the item based on target item position
    const temp = { ...todoList }

    //if there are no target container then item is moved into a droppable zone
    //droppable = whole area of the sortable list (works when the sortable list is empty)
    if (!targetContainer) {
      //if item already there then don't re-add it
      if (todoList[e.over!.id].includes(e.active.id.toString())) return temp

      //remove item it's initial container
      temp[initialContainer] = temp[initialContainer].filter(
        (todo) => todo !== e.active.id.toString()
      )

      //add item into it's target container which the droppable zone belogs to
      temp[e.over!.id].push(e.active.id.toString())

      setTodoList(temp)
    }

    //if the item is drag around in the same container then just reorder the list
    if (initialContainer === targetContainer) {
      const oldIdx = temp[initialContainer].indexOf(e.active.id.toString())
      const newIdx = temp[initialContainer].indexOf(e.over!.id.toString())
      temp[initialContainer] = arrayMove(temp[initialContainer], oldIdx, newIdx)
      setTodoList(temp)
    } else {
      //if the item is drag into another different container

      //remove item from it's initial container
      temp[initialContainer] = temp[initialContainer].filter(
        (todo) => todo !== e.active.id.toString()
      )

      //add item to it's target container
      const newIdx = temp[targetContainer]?.indexOf(e.over!.id.toString())
      temp[targetContainer]?.splice(newIdx, 0, e.active.id.toString())
      setTodoList(temp)
    }
  }

  return (
    <DndContext onDragEnd={dradEndHandler} onDragOver={dragOnverHanlder}>
      <main className="w-11/12 mx-auto flex justify-center items-start h-auto text-white mt-20">
        <h1 className="text-center">React DND Multiple Container example</h1>
        <div className="flex p-4 rounded-md	">
          {Object.keys(todoList).map((key, index) => (
            <Todos key={index} todos={todoList[key]} title={key} />
          ))}
        </div>
      </main>
    </DndContext>
  )
}

export default Home
