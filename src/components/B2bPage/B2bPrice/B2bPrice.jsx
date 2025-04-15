import { StarSvgIcon } from "@/components/svg-container/SvgContainer";
import React from "react";
import { useSelector } from "react-redux";

const B2bPrice = () => {
  const Activetab = useSelector(state => state.tabReducer.activeTab);
  console.log(Activetab);

  const ActivePricingData = useSelector(
    state => state.priceReducer.ActivePricingTier
  );

  return (
    <div className="w-full px-4 xl:px-[20px] 4xl:px-[56px] h-full ">
      <div className="w-full h-auto bg-white shadow-[0px_8px_32px_2px_rgba(0,0,0,0.25)] rounded-[20px] xl:rounded-[80px] flex flex-col gap-y-6 xl:gap-y-12 relative items-center justify-center py-[40px] 2xl:py-[120px] ">
        {/* {only if active  is pay pulse then this section will be rendered} */}
        {Activetab === "Pay-Pulse" ? (
          <div className="flex flex-col gap-y-3 px-5 2xl:flex-row 2xl:gap-x-[136px] ">
            <span
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[32px] md:text-[40px] 2xl:text-[50px] 3xl:text-[56px] text-left leading-[140%] font-semibold max-w-[723px]   text-[#050404] "
            >
              <span className="text-[#B68D40]">Pay-Pulse:</span> Global B2B
              Commercial Card Pricing
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="100"
              className=" text-lg xl:text-[24px] text-left leading-[190%] font-normal max-w-[723px] pt-[9px]   text-[#545454] "
            >
              Pricing is subject to a commercial arrangement between your bank
              and RedGirraffe or its authorized PSPs. Contact your commercial
              bank to confirm your RedGirraffe Pay-Pulse Commercial Credit Card
              High value recurring rates on Visa and MasterCard.
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-y-8 xl:gap-y-16">
            <div className="flex flex-col gap-y-4 xl:gap-y-2 items-center justify-center w-full ">
              <h4 className=" text-[36px] md:text-[40px] 2xl:text-[50px] 3xl:text-[72px]  max-w-[250px] md:max-w-none  font-bold text-[#050404] leading-[140%]  text-center">
                <span className="text-[#B68D40]">
                  {" "}
                  {ActivePricingData?.HighlightTittle}{" "}
                </span>
                Pricing Tiers
              </h4>
              <div className="flex flex-col px-2 3xl:px-7 4xl:px-0 gap-y-3 xl:gap-y-[17.5px] ">
                <span className=" text-xl xl:text-2xl font-normal  leading-[140%] text-[#545454] text-center">
                  {ActivePricingData?.subTittle}
                </span>
                {ActivePricingData?.ExtraSubtitle && (
                  <span className="text-xl xl:text-2xl font-normal  leading-[140%] text-[#545454] text-center">
                    {ActivePricingData?.ExtraSubtitle}
                  </span>
                )}
              </div>
            </div>
            <div className="flex justify-center px-2 ">
              <div className="grid lg:grid-cols-2 3xl:grid-cols-3 4xl:grid-cols-4 gap-6 items-stretch">
                {ActivePricingData?.AvailablePackage?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col justify-between pt-6 xl:pt-[43.41px] lg:min-h-[580px] xl:min-h-[612px] min-w-[300px] max-w-[300px] xl:max-w-none xl:min-w-[350px] cursor-pointer pb-[22.41px] hover:bg-[#80FFE8] border border-[#1D2526] w-full h-full px-[14px] xl:px-[18.52px] rounded-[19.5px] gap-y-[30px] group ease-in-out duration-500"
                    >
                      {/* Top Section */}
                      <div className="flex flex-col gap-y-8">
                        <div className="flex flex-row w-full justify-between">
                          <span
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="text-3xl xl:text-[34px] tracking-[-0.663px] font-semibold leading-[100%] text-[#050404] text-center"
                          >
                            {item?.title}
                          </span>
                          <button
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="bg-[#1D2526] text-[10px] xl:text-[12px] leading-[160%] font-bold text-[#FFF] text-center border border-[#1D2526] rounded-[8px] py-[5px] px-[10px] xl:px-[20px] cursor-pointer"
                          >
                            {item?.btnTxt}
                          </button>
                        </div>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="100"
                          className="text-[12px] font-normal leading-[160%] text-[#050404]"
                        >
                          {item?.subTittle}
                        </span>
                        <hr className="h-[2px] bg-[#050404] font-bold" />
                      </div>

                      {/* Price Section */}
                      <div className="pb-8 flex flex-col gap-y-[7px] xl:gap-y-[14px]">
                        <h2
                          data-aos="fade-up"
                          data-aos-delay="100"
                          className="text-[28px] xl:text-[36px] font-bold leading-[132%] text-[#050404]"
                        >
                          {item?.pricePerMinute}
                        </h2>
                        <span
                          data-aos="fade-up"
                          data-aos-delay="100"
                          className="text-[12px] max-w-[250px] xl:max-w-[286px] font-normal leading-[160%] text-[#050404]"
                        >
                          {item?.pricingSubTitle}
                        </span>
                        <hr
                          data-aos="fade-up"
                          data-aos-delay="100"
                          className="h-[2px] bg-[#050404] font-bold"
                        />
                      </div>

                      {/* HotDetails Section */}
                      <div className="flex flex-col gap-y-[17px] xl:gap-y-[27.54px]">
                        {item.HotDetails.map((option, idx) => (
                          <div
                            key={idx}
                            className="flex flex-row gap-x-[7.54px]"
                          >
                            <div
                              data-aos="fade-up"
                              data-aos-delay="100"
                              className="pt-1 xl:pt-2"
                            >
                              <StarSvgIcon
                                data-aos="fade-up"
                                data-aos-delay="100"
                              />
                            </div>
                            <p className="text-[15px] xl:text-[17.541px] font-normal leading-[160%] text-[#050404] max-w-[248px]">
                              {option}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <button className="text-[#1D2526] group-hover:bg-[#1D2526] group-hover:text-[#80FFE8] font-bold leading-[133%] text-center text-base border border-[#1D2526] w-auto h-auto rounded-[8px] py-2 xl:py-[16px] px-[40px] xl:px-[115px] cursor-pointer ease-in-out duration-500">
                        {item.title === "Platinum" && Activetab !== "Lease-Core"
                          ? "Contact Sales"
                          : "Get Started"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {ActivePricingData?.isNote && (
          <div className=" px-4 xl:px-[56px] text-sm xl:text-lg  text-[#545454]  leading-[160%] font-normal">
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="max-w-[1440px]"
            >
              <span className="font-bold">Note:</span> {ActivePricingData?.Note}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default B2bPrice;
