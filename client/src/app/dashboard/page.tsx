import Sidebar from "@/components/Sidebar"
import React from "react"

const Dashboard: React.FC = () => {
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
        <div></div>
      </section>
    </main>
  )
}

export default Dashboard
