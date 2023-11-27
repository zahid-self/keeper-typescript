"use client"
import React, { useState } from "react"
import { DndContext, DragEndEvent, DragOverEvent } from "@dnd-kit/core"
import Todos from "@/components/Todos"
import { arrayMove } from "@dnd-kit/sortable"
import Image from "next/image"
import SingleNavItem from "@/components/SingleNavItem"
import Sidebar from "@/components/Sidebar"
import Link from "next/link"
import SingleCard from "@/components/SingleCard"
import ColumnHeader from "@/components/ColumnHeader"
import { Todo } from "./model"

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

  const Todo: Todo = {
    id: 1,
    title: "Landing Page and Dashboard",
    description: "Nice and clean landing page, and also good for children.",
    status: { isHigh: true, label: "High" },
    role: "All",
    isDone: false,
    createdAt: "28 Jul",
    time: "16:00"
  }

  return (
    <main className="flex gap-8">
      <aside className="w-[320px] flex h-screen p-[32px] flex-col justify-between items-start flex-shrink-0 rounded-tl-[6px] rounded-br-none rounded-tr-none rounded-bl-[6px] border-[2px] border-solid border-[#F0F1F2] bg-[#FFF]">
        <Sidebar />
      </aside>
      <section className="w-4/5 flex flex-col gap-8 h-screen">
        <nav className="flex w-full p-[32px] justify-between items-center rounded-tl-none rounded-br-none rounded-tr-[6px] rounded-bl-none border-[2px] border-[#F0F1F2] bg-[#FFF]">
          <h1 className="text-[28px] not-italic font-medium leading-[40px] tracking-[-0.28px]">
            Team Astrology
          </h1>
          <div className="flex w-[347px] px-[16px] py-[10px] justify-center items-center gap-[16px] flex-shrink-0 rounded-[6px] border-[2px] border-[solid] border-[#F0F1F2] bg-[#F4F6F8]">
            <Image src={"./search.svg"} width={24} height={24} alt="search" />
            <p className="flex-[1_0_0] text-[#898E99] font-[Inter] text-[16px] not-italic font-normal leading-[26px]">
              Search
            </p>
          </div>
          <div className="flex items-center gap-[32px]">
            <div className="flex items-center gap-[36px]">
              <div className="flex items-end -space-x-12">
                <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-[solid] border-[#FFF] bg-[#73B06F]">
                  <Image src={"./user.svg"} width={32} height={32} alt="User 1" />
                </div>
                <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-[solid] border-[#FFF] bg-[#73B06F]">
                  <Image src={"./user.svg"} width={32} height={32} alt="User 1" />
                </div>
                <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-[solid] border-[#FFF] bg-[#73B06F]">
                  <Image src={"./user.svg"} width={32} height={32} alt="User 1" />
                </div>
                <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-[solid] border-[#FFF] bg-[#73B06F]">
                  <Image src={"./user.svg"} width={32} height={32} alt="User 1" />
                </div>
                <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-[solid] border-[#FFF] bg-[#73B06F]">
                  <Image src={"./user.svg"} width={32} height={32} alt="User 1" />
                </div>
                <div className="flex w-[32px] h-[32px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-[solid] border-[#FFF] bg-[#73B06F]">
                  <Image src={"./user.svg"} width={32} height={32} alt="User 1" />
                </div>
              </div>
              <p className="text-center font-[Inter] text-[16px] not-italic font-medium leading-[26px]">
                14 Members
              </p>
            </div>
            <button className="flex w-[98px] px-[16px] py-[10px] justify-center items-center gap-[10px] rounded-[6px] bg-[#157BFF] text-white">
              Invite
            </button>
          </div>
        </nav>
        <div className="inline-flex items-center gap-[32px]">
          <Link
            href={"#"}
            className="text-[#898E99] font-[Inter] text-[16px] not-italic font-medium leading-[26px]"
          >
            Overview
          </Link>
          <Link
            href={"#"}
            className="text-[#898E99] font-[Inter] text-[16px] not-italic font-medium leading-[26px]"
          >
            Board
          </Link>
          <Link
            href={"#"}
            className="text-[#898E99] font-[Inter] text-[16px] not-italic font-medium leading-[26px]"
          >
            Calender
          </Link>
        </div>
        <DndContext onDragEnd={dradEndHandler} onDragOver={dragOnverHanlder}>
          <section className="flex w-full items-start gap-[24px] justify-between overflow-x-scroll">
            <div className="flex w-full flex-col items-start gap-[24px]">
              <ColumnHeader columnName="To do" />
              <SingleCard todo={Todo} hasThumb={false} />
              <SingleCard todo={Todo} hasThumb={true} thumbLink="./Image.png" />
            </div>
            <div className="flex flex-col items-start gap-[24px]">
              <ColumnHeader columnName="Doing" />
              <SingleCard todo={Todo} hasThumb={false} />
            </div>
            <div className="flex flex-col items-start gap-[24px]">
              <ColumnHeader columnName="In review" />
              <SingleCard todo={Todo} hasThumb={false} />
            </div>
            <div className="flex flex-col items-start gap-[24px]">
              <ColumnHeader columnName="Done" />
              <SingleCard todo={Todo} hasThumb={false} />
            </div>
            <div className="flex flex-col items-start gap-[24px]">
              <ColumnHeader columnName="Done" />
              <SingleCard todo={Todo} hasThumb={false} />
            </div>
          </section>
        </DndContext>
      </section>
    </main>
  )
}

export default Home
