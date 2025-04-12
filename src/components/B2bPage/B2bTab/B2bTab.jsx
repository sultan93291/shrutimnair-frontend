import ButtonAndArrow from "@/components/common/ButtonAndArrow";
import React, { useState } from "react";
import { motion } from "framer-motion";
import heroVideo from "../../../assets/videos/hero_video.mp4";
import {
  SetAcitveTab,
  SetActiveFeatureData,
} from "@/redux/features/tabdataSlice";
import { useDispatch } from "react-redux";
import { setActivePricingTears } from "@/redux/features/PricingSlice";
import lease from "../../../assets/videos/RedGirraffe Lease-Core (1).mp4";
import esg_horiozon from "../../../assets/videos/RedGirraffe ESG-Horizon (1).mp4";
import flow_forge from "../../../assets/videos/RedGirraffe Flow-Forge (3).mp4";
import pay_pulse from "../../../assets/videos/Video Pay-Pulse(1) (1) (3).mp4";
import ledger_hub from "../../../assets/videos/RedGirraffe Ledger-Hub (1).mp4";

const TabDetails = [
  {
    id: 1,
    tittle: "Lease-Core",
    subTittle: "Revolutionising Enterprise Lease & Energy Management",
    descreption:
      "AI driven SaaS platform that streamlines lease management & energy optimisation for businesses. It cuts chaos, saves millions of dollars - effortlessly.",
    btnTxt: "See Details",
    tabColor: "#4A3B2C",
    mainBtnTxt: "Book a DEMO",
    videoLink: lease,
  },
  {
    id: 2,
    tittle: "ESG-Horizon",
    subTittle: "Intelligent ESG Management. Effortless Compliance",
    descreption:
      "A sophisticated AI SaaS platform that simplifies ESG tracking for companies. It ensures compliance, clarity with ease.",
    btnTxt: "See Details",
    tabColor: "#2F5D50",
    mainBtnTxt: "Book a DEMO",
    videoLink: esg_horiozon,
  },
  {
    id: 3,
    tittle: "Flow-Forge",
    subTittle: "Predictive Maintenance SaaS for Zero Downtime",
    descreption:
      "SaaS platform that boosts operational efficiency for listed midcaps, small caps. It slashes downtime, maximises profits & market cap fast.",
    btnTxt: "See Details",
    tabColor: "#3B2F2A",
    mainBtnTxt: "Register Interest ",
    videoLink: flow_forge,
  },
  {
    id: 4,
    tittle: "Pay-Pulse",
    subTittle:
      "Powering High-Value Recurring Payments with Seamless Flexibility",
    descreption:
      "A commercial card high-value recurring SaaS payment solution for banks. It streamlines B2B lending to Listed Midcaps and Small caps & to unlisted MSME’s, thereby enhancing flexibility for High value recurring payments.",
    btnTxt: "See Details",
    tabColor: "#1D1842",
    mainBtnTxt: "Register Interest ",
    videoLink: pay_pulse,
  },
  {
    id: 5,
    tittle: "Ledger-Hub",
    subTittle: "Automating Finances, Elevating Compliance",
    descreption:
      "A master SaaS platform that automates financial management for mid-level and small CA firms. It simplifies juggling between various accounting and compliance platforms, boosts efficiency, and ensures compliance.",
    btnTxt: "See Details",
    tabColor: "#1F2526",
    mainBtnTxt: "Book a DEMO",
    videoLink: ledger_hub,
  },
];

const B2bTab = () => {
  const [ActiveTabId, setActiveTabId] = useState(TabDetails[0].id);
  const [ActiveTab, setActiveTab] = useState(TabDetails[0]);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-y-[96px] pb-[525px] ">
      <div className="flex flex-row gap-x-[30px] w-full items-center justify-center">
        {TabDetails.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: `${
                  item.id === ActiveTabId ? item.tabColor : "#F3F3F3"
                }`,
                transition: "background-color 0.5s ease, color 0.5s ease", // Add transition
              }}
              className={`h-auto w-[338px] rounded-[31.1px] shadow-TabShadow flex flex-col gap-y-[36.87px] items-center justify-center py-[67.8px] transition-colors duration-500`} // Added transition classes
            >
              <h2
                style={{
                  transition: "color 0.5s ease", // Add transition for text color
                }}
                className={`text-[32px] font-extrabold leading-[130%] ${
                  item.id === ActiveTabId ? "text-[#FFF]" : "text-[#050404]"
                }`}
              >
                {item.tittle}
              </h2>
              <button
                onClick={() => {
                  setActiveTabId(item.id);
                  setActiveTab(item);
                  dispatch(SetAcitveTab(item.tittle));
                  dispatch(SetActiveFeatureData(item.tittle));
                  dispatch(setActivePricingTears(item.tittle));
                }}
                className="mt-12 transition-opacity duration-300 hover:opacity-80" // Optional: Add button hover effect
              >
                <ButtonAndArrow
                  txtColor={ActiveTabId === item.id ? "#050404" : "#FFF"}
                  bgColor={ActiveTabId === item.id ? "#E2C65E" : "#1D2526"}
                  buttonText={item.btnTxt}
                />
              </button>
            </div>
          );
        })}
      </div>
      <div className="px-[50px]">
        <div
          className={`w-full h-[801px] rounded-[50px] ease-in duration-300 py-[91px] px-[92px] flex flex-row justify-between gap-x-[137px] relative   `}
          style={{
            backgroundColor: `${ActiveTab.tabColor}`,
          }}
        >
          <div className="flex flex-col gap-y-[21px] ">
            <h2 className="text-[56px] text-white leading-[130%] font-extrabold  ">
              {" "}
              {ActiveTab.tittle}{" "}
            </h2>
            <span className="text-[24px] text-white leading-[190%] font-normal text-nowrap  ">
              {ActiveTab.subTittle}
            </span>
          </div>
          <div className="flex flex-col gap-y-[28px] ">
            <span className="text-[24px] text-white leading-[190%] font-normal max-w-[729px]  ">
              {ActiveTab.descreption}
            </span>
            <ButtonAndArrow buttonText={ActiveTab.mainBtnTxt} />
          </div>
          <div className="flex-1 absolute mt-[297px]  ">
            <motion.figure
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
              className="w-[1633px] h-[831px] border-[19.339px] rounded-[31.771px] border-[#E2C65E] relative z-50"
            >
              <video
                className="object-cover absolute top-0 left-0 h-full w-full rounded-[11px] shadow-lg"
                src={ActiveTab.videoLink}
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </motion.figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2bTab;
