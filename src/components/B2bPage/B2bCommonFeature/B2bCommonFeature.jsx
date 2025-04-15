import {
  Pricingmeter,
  DollarBag,
  Warning,
  TrashBin,
  Confused,
  Infilation,
  MoneyCalculation,
  Idea,
  CostCutting,
  Energy,
  Donation,
  VerifiedCash,
  Box,
  DollarSetting,
  Certified,
} from "@/components/svg-container/SvgContainer";
import React from "react";

const B2bCommonFeature = ({
  BgColor = "",
  Tittle = "",
  SubTittle = "",
  HighLightedTxt = "",
  CardDetails,
  isHighlight = false,
  Direction = "start",
  SvgColor,
}) => {
  const SvgArr = {
    Pricingmeter,
    DollarBag,
    Warning,
    TrashBin,
    Confused,
    Infilation,
    MoneyCalculation,
    Idea,
    CostCutting,
    Energy,
    Donation,
    Certified,
    Box,
    DollarSetting,
  };

  console.log(SvgColor);

  return (
    <div className="w-full px-3 xl:px-[20px] 4xl:px-[56px] h-full ">
      <div
        style={{
          backgroundColor: BgColor,
        }}
        className="w-full h-auto  shadow-[0px_8px_32px_2px_rgba(0,0,0,0.25)] rounded-[20px] xl:rounded-[80px] flex flex-col gap-y-10 xl:gap-y-[60px] 3xl:gap-y-[94px] relative items-center justify-center py-[60px] xl:py-[80px] 3xl:py-[120px] "
      >
        <div className="flex flex-col gap-y-2 px-4 xl:px-0 xl:gap-0 items-center ">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className=" text-[32px] md:text-[40px] 2xl:text-[50px] 3xl:text-[56px] text-center xl:text-left  font-bold leading-[130%]  text-[#050404] "
          >
            {isHighlight && Direction === "start" && (
              <span className="text-[#E2C65E]">{HighLightedTxt}</span>
            )}
            {Tittle}{" "}
            {isHighlight && Direction === "end" && (
              <span className="text-[#E2C65E]">{HighLightedTxt}</span>
            )}
          </h2>
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className=" text-lg xl:text-[24px] text-center  font-normal leading-[190%]  text-[#545454] "
          >
            {SubTittle}
          </span>
        </div>
        <div className="flex flex-row gap-6 xl:gap-8 3xl:gap-12 flex-wrap items-center justify-center cursor-pointer   ">
          {CardDetails.map((item, index) => {
            const SvgIcon = SvgArr[item.svg];
            return (
              <div
                key={index}
                className="h-auto max-w-[360px] border-[1px] border-solid ease-in-out duration-500 border-transparent hover:bg-[#F5F0E4] hover:border-[#B68D40] py-5 xl:py-10 px-[2px] xl:px-10 bg-white shadow-[0px_6px_16px_0px_rgba(0,0,0,0.12)]
 rounded-[24px] flex flex-col gap-y-[11px] xl:gap-y-[21px]  items-center"
              >
                <div
                  style={{
                    backgroundColor: SvgColor,
                  }}
                  className="w-[58px] h-[58px] rounded-full  border-[0.892px] border-solid border-[rgba(68, 87, 98, 0.50)] flex items-center justify-center  "
                >
                  <SvgIcon data-aos="fade-up" data-aos-delay="100" />
                </div>
                <div className=" w-[300px] px-2 xl:w-[312px] text-center ">
                  <span
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className=" text-lg xl:text-[24px] xl:px-0  font-medium leading-[150%]  text-[#545454]"
                  >
                    {item.subTitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default B2bCommonFeature;
