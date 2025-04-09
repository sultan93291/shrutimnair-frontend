import WhyPayRentLeftSide from "./WhyPayRentLeftSide";
import WhyPayRentRightSide from "./WhyPayRentRightSide";

const WhyPayRent = () => {
  return (
    <section className="rounded-[80px] bg-[#FFF] shadow-[0px_8px_32px_2px_rgba(0,0,0,0.12)] py-[120px] px-[216px] mx-[56px]">
      <div>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[#050404] text-[56px] font-extrabold leading-[72.8px] text-center max-w-[546px] mx-auto"
        >
          Why Pay <span className="text-[#B68D40]">Rent, Fees</span> &{" "}
          <span className="text-[#B68D40]">Bills</span> With Us?
        </p>
        {/*  */}
        <div className="mt-16 border rounded-[42.644px] flex">
          {/* THis is the left side div */}
          <div className="border-r border-[#B3BAC5] flex-1 py-10 px-16 ">
            <WhyPayRentLeftSide />
          </div>
          {/* This is the right side div */}
          <div className="border-l rounded-r-[42.6px]  border-[#54545] flex-1 py-10 px-16 bg-[linear-gradient(180deg,_rgba(255,_217,_114,_0.09)_0%,_rgba(255,_217,_114,_0)_100%)]">
            <WhyPayRentRightSide />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPayRent;
