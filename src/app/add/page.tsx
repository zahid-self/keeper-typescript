import Sidebar from "@/components/Sidebar"
import React from "react"

const AddProject = () => {
  return (
    <main className="flex gap-8">
      <aside className="w-[320px] flex h-screen p-[32px] flex-col justify-between items-start flex-shrink-0 rounded-tl-[6px] rounded-br-none rounded-tr-none rounded-bl-[6px] border-[2px] border-solid border-[#F0F1F2] bg-[#FFF]">
        <Sidebar />
      </aside>
      <section className="w-4/5 flex flex-col gap-8 h-screen backdrop-blur-sm backdrop-brightness-50 backdrop-opacity-50">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[450px] h-auto bg-white rounded-[9px] px-8 py-10">
            <p className="mb-4 text-xl font-semibold">Add New Project</p>
            <div className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Project Title"
                  name="title"
                  className="border border-[#000] w-full rounded-md px-2 py-[12px]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Project Description"
                  name="description"
                  className="border border-[#000] w-full rounded-md px-2 py-[12px]"
                />
              </div>
              <div>
                <label htmlFor="start_date" className="mb-2">
                  Start Date
                </label>
                <input
                  type="date"
                  name="start_date"
                  className="border border-[#000] w-full rounded-md px-2 py-[12px]"
                />
              </div>
              <div>
                <label htmlFor="end_date" className="mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  name="end_date"
                  className="border border-[#000] w-full rounded-md px-2 py-[12px]"
                />
              </div>
              <div className="flex justify-end">
                <button className="bg-[#157BFF] text-white px-4 py-2 rounded-md">
                  Add Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AddProject
