import Sidebar from "@/components/Sidebar"
import Image from "next/image"
import React from "react"

const page = () => {
  return (
    <main className="flex gap-8">
      <aside className="w-[320px] flex h-screen p-[32px] flex-col justify-between items-start flex-shrink-0 rounded-tl-[6px] rounded-br-none rounded-tr-none rounded-bl-[6px] border-[2px] border-solid border-[#F0F1F2] bg-[#FFF]">
        <Sidebar />
      </aside>
      <section className="w-4/5 flex flex-col gap-8 h-screen">
        <div className="flex p-[24px] h-[250px] flex-col justify-between items-start self-stretch rounded-[6px] border-[2px] border-[solid] border-[#F0F1F2] bg-[#FFF]">
          <div className="flex flex-col gap-4 items-start self-stretch w-[600px]">
            <h5 className="text-[24px] font-semibold">Welcome to the all-new project</h5>
            <p>
              Built like a spreadsheet, project tables give you a live canvas to filter, sort, and
              group issues and pull requests. Tailor them to your needs with custom fields and saved
              views.
            </p>
          </div>
        </div>
        <div>
          <table className="items-center bg-transparent w-full border-collapse ">
            <tbody>
              <tr>
                <td className="border-t-0 px-6 text-[16px] not-italic font-medium leading-[26px] border-l-0 border-r-0 p-4">
                  Keeper
                </td>
                <td className="w-[500px] border-t-0 px-6 border-l-0 border-r-0  text-[16px] not-italic font-semibold leading-[26px] p-4 ">
                  Keeper is a task management web application that offers super powerful features
                  like authentication, creating projects, assigning tasks, drag and drop, monitoring
                  developers working time, etc.
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
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default page
