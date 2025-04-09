import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

import { Switch } from "@/components/ui/switch";
import ButtonAndArrow from "./ButtonAndArrow";
import BannerPic from "../../assets/images/banner-pic.png";
import { DottedSvg } from "../svg-container/SvgContainer";
import ServeyTab from "./ServeyTab";
import UserActive from "./UserActive";
import heroVideo from "../../assets/videos/hero_video.mp4";
import { useDispatch, useSelector } from "react-redux";
import { setIsBusinessActive } from "@/redux/features/businessSlice";
import { useNavigate } from "react-router-dom";
import { ReviewData } from "@/ReviewData/ReviewData";
import hero from "../../assets/hero.png"

const CommonHeroBanner = ({ isB2b="false" }) => {
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const divRef = useRef(null);
  const gsapContainerRef = useRef(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isBusiness = useSelector(
    state => state.businessReducer.isBusinessActive
  );

  const handleChange = checked => {
    dispatch(setIsBusinessActive(checked));
    if (checked === true) {
      navigate("/b2b-sass");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const lines =
      gsapContainerRef.current?.querySelectorAll(".line h1, .line h2");

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.clear()
      .fromTo(
        lines,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
        }
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.9"
      )
      .fromTo(
        buttonRef.current,
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.7"
      )
      .fromTo(
        divRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=1"
      );

    return () => {
      tl.kill();
    };
  }, [isBusiness]);

  console.log(ReviewData, "this is the review data");

  return (
    <section
      className={`px-14 py-36 ${
        isBusiness ? "bg-[#1D2526]" : "bg-[#752828]"
      } rounded-b-[80px]`}
    >
      <div className="flex items-center">
        {/* Left Side */}
        <div className="flex-1 self-start">
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex items-center space-x-2 ease-in duration-500 "
          >
            <p className="text-[#FFF] text-[22px]  ">Individual</p>
            <Switch
              id="airplane-mode"
              checked={isBusiness}
              onCheckedChange={handleChange}
            />
            <p className="text-[#FFF] text-[22px]">Business</p>
          </div>

          <div className="mt-12 space-y-3">
            <div
              ref={gsapContainerRef}
              className="gsap-container text-[85px] font-extrabold leading-[102px] text-[#F2DFD7]"
            >
              <div className="line">
                <h1>
                  {isBusiness ? "SaaS That" : "All"}
                  <span className="text-[#E8C547]">
                    {" "}
                    {!isBusiness && "Payments"}
                  </span>
                  {!isBusiness && " One"}
                </h1>
              </div>
              <div className="line">
                <h2 className="text-[#E8C547] flex gap-x-2">
                  {isBusiness && "Solves"}
                  <h2 className="text-white"> {isBusiness && "It All"} </h2>
                </h2>
                <h2> {!isBusiness && "Place, Big Rewards"} </h2>
              </div>
            </div>

            <div ref={subtitleRef}>
              <div className="line">
                <h2 className="text-[#F2DFD7] text-2xl font-normal leading-8">
                  Rent, Fees, Society Charges + Rs 3,000/Month in CASH Points
                </h2>
              </div>
            </div>
          </div>

          <button ref={buttonRef} className="mt-12">
            <ButtonAndArrow
              buttonText={isBusiness ? "Explore Solutions" : "Get Started"}
            />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 relative">
          <motion.figure
            ref={divRef}
            animate={{
              transform: [
                "perspective(1200px) rotateX(0deg) translateY(0px)",
                "perspective(1200px) rotateX(1.5deg) translateY(6px)",
                "perspective(1200px) rotateX(0deg) translateY(0px)",
              ],
              transformOrigin: "left center",
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: [0.32, 0, 0.67, 1],
            }}
            className="w-[797px] h-[470px] border-[19.339px] rounded-[31.771px] border-[#E2C65E] relative z-50"
          >
            {isB2b ? (
              <img
                src={hero}
                alt="not found"
                className="object-cover absolute top-0 left-0 h-full w-full rounded-[11px] shadow-lg"
              />
            ) : (
              <video
                className="object-cover absolute top-0 left-0 h-full w-full rounded-[11px] shadow-lg"
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
              ></video>
            )}

            {/* Survey Tab */}
            <motion.div
              animate={{ y: ["0px", "8px", "0px"] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: [0.32, 0, 0.67, 1],
              }}
              className="absolute bottom-[-70px] left-[-90px] z-[999]"
            >
              <ServeyTab />
            </motion.div>

            {/* User Active */}
            <motion.div
              animate={{ y: ["0px", "-1px", "0px"] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute top-[-90px] right-0 mr-[-56px] z-[999]"
            >
              <UserActive />
            </motion.div>
          </motion.figure>

          {/* Dotted SVG */}
          <div className="absolute top-[-85px] left-[-95px] z-10">
            <DottedSvg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonHeroBanner;
