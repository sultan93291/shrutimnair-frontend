import {
  ProfitDownArrowSvg,
  ProfitUpArrowSvg,
  ServeyTabCalenderSvg,
} from "../svg-container/SvgContainer";
const Yearly = () => {
  return (
    <div>
      <div className="h-16">
        <ServeyTabCalenderSvg />
      </div>
      <div className="flex gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <p key={day} className="text-[8.606px] text-[#050404]">
            {day}
          </p>
        ))}
      </div>
      {/*  */}
      <div className="flex mt-4 gap-3 items-center">
        <div className="flex items-center rounded-[5.737px] bg-[#5B90FD1C] backdrop-blur-[44.463px] py-1 px-3 gap-1">
          <ProfitUpArrowSvg />
          <p className="text-[8.606px]">$21,000</p>
        </div>
        <div className="flex items-center rounded-[5.737px] bg-[#5B90FD1C] backdrop-blur-[44.463px] py-1 px-3 gap-1">
          <ProfitDownArrowSvg />
          <p className="text-[8.606px]">$11,000</p>
        </div>
      </div>
    </div>
  );
};

export default Yearly;
