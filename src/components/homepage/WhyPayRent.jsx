import WhyPayRentLeftSide from "./WhyPayRentLeftSide";
import WhyPayRentRightSide from "./WhyPayRentRightSide";

const WhyPayRent = () => {
  return (
    <section className="xl:rounded-b-[50px] 2xl:rounded-b-[80px] xl:rounded-t-[50px] 2xl:rounded-t-[80px] bg-[#FFF] shadow-[0px_8px_32px_2px_rgba(0,0,0,0.12)] py-10 xl:py-12 2xl:py-16 3xl:py-[120px] px-5 xl:px-12 2xl:px-[80px] 3xl:px-[150px] 4xl:px-[216px] xl:mx-[30px] 4xl:mx-[56px]">
      <div>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[#050404] text-[22px] md:text-[26px] lg:text-[30px] 2xl:text-[45px] 3xl:text-[72px] font-extrabold xl:leading-[102.8px] text-center max-w-[846px] mx-auto"
        >
          Why Pay <span className="text-[#B68D40]">Rent, Fees</span> &{" "}
          <span className="text-[#B68D40]">Bills</span> With Us?
        </p>
        {/*  */}
        <div className="mt-5 lg:mt-8 2xl:mt-12 3xl:mt-16 border rounded-xl xl:rounded-[42.644px] flex flex-col lg:flex-row">
          {/* THis is the left side div */}
          <div className="border-r border-[#B3BAC5] flex-1 pb-7 xl:py-7 2xl:py-10 px-5 xl:px-8 2xl:px-12 3xl:px-16 ">
            <WhyPayRentLeftSide />
          </div>
          {/* This is the right side div */}
          <div className="border-l xl:rounded-r-[42.6px]  border-[#54545] flex-1 pb-7  xl:py-7 2xl:py-10 px-5 xl:px-8 2xl:px-12 3xl:px-16 bg-[linear-gradient(180deg,_rgba(255,_217,_114,_0.09)_0%,_rgba(255,_217,_114,_0)_100%)]">
            <WhyPayRentRightSide />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPayRent;
