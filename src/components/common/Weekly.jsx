import {
  ArrowUp,
  ProfitDownArrowSvg,
  ProfitUpArrowSvg,
  ServeyTabCalenderSvg,
} from "../svg-container/SvgContainer";
import { IoMdArrowUp } from "react-icons/io";

const Weekly = () => {
  return (
    <div>
      <div className="h-16">
        <ServeyTabCalenderSvg />
      </div>
      <div className="flex gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <p key={day} className="text-[8.606px] text-[#050404]">
            {day}
          </p>
        ))}
      </div>
      {/*  */}
      <div className="flex flex-row w-full px-[4.3px] mt-[22px] items-center justify-between ">
        <div className="w-[71px] h-[22px] rounded-[5.74px] bg-[#5B90FD1C] flex flex-row gap-x-[5.74px]  items-center justify-center   ">
          <div className="w-[11px] h-[11px] bg-[#5EFF6E] rounded-[2px] flex items-center justify-center ">
            <IoMdArrowUp className="text-white" />
          </div>
          <span className="text-[#4E6151] text-[8.64px] font-normal leading-[164%] ">
            $21,000
          </span>
        </div>
        <div className="w-[71px] h-[22px] rounded-[5.74px] bg-[#5B90FD1C] flex flex-row gap-x-[5.74px]  items-center justify-center   ">
          <div className="w-[11px] h-[11px] bg-[#FFA39D] rounded-[2px] flex items-center justify-center ">
            <IoMdArrowUp className="text-white rotate-[180deg] " />
          </div>
          <span className="text-[#4E6151] text-[8.64px] font-normal leading-[164%] ">
            $11,000
          </span>
        </div>
      </div>
    </div>
  );
};

export default Weekly;
