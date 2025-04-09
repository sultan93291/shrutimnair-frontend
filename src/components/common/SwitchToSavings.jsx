import testimonialPic from "../../assets/images/testimonial/testimonial-pic.png";
import testimonial from "../../assets/images/testimonial/testimonial-two.png";
import ButtonAndArrow from "./ButtonAndArrow";

const SwitchToSavings = ({ isBusiness = false }) => {
  return (
    <section className="mt-12">
      <div
        className="w-full h-[394px]"
        style={{
          backgroundImage: `linear-gradient(0deg, ${
            isBusiness ? "rgba(29, 37, 38, 0.80)" : "rgba(117, 40, 40, 0.80)"
          } 0%, ${
            isBusiness ? "rgba(29, 37, 38, 0.80)" : "rgba(117, 40, 40, 0.80)"
          } 100%), url(${testimonialPic})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-row gap-5 pt-32 justify-center text-center">
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-2xl mb-4 text-[56px] max-w-[569px] font-bold leading-[72.8px]"
          >
            Switch to Savings, Effortlessly.
          </p>
          <div className="mt-20">
            <ButtonAndArrow bgColor="#B68D40" buttonText="Get Started Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwitchToSavings;
