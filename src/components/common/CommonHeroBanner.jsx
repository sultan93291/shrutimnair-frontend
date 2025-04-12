import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

import { Switch } from "@/components/ui/switch";
import ButtonAndArrow from "./ButtonAndArrow";
import BannerPic from "../../assets/images/banner-pic.png";
import { DottedSvg } from "../svg-container/SvgContainer";
import ServeyTab from "./ServeyTab";
import UserActive from "./UserActive";
import heroVideo from "../../assets/videos/hero.mp4";
import { useDispatch, useSelector } from "react-redux";
import { setIsBusinessActive } from "@/redux/features/businessSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { ReviewData } from "@/ReviewData/ReviewData";
import hero from "../../assets/hero.png";
import { GoUnmute } from "react-icons/go";
import { GoMute } from "react-icons/go";
import { MdFullscreen } from "react-icons/md";

const CommonHeroBanner = () => {
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const divRef = useRef(null);
  const gsapContainerRef = useRef(null);
  const navigate = useNavigate();
  const videoRef = useRef();
  const dispatch = useDispatch();
  const [isUnMute, setIsUnMute] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const HandleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsUnMute(true);
    }
  };

  const HandleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsUnMute(false);
    }
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    // Always restart from beginning
    video.currentTime = 0;
    video.play();

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (video.requestFullscreen) {
      video.requestFullscreen().catch(err => {
        console.error("Error trying to enable fullscreen:", err);
      });
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoDuration = video?.duration


    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= videoDuration && document.fullscreenElement) {
        document.exitFullscreen().catch(err => {
          console.error("Error exiting fullscreen:", err);
        });
        video.currentTime = 0;
        video.play();
      }
    };

    const handleEnded = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => {
          console.error("Error exiting fullscreen:", err);
        });
      }
      video.currentTime = 0;
      video.play();
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const isBusiness = useSelector(
    state => state.businessReducer.isBusinessActive
  );

  const commonFeatureData = useSelector(
    state => state.tabReducer.ActiveFeatureData
  );

  const location = useLocation();

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

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(setIsBusinessActive(false));
    } else if (location.pathname === "/b2b-sass") {
      dispatch(setIsBusinessActive(true));
    }
  }, [location.pathname, dispatch]);

  return (
    <section
      className={`px-5 lg:px-10 4xl:px-14 pt-8 pb-10 lg:py-12 xl:py-28 2xl:py-32 3xl:py-36 ${
        isBusiness ? "bg-[#1D2526]" : "bg-[#752828]"
      } xl:rounded-b-[50px] 2xl:rounded-b-[80px]`}
    >
      <div className="flex items-center flex-col xl:flex-row gap-8 xl:gap-0">
        {/* Left Side */}
        <div className="flex-1 self-start w-full">
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex items-center space-x-2 ease-in duration-500 "
          >
            <p className="text-[#FFF] text-lg lg:text-[22px]">Individual</p>
            <Switch
              id="airplane-mode"
              checked={isBusiness}
              onCheckedChange={handleChange}
            />
            <p className="text-[#FFF] text-lg lg:text-[22px]">Business</p>
          </div>

          <div className="mt-5 3xl:mt-12 space-y-1 lg:space-y-3">
            <div
              ref={gsapContainerRef}
              className="gsap-container text-[22px] md:text-[28px] lg:text-[32px] xl:text-[40px] 3xl:text-[60px] 4xl:text-[80px] font-extrabold 3xl:leading-[80px] 4xl:leading-[102px] text-[#F2DFD7]"
            >
              <div className="line">
                <h1>
                  {isBusiness ? "SaaS That" : "All"}
                  <span className="text-[#E8C547] ">
                    {" "}
                    {!isBusiness && "Payments"}
                  </span>
                  {!isBusiness && " One"}
                </h1>
              </div>
              <div className="line">
                <h1 className="text-[#E8C547] flex gap-x-2">
                  {isBusiness && "Solves"}
                  <h2 className="text-white"> {isBusiness && "It All"} </h2>
                </h1>
                <h2> {!isBusiness && "Place, Big Rewards"} </h2>
              </div>
            </div>

            <div ref={subtitleRef}>
              <div className="line">
                <h2 className="text-[#F2DFD7] md:text-lg xl:text-xl font-normal leading-8">
                  {isBusiness
                    ? "Streamline leases, ESG, workflows, payments, and more"
                    : "Rent, Fees, Society Charges + Rs 3,000/Month in CASH Points"}
                </h2>
              </div>
            </div>
          </div>

          <button ref={buttonRef} className="mt-5 xl:mt-8 2xl:mt-12">
            <ButtonAndArrow
              buttonText={isBusiness ? "Explore Solutions" : "Get Started"}
            />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 relative w-full">
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
            className="w-full max-w-[797px] h-[280px] md:h-[350px] lg:h-[400px] 3xl:h-[470px] border-[12px] md:border-[17px] 2xl:border-[19.339px] rounded-[20px] md:rounded-[31.771px] border-[#E2C65E] relative z-50"
          >
            {isBusiness ? (
              <img
                src={hero}
                alt="not found"
                className="object-cover absolute top-0 left-0 h-full w-full rounded-[11px] shadow-lg"
              />
            ) : (
              <div className="h-full w-full relative">
                <video
                  ref={videoRef}
                  className="object-cover relative h-full w-full rounded-[11px] shadow-lg"
                  src={heroVideo}
                  autoPlay
                  playsInline
                  muted={!isUnMute}
                />
                <div
                  onDoubleClick={handleFullscreen}
                  className="h-full absolute top-0 left-0 flex items-end justify-end z-[99] w-full"
                >
                  <div className="mb-[10px] mr-[10px] flex flex-row gap-x-5">
                    {isUnMute ? (
                      <GoUnmute
                        onClick={HandleMute}
                        className="text-[24px] cursor-pointer text-white"
                      />
                    ) : (
                      <GoMute
                        onClick={HandleUnmute}
                        className="text-[24px] cursor-pointer text-white"
                      />
                    )}
                    <MdFullscreen
                      className="text-[24px] cursor-pointer text-white"
                      onClick={handleFullscreen}
                    />
                  </div>
                </div>
              </div>
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
              className="absolute bottom-[-70px] left-[-90px] z-[999] hidden xl:block"
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
              className="absolute top-[-90px] right-0 mr-[-56px] z-[999] hidden xl:block"
            >
              <UserActive />
            </motion.div>
          </motion.figure>

          {/* Dotted SVG */}
          <div className="absolute top-[-85px] left-[-95px] z-10 hidden xl:block">
            <DottedSvg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonHeroBanner;
