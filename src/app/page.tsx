"use client"
import React, { useState } from "react"
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  closestCenter,
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  DragStartEvent,
  DragOverlay
} from "@dnd-kit/core"
import Todos from "@/components/Todos"
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import Sidebar from "@/components/Sidebar"
import { Todo } from "./model"
import TopNavigation from "@/components/TopNavigation"
import TaskBoardNav from "@/components/TaskBoardNav"
import SingleCard from "@/components/SingleCard"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import { openTabs } from "@/utils/ulits"

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
        <div className="inline-flex items-center gap-[32px]">
          <Link
            href={"#"}
            className="text-[#898E99] font-[Inter] text-[16px] not-italic font-medium leading-[26px] hover:text-[#157BFF]"
            onClick={() => openTabs("taskTab-1", "tab-lable-1")}
          >
            <p className="tab-lable-1">Overview</p>
          </Link>
          <Link
            href={"#"}
            className="text-[#898E99] font-[Inter] text-[16px] not-italic font-medium leading-[26px] hover:text-[#157BFF]"
            role="presentation"
            onClick={() => openTabs("taskTab-2", "tab-lable-2")}
          >
            <p className="tab-lable-2">Baord</p>
          </Link>
          <Link
            href={"#"}
            className="text-[#898E99] font-[Inter] text-[16px] not-italic font-medium leading-[26px] hover:text-[#157BFF]"
            role="presentation"
          >
            <p className="tab-lable-3">Calender</p>
          </Link>
        </div>

        {/* Overview */}
        <div
          id="taskTab-1"
          className="flex w-full px-[0px] py-0 flex-col items-center gap-[16px] task-tab"
        >
          <div className="flex h-[282px] items-start gap-[16px] self-stretch">
            <div className="flex w-[658px] p-[24px] flex-col items-start gap-[24px] self-stretch rounded-[6px] border-[2px] border-[solid] border-[#F0F1F2] bg-[#FFF]">
              <div className="flex gap-[16px] items-center">
                <h2 className="text-[20px] not-italic font-semibold leading-[30px] tracking-[-0.2px]">
                  Total Task
                </h2>
                <div className="flex px-[14px] py-[6px] flex-col justify-center items-center gap-[10px] rounded-[6px] border-[2px] border-solid border-[#2D3036]">
                  <p className="text-[14px] not-italic font-medium leading-[24px]">28</p>
                </div>
              </div>
              <div className="flex items-start gap-[4px] flex-[1_0_0] self-stretch">
                <div className="flex px-[24px] py-[32px] flex-col justify-center items-start gap-[32px] flex-[1_0_0] self-stretch rounded-[6px] bg-[#EF4444] relative">
                  {/* <div className="w-[107px] h-[150px] absolute -left-[70px] -top-[127px] rounded-[6px] bg-[#F48282]"></div> */}
                  <p className="text-white self-stretch text-[48px] not-italic font-normal leading-[54px] tracking-[-0.48px]">
                    3
                  </p>
                  <p className="text-white self-stretch text-[16px] not-italic font-normal leading-[26px]">
                    To do
                  </p>
                  {/* <div className="w-[107px] h-[150px] absolute -right-[63.5px] -bottom-[109px] rounded-[6px] bg-[#F48282]"></div> */}
                </div>
                <div className="flex px-[24px] py-[32px] flex-col justify-center items-start gap-[32px] flex-[1_0_0] self-stretch rounded-[6px] bg-[#F18E19] relative">
                  {/* <div className="w-[107px] h-[150px] absolute -left-[70px] -top-[127px] rounded-[6px] bg-[#F48282]"></div> */}
                  <p className="text-white self-stretch text-[48px] not-italic font-normal leading-[54px] tracking-[-0.48px]">
                    3
                  </p>
                  <p className="text-white self-stretch text-[16px] not-italic font-normal leading-[26px]">
                    To do
                  </p>
                  {/* <div className="w-[107px] h-[150px] absolute -right-[63.5px] -bottom-[109px] rounded-[6px] bg-[#F48282]"></div> */}
                </div>
                <div className="flex px-[24px] py-[32px] flex-col justify-center items-start gap-[32px] flex-[1_0_0] self-stretch rounded-[6px] bg-[#157BFF] relative">
                  {/* <div className="w-[107px] h-[150px] absolute -left-[70px] -top-[127px] rounded-[6px] bg-[#F48282]"></div> */}
                  <p className="text-white self-stretch text-[48px] not-italic font-normal leading-[54px] tracking-[-0.48px]">
                    3
                  </p>
                  <p className="text-white self-stretch text-[16px] not-italic font-normal leading-[26px]">
                    To do
                  </p>
                  {/* <div className="w-[107px] h-[150px] absolute -right-[63.5px] -bottom-[109px] rounded-[6px] bg-[#F48282]"></div> */}
                </div>
                <div className="flex px-[24px] py-[32px] flex-col justify-center items-start gap-[32px] flex-[1_0_0] self-stretch rounded-[6px] bg-[#59C3C8] relative">
                  {/* <div className="w-[107px] h-[150px] absolute -left-[70px] -top-[127px] rounded-[6px] bg-[#F48282]"></div> */}
                  <p className="text-white self-stretch text-[48px] not-italic font-normal leading-[54px] tracking-[-0.48px]">
                    3
                  </p>
                  <p className="text-white self-stretch text-[16px] not-italic font-normal leading-[26px]">
                    To do
                  </p>
                  {/* <div className="w-[107px] h-[150px] absolute -right-[63.5px] -bottom-[109px] rounded-[6px] bg-[#F48282]"></div> */}
                </div>
              </div>
            </div>
            <div className="flex p-[24px] flex-col justify-between items-start flex-[1_0_0] self-stretch rounded-[6px] border-[2px] border-[solid] border-[#F0F1F2] bg-[#FFF]">
              <div className="flex justify-between items-center self-stretch">
                <p className="text-[20px] not-italic font-semibold leading-[30px] tracking-[-0.2px]">
                  Work Time
                </p>
                <div className="flex px-[14px] py-[6px] justify-center items-center gap-[16px] rounded-[6px] border-[2px] border-[solid] border-[#2D3036] bg-[#FFF]">
                  <span className="text-justify text-[14px] not-italic font-medium leading-[24px]">
                    June, Week 1
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-[24px] flex-col items-center gap-[24px] self-stretch rounded-[6px] border-[2px] border-[solid] border-[#F0F1F2] bg-[#FFF]">
            <div className="flex justify-between items-center self-stretch">
              <p className="text-[20px] not-italic font-semibold leading-[30px] tracking-[-0.2px]">
                Activity
              </p>
              <div className="flex px-[14px] py-[6px] justify-center items-center gap-[16px] rounded-[6px] border-[2px] border-[solid] border-[#2D3036] bg-[#FFF]">
                <span className="text-justify text-[14px] not-italic font-medium leading-[24px]">
                  Today
                </span>
              </div>
            </div>
            <table className="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-xs whitespace-nowrap font-semibold text-left">
                    <div className="w-[6px] h-[6px] rounded-[6px] bg-[#2D3036]"></div>
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3  text-[16px] not-italic font-medium leading-[26px] whitespace-nowrap text-left">
                    Name
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 whitespace-nowrap  text-[16px] not-italic font-medium leading-[26px] text-left">
                    Activity
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3  whitespace-nowrap  text-[16px] not-italic font-medium leading-[26px] text-left">
                    Time
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 whitespace-nowrap text-[16px] not-italic font-medium leading-[26px] text-left">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th className="border-t-0 px-6 align-middle text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    <Image src={"./user.svg"} width={28} height={28} alt="User name" />
                  </th>
                  <td className="border-t-0 px-6 text-[16px] not-italic font-medium leading-[26px] align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                    Zahid Hasan
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0  text-[16px] not-italic font-semibold leading-[26px] whitespace-nowrap p-4 ">
                    Tsak 1
                  </td>
                  <td className="border-t-0 px-6 align-center border-l-0 border-r-0  text-[16px] not-italic font-medium leading-[26px] whitespace-nowrap p-4">
                    12.00 PM
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                    <span className="flex w-[100px] px-[14px] py-[6px] flex-col justify-center items-center gap-[10px] rounded-[6px] bg-[#EEF9FA] text-[#316B6E] text-[14px] not-italic font-medium leading-[24px]">
                      Online
                    </span>
                  </td>
                </tr>
                <tr>
                  <th className="border-t-0 px-6 align-middle text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    <Image src={"./user.svg"} width={28} height={28} alt="User name" />
                  </th>
                  <td className="border-t-0 px-6 text-[16px] not-italic font-medium leading-[26px] align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                    Zahid Hasan
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0  text-[16px] not-italic font-semibold leading-[26px] whitespace-nowrap p-4 ">
                    Tsak 1
                  </td>
                  <td className="border-t-0 px-6 align-center border-l-0 border-r-0  text-[16px] not-italic font-medium leading-[26px] whitespace-nowrap p-4">
                    12.00 PM
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                    <span className="flex w-[100px] px-[14px] py-[6px] flex-col justify-center items-center gap-[10px] rounded-[6px] bg-[#FDECEC] text-[#832525] text-[14px] not-italic font-medium leading-[24px]">
                      Offline
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
      </section>
    </main>
  )
}

export default Home
