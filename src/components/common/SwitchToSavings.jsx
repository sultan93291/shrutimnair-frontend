import testimonialPic from "../../assets/images/testimonial/testimonial-pic.png";
import ButtonAndArrow from "./ButtonAndArrow";

const SwitchToSavings = ({ isBusiness = false }) => {
  return (
    <section className="mt-12">
      <div
        className="w-full h-[250px] md:h-[300px] xl:h-[394px]"
        style={{
          backgroundImage: `linear-gradient(0deg, ${isBusiness ? "rgba(29, 37, 38, 0.80)" : "rgba(117, 40, 40, 0.80)"
            } 0%, ${isBusiness ? "rgba(29, 37, 38, 0.80)" : "rgba(117, 40, 40, 0.80)"
            } 100%), url(${testimonialPic})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col 3xl:flex-row h-full items-center gap-1 lg:gap-3 xl:gap-5 justify-center text-center">
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white mb-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-[56px] max-w-[569px] font-bold 3xl:leading-[72.8px]"
          >
            Switch to Savings, Effortlessly.
          </p>
          <div className="">
            <ButtonAndArrow bgColor="#B68D40" buttonText="Get Started Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwitchToSavings;
