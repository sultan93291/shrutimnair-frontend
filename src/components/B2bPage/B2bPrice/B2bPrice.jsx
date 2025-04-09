import { StarSvgIcon } from "@/components/svg-container/SvgContainer";
import React from "react";
import { useSelector } from "react-redux";

const PricingDeatils = [
  {
    title: "Bronze",
    subTittle: "Leases Covered - Up to 250",
    btnTxt: "Most Popular",
    pricePerMinute: "$2,500/m",
    pricingSubTitle: "Lease tracking dashboard, Email support (9-5)",
    HotDetails: [
      "Potential Savings - Replace 2 accountants, save $10,000/m",
      "Net Savings - $7,500/m",
      "ROI - 3X",
    ],
  },
  {
    title: "Silver",
    subTittle: "Most Demandable",
    btnTxt: "Most Demandable",
    pricePerMinute: "$4,000/m",
    pricingSubTitle: "All Bronze + Energy usage reports, Priority chat",
    HotDetails: [
      "Potential Savings - Replace 4 accountants, save $20,000/m",
      "Net Savings - $16,000/m",
      "ROI - 4X",
    ],
  },
  {
    title: "Gold",
    subTittle: "Leases Covered - 501 to 1,000",
    btnTxt: "Most Elegeant",
    pricePerMinute: "$2,500/m",
    pricingSubTitle: "All Silver + Compliance automation, Dedicated manager",
    HotDetails: [
      "Potential Savings - Replace 8 accountants, save $40,000/m",
      "Net Savings - $34,000/m",
      "ROI - 5.7X",
    ],
  },
  {
    title: "Platinum",
    subTittle: "Leases Covered - Over 1,001",
    btnTxt: "Fully Customizable",
    pricePerMinute: "Price on Application",
    pricingSubTitle: "All Gold + Budget forecasting tools, 10/7 support",
    HotDetails: [
      "Potential Savings - Custom savings",
      "Net Savings - Custom",
      "ROI - Custom",
    ],
  },
];

