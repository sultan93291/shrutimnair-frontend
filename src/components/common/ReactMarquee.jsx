import Marquee from "react-fast-marquee";

const ReactMarquee = ({ isIndividual, imgArr, gap = 200, speed = 50 }) => {
  return (
    <section>
      <div className="flex flex-col gap-y-[100px] ">
        {isIndividual ? (
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center text-[#050404] text-[60px] font-extrabold leading-[78.4px]"
          >
            We Are <span className="text-[#E2C65E]">Live</span> On
          </p>
        ) : (
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center text-[#050404] text-[56px] font-extrabold leading-[78.4px]"
          >
            <span className="text-[#E2C65E]">Trusted </span> By Industry Leaders
          </p>
        )}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-col gap-y-[100px] "
        >
          {imgArr.map((item, index) => {
            const images = item;
            return (
              <Marquee
                pauseOnHover={false}
                direction={`${index === 0 ? "left" : "right"}`}
                speed={speed}
              >
                <div className="flex mx-[60px] " style={{ gap: `${gap}px` }}>
                  {/* Add a duplicate of the images to create the seamless looping effect */}
                  {[...images, ...images].map((img, index) => (
                    <img
                      className="h-[70px] max-w-[280px] w-auto object-contain"
                      key={index}
                      src={img}
                      alt={`Live platform ${index + 1}`}
                    />
                  ))}
                </div>
              </Marquee>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReactMarquee;
