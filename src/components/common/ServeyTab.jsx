import { useState } from "react";
import Weekly from "./Weekly";
import Monthly from "./Monthly";
import Yearly from "./Yearly";

const ServeyTab = () => {
  const [activeTab, setActiveTab] = useState("weekly");
  return (
    <div className="w-full max-w-[192px] border border-white h-auto md:h-[196px] rounded-[17.212px] px-[14px] py-5  border-white/60 bg-white/60 shadow-[0px_5.737px_45.897px_0px_rgba(35,63,120,0.03)] backdrop-blur-[13.626px]">
      {/* Tab buttons */}
      <div className="flex gap-[11px]">
        <button
          className={` py-1 px-2 ${
            activeTab === "weekly"
              ? "text-[#FFF] text-[8.606px] bg-[#4E6151] rounded-[5.737px] font-normal leading-4"
              : "text-[#545454] text-[8.606px] bg-[#F0F7FF] rounded-[5.737px] font-normal leading-4"
          }`}
          // onClick={() => setActiveTab("weekly")}
        >
          Weekly
        </button>
        <button
          className={`py-1 px-2 ${
            activeTab === "monthly"
              ? " text-[#FFF] text-[8.606px] bg-[#4E6151] rounded-[5.737px] font-normal leading-4"
              : "text-[#545454] text-[8.606px] bg-[#F0F7FF] rounded-[5.737px] font-normal leading-4"
          }`}
          // onClick={() => setActiveTab("monthly")}
        >
          Monthly
        </button>
        <button
          className={`py-1 px-2 ${
            activeTab === "yearly"
              ? " text-[#FFF] text-[8.606px] bg-[#4E6151] rounded-[5.737px] font-normal leading-4"
              : "text-[#545454] text-[8.606px] bg-[#F0F7FF] rounded-[5.737px] font-normal leading-4"
          }`}
          // onClick={() => setActiveTab("yearly")}
        >
          Yearly
        </button>
      </div>
      {/* Tab content */}
      <div className="mt-5">
        {activeTab === "weekly" && <Weekly />}
      </div>
    </div>
  );
};

export default ServeyTab;