const B2bPrice = () => {
  const Activetab = useSelector(state => state.tabReducer.activeTab);
  console.log(Activetab);

  return (
    <div className="w-full px-[56px] h-full ">
      <div className="w-full h-auto bg-white shadow-[0px_8px_32px_2px_rgba(0,0,0,0.25)] rounded-[80px] flex flex-col gap-y-12 relative items-center justify-center py-[120px] ">
        {Activetab === "Pay-Pulse" ? (
          <div className="flex flex-row gap-x-[136px] ">
            <span
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[56px] text-left leading-[140%] font-semibold max-w-[723px]   text-[#050404] "
            >
              <span className="text-[#B68D40]">Pay-Pulse:</span> Global B2B
              Commercial Card Pricing
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[24px] text-left leading-[190%] font-normal max-w-[723px] pt-[9px]   text-[#545454] "
            >
              Pay-Pulse Commercial Credit Card Plan – You may need to check the
              applicable pricing from your Card issuing bank. Pricing is subject
              to a commercial arrangement between your bank and RedGirraffe or
              its authorized PSPs. Contact your commercial bank to confirm your
              RedGirraffe Pay-Pulse Commercial Credit Card High value recurring
              rates on Visa and MasterCard.
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-y-12">
            <div className="flex flex-col gap-y-6 items-center justify-center w-full ">
              <h4 className="text-[56px] font-bold leading-[140%] text-[#B68D40] text-center">
                Lease-Core <span className="text-[#050404]">Pricing Tiers</span>
              </h4>
              <span className="text-2xl font-normal  leading-[140%] text-[#545454] text-center">
                Pick what fits, tweak as needed
              </span>
              {Activetab === "Ledger-Hub" && (
                <span className="text-2xl max-w-[1097px] font-normal  leading-[140%] text-[#545454] text-center">
                  The pricing tiers are designed for mid-level and small CA
                  firms, based on the number of clients managed, with savings
                  from AI-driven productivity gains:
                </span>
              )}
            </div>
            <div className="flex flex-row gap-x-6">
              {PricingDeatils.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="pt-[43.41px] max-w-[350px]:  cursor-pointer pb-[22.41px] hover:bg-[#80FFE8] border-[1px] border-solid border-[#1D2526] w-auto h-auto px-[18.52px] rounded-[19.5px] flex flex-col gap-y-[30px] group ease-in-out duration-500 "
                  >
                    <div className="flex flex-col  ">
                      <div className="flex flex-col gap-y-8 ">
                        <div className="flex flex-row w-full justify-between">
                          <span
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="text-[34px] tracking-[-0.663px] font-semibold  leading-[100%] text-[#050404] text-center"
                          >
                            {item.title}
                          </span>
                          <button
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className=" bg-[#1D2526]  text-[12px]   leading-[160%] font-bold text-[#FFF]  text-center  text-base border-[1px] border-solid border-[#1D2526] w-auto h-auto rounded-[8px] py-[5px] px-[20px] cursor-pointer "
                          >
                            {item.btnTxt}
                          </button>
                        </div>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="100"
                          className="text-[12px]  font-normal leading-[160%]  text-[#050404] "
                        >
                          {item.subTittle}
                        </span>
                        <hr className="h-[2px] bg-[#050404] font-bold " />
                      </div>
                    </div>
                    <div className="flex flex-col  ">
                      <div className=" pb-8 flex flex-col gap-y-[14px] ">
                        <h2
                          data-aos="fade-up"
                          data-aos-delay="100"
                          className="text-[36px]  font-bold leading-[132%]  text-[#050404] "
                        >
                          {item.pricePerMinute}
                        </h2>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="100"
                          className="text-[12px]  font-normal leading-[160%]  text-[#050404] "
                        >
                          {item.pricingSubTitle}
                        </span>
                      </div>
                      <hr
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="h-[2px] bg-[#050404] font-bold "
                      />
                    </div>
                    <div className="flex flex-col gap-y-[27.54px]   ">
                      {item.HotDetails.map((option, index) => {
                        return (
                          <div
                            key={index}
                            className="flex flex-row  gap-x-[7.54px]  "
                          >
                            <div
                              data-aos="fade-up"
                              data-aos-delay="100"
                              className="pt-2"
                            >
                              <StarSvgIcon
                                data-aos="fade-up"
                                data-aos-delay="100"
                              />
                            </div>
                            <p className="text-[17.541px]   font-normal leading-[160%]  text-[#050404] max-w-[248px] ">
                              {option}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <button className="text-[#1D2526] group-hover:bg-[#1D2526] group-hover:text-[#80FFE8]  font-bold leading-[133%]  text-center  text-base border-[1px] border-solid border-[#1D2526] w-auto h-auto rounded-[8px] py-[16px] px-[115px] cursor-pointer ease-in-out duration-500 ">
                      Get Started
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="text-lg text-[#545454] leading-[160%] font-normal">
          <p data-aos="fade-up" data-aos-delay="100" className="max-w-[1440px]">
            {Activetab === "Ledger-Hub" && (
              <>
                <span
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="font-bold"
                >
                  Note:
                </span>{" "}
                Savings are based on an average accountant salary of
                $30,000/year. For Bronze Tier, saving 1 accountant yields
                $30,000/year, offering a 12.9X ROI. Actual savings and ROI may
                vary depending on firm size and. Savings are estimates based on
                average energy costs (USD 1.225/month per premise) and staff
                salaries (USD 5,000/month per full-time employee). Actual
                savings may vary depending on premise size, energy usage
                patterns, and implementation of best practices based on data
                provided by ESG-Horizon.
              </>
            )}

            {Activetab === "Flow-Forge" && (
              <>
                <span
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="font-bold"
                >
                  Note:
                </span>{" "}
                Savings are estimates based on average energy costs (USD
                1.225/month per premise) and staff salaries (USD 5,000/month per
                full-time employee). Actual savings may vary depending on
                premise size, energy usage patterns, and implementation of best
                practices based on data provided by ESG-Horizon.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default B2bPrice;
