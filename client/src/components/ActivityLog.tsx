import Image from "next/image"
import React from "react"

const ActivityLog = () => {
  return (
    <>
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
    </>
  )
}

export default ActivityLog
