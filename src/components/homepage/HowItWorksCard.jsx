import { motion } from "framer-motion";

const HowItWorksCard = ({ title, steps, icon }) => {
  return (
    <div className="group transition-all lg:min-h-[460px] duration-500 border border-[#FFF] rounded-3xl pt-7 3xl:pt-10 pb-9 3xl:pb-14 px-7 3xl:px-12 bg-[#FFF] hover:bg-[#F5F0E4] hover:border-[#B68D40] cursor-pointer h-auto">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.3,
              delay: 0.1,
            },
          }}
          viewport={{ once: true }}
        >
          <div>
            <button

              className="transition-all  bg-[#B68D40] group-hover:bg-[#4E6151] duration-500 ease-in-out p-[13px] rounded-[414.286px] text-white"
            >
              <span className="group-hover:fill-white transition-all duration-500 ease-in-out">
                {icon}
              </span>
            </button>
            <div className="mt-6">
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-[#050404] text-xl 2xl:text-[22px] font-bold leading-[30.8px]"
              >
                {title}
              </p>
              <div className="flex flex-col  gap-y-3 mt-5 ">
                {steps.map((step, idx) => (
                  <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    key={idx}
                    className="text-[#545454] text-base leading-[28.8px]"
                  >
                    {step}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
