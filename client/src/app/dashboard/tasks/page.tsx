"use client"
import React, { useState } from "react"
import { DndContext, DragEndEvent, DragOverEvent, DragStartEvent, DragOverlay } from "@dnd-kit/core"
import Todos from "@/components/Tasks"
import { arrayMove } from "@dnd-kit/sortable"
import Sidebar from "@/components/Sidebar"
import { Todo } from "../../model"
import TopNavigation from "@/components/TopNavigation"
import SingleCard from "@/components/SingleCard"
import { createPortal } from "react-dom"
import Image from "next/image"
import TotalTask from "@/components/TotalTask"
import WorkTime from "@/components/WorkTime"
import ActivityLog from "@/components/ActivityLog"
import TaskBoardNav from "@/components/TaskBoardNav"
import CurrenctTasks from "@/components/CurrentTasks"

interface ITodoList {
  [key: string]: Todo[]
}
const Home: React.FC = () => {
  const [activeCard, setActiveCard] = useState<Todo | null>(null)
  const [activeTab, setActiveTab] = useState<boolean>(false)

  const [todoList, setTodoList] = useState<ITodoList>({
    Todo: [
      {
        id: 1,
        title: "Learn React",
        description: "Nice and clean landing page, and also good for children.",
        status: { isHigh: true, label: "High" },
        role: "All",
        isDone: false,
        createdAt: "28 Jul",
        time: "16:00"
      },
      {
        id: 2,
        title: "Learn Typescript",
        description: "Nice and clean landing page, and also good for children.",
        status: { isHigh: true, label: "High" },
        role: "All",
        isDone: false,
        createdAt: "28 Jul",
        time: "16:00"
      }
    ],
    Inreview: [
      {
        id: 3,
        title: "Make todo more smooth",
        description: "Nice and clean landing page, and also good for children.",
        status: { isHigh: true, label: "High" },
        role: "DEV",
        isDone: false,
        createdAt: "28 Jul",
        time: "16:00"
      },
      {
        id: 4,
        title: "Fix if any bug arise",
        description: "Nice and clean landing page, and also good for children.",
        status: { isHigh: true, label: "High" },
        role: "DEV",
        isDone: false,
        createdAt: "28 Jul",
        time: "16:00"
      }
    ],
    Done: [
      {
        id: 5,
        title: "Explore Web SQL",
        description: "Nice and clean landing page, and also good for children.",
        status: { isHigh: true, label: "High" },
        role: "All",
        isDone: false,
        createdAt: "28 Jul",
        time: "16:00"
      },
      {
        id: 6,
        title: "Apply Testing",
        description: "Nice and clean landing page, and also good for children.",
        status: { isHigh: true, label: "High" },
        role: "All",
        isDone: false,
        createdAt: "28 Jul",
        time: "16:00"
      }
    ]
  })

  //drag end event handler function
  const dradEndHandler = (e: DragEndEvent) => {
    // check if item is drag into unknown area
    if (!e.over || !e.active.data.current || !e.over.data.current) return

    //check if the position is still the same
    if (e.active?.id === e.over?.id) return

    //check if it's not in the same column (moved to different column)
    if (
      e.active.data.current?.sortable?.containerId !== e.over?.data.current?.sortable?.containerId
    ) {
      return
    }

    const containerName = e.active.data.current?.sortable.containerId
    //change the items position based on drag end target position
    setTodoList((todoList) => {
      const temp = { ...todoList }
      if (!e.over) return temp
      const oldIdx = temp[containerName].findIndex(
        (currentValue) => currentValue.id === e.active.id,
        {}
      )
      const newIdx = temp[containerName].findIndex(
        (currentValue) => currentValue.id === e.over.id,
        {}
      )
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
      const existingItem = todoList[initialContainer].find(
        (currentValue) => currentValue.id === e.active.id
      )
      console.log(existingItem)
      //if item already there then don't re-add it
      if (existingItem) return temp

      //remove item it's initial container
      temp[initialContainer] = temp[initialContainer].filter((todo) => todo.id !== e.active.id)

      //add item into it's target container which the droppable zone belogs to
      todoList[initialContainer].push(existingItem)

      setTodoList(temp)
    }

    //if the item is drag around in the same container then just reorder the list
    if (initialContainer === targetContainer) {
      const oldIdx = temp[initialContainer].findIndex(
        (currentValue) => currentValue.id === e.active.id,
        {}
      )
      const newIdx = temp[initialContainer].findIndex(
        (currentValue) => currentValue.id === e.over.id,
        {}
      )
      temp[initialContainer] = arrayMove(temp[initialContainer], oldIdx, newIdx)
      setTodoList(temp)
    } else {
      //if the item is drag into another different container

      //remove item from it's initial container
      temp[initialContainer] = temp[initialContainer].filter((todo) => todo.id !== e.active.id)

      //add item to it's target container
      const newIdx = temp[targetContainer]?.findIndex(
        (currentValue) => currentValue.id === e.over!.id
      )
      const existingItem = todoList[initialContainer].find(
        (currentValue) => currentValue.id === e.active.id
      )
      temp[targetContainer]?.splice(newIdx, 0, existingItem)
      setTodoList(temp)
    }
  }

  const dragStartHandler = (e: DragStartEvent) => {
    if (e.active.data.current?.type === "Card") {
      setActiveCard(e.active.data.current.todo)
      return
    }
  }

  return (
    <main className="flex gap-8">
      <aside className="w-[320px] flex h-screen p-[32px] flex-col justify-between items-start flex-shrink-0 rounded-tl-[6px] rounded-br-none rounded-tr-none rounded-bl-[6px] border-[2px] border-solid border-[#F0F1F2] bg-[#FFF]">
        <Sidebar />
      </aside>
      <section className="w-4/5 flex flex-col gap-8 h-screen">
        <TopNavigation />
        <TaskBoardNav />

        {/* Overview */}
        <section
          id="taskTab-1"
          className="flex w-full px-[0px] py-0 flex-col items-center gap-[16px] task-tab"
        >
          <div className="flex h-[282px] items-start gap-[16px] self-stretch">
            <TotalTask />
            <WorkTime />
          </div>
          <div className="flex p-[24px] flex-col items-center gap-[24px] self-stretch rounded-[6px] border-[2px] border-[solid] border-[#F0F1F2] bg-[#FFF]">
            <ActivityLog />
          </div>
        </section>
        {/* Task board */}
        <DndContext
          onDragStart={dragStartHandler}
          onDragEnd={dradEndHandler}
          onDragOver={dragOnverHanlder}
        >
          <div id="taskTab-2" className="task-tab" style={{ display: "none" }}>
            <section className="flex w-full items-start gap-[24px] justify-between overflow-x-scroll">
              {Object.keys(todoList).map((column, index) => (
                <Todos todos={todoList[column]} title={column} key={index} />
              ))}
            </section>
          </div>
          {typeof window === "object" &&
            createPortal(
              <DragOverlay>
                {activeCard && <SingleCard todo={activeCard} hasThumb={false} thumbLink="" />}
              </DragOverlay>,
              document.body
            )}
        </DndContext>

        {/* Calendar */}
        <section id="taskTab-3" className="task-tab" style={{ display: "none" }}>
          <div className="flex w-full flex-col items-start gap-[40px]">
            <div className="flex flex-col items-start gap-[16px] self-stretch">
              <div className="flex items-start gap-[16px] self-stretch">
                <div className="flex p-[16px] items-center gap-[20px] rounded-[6px] border-solid border-[2px] border[#F0F1F2] bg-[#fff]">
                  <Image src={"/calendar_left.svg"} width={24} height={24} alt="left" />
                  <p className="text-[24px] not-italic font-semibold leading-[30px] tracking-[-0.2px]">
                    2023
                  </p>
                  <Image src={"/calendar_right.svg"} width={24} height={24} alt="left" />
                </div>
                <div className="flex px-[32px] py-[18px] justify-between items-start flex-[1_0_0] rounded-[6px] border-[2px] border-solid border-[#F0F1F2] bg-[#FFF]">
                  <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                    Jan
                  </p>
                  <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                    Feb
                  </p>
                  <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                    Mar
                  </p>
                  <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                    Jun
                  </p>
                  <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                    Jul
                  </p>
                  <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                    Aug
                  </p>
                  <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                    Sep
                  </p>
                  <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                    Oct
                  </p>
                  <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                    Nov
                  </p>
                  <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                    Dec
                  </p>
                </div>
              </div>
              <div className="flex px-[32px] py-[14px] justify-between items-center self-stretch rounded-[6px] border-[2px] border-[solid] border-[#F0F1F2] bg-[#FFF]">
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[rgb(137,142,153)] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
                <p className="text-[#898E99] text-[16px] not-italic font-medium leading-[26px]">
                  1
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[24px] self-stretch">
              <div className="flex items-center gap-[12px]">
                <p className="text-[20px] font-semibold leading-[30px] tracking-[-0.2px]">
                  Thursday, 7th September 2023
                </p>
                <Image src={"/calendar_date_time_separator.svg"} width={2} height={25} alt="" />
                <p className="text-[20px] font-semibold leading-[30px] tracking-[-0.2px]">
                  16:00 PM
                </p>
              </div>
              <div className="flex items-start gap-[24px]">
                {Object.keys(todoList).map((column, index) => (
                  <CurrenctTasks tasks={todoList[column]} title={column} key={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Home
