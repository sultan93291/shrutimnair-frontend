import {
  UserActiveCalenderSvg,
  UserActiveSvg,
} from "../svg-container/SvgContainer";

const UserActive = () => {
  return (
    <section className="w-full  max-w-[182px] border border-white h-auto md:h-[171px] rounded-[15.812px] px-[14px] py-5 border-white/15 bg-[rgba(250,250,250,0.80)] shadow-[0px_3.34px_50.094px_0px_rgba(0,0,0,0.08)] backdrop-blur-[6.777px]">
      <div className="flex items-center gap-1">
        <div className="p-3 bg-[#4E6151] rounded-lg">
          <UserActiveSvg />
        </div>
        <div>
          <p className="text-[9.266px] text-[#545454] font-light">
            User Active Possibility
          </p>
          <p className="text-[#050404] text-[18.533px] font-bold">
            <span className="text-[#4E6151]">$</span>44.3578
          </p>
        </div>
      </div>
      <UserActiveCalenderSvg />
    </section>
  );
};

export default UserActive;
