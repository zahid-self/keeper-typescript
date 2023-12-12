import React from "react"

interface Props {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AddProject: React.FC<Props> = ({ setIsShowModal }) => {
  return (
    <section className="w-full flex flex-col gap-8 h-screen backdrop-blur-sm backdrop-brightness-50 backdrop-opacity-100 absolute z-50 left-0 top-0">
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
              <button
                onClick={() => setIsShowModal(false)}
                className="bg-[#157BFF] text-white px-4 py-2 rounded-md"
              >
                Add Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddProject
