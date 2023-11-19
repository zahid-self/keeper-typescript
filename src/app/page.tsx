import React from "react"
import { MdDeleteOutline } from "react-icons/md"
import { IoCheckmarkDoneOutline } from "react-icons/io5"

const Home: React.FC = () => {
  return (
    <main className="container mx-auto flex justify-center items-center h-screen text-white">
      <div className="bg-[#618264] p-4 rounded-md	">
        <header className="w-full flex justify-between">
          <div className="w-11/12">
            <input
              type="text"
              className="text-[#618264] w-full px-4 py-2 border-2 border-[#B0D9B1] rounded-md"
              placeholder="Enter your job here"
            />
          </div>
          <button className="bg-[#B0D9B1] px-4 rounded-lg">Add Task</button>
        </header>
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
              <tr className="bg-[#79AC78] rounded-lg mb-4 border-2">
                <td className="px-6 py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
                <td className="px-6 py-4">Completed</td>
                <td className="px-6 py-4">19/11/23</td>
                <td className="px-6 py-4">
                  <div className="flex gap-[5px]">
                    <IoCheckmarkDoneOutline />
                    <MdDeleteOutline />
                  </div>
                </td>
              </tr>
              <tr className="bg-[#79AC78] rounded-sm border-2 mt-2">
                <td className="px-6 py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
                <td className="px-6 py-4">Completed</td>
                <td className="px-6 py-4">19/11/23</td>
                <td className="px-6 py-4">
                  <div className="flex gap-[5px]">
                    <IoCheckmarkDoneOutline />
                    <MdDeleteOutline />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  )
}

export default Home
