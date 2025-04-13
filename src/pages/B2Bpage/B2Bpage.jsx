import React from "react";
import seven from "../../assets/images/brandLogo/7-eleven-logo-1.svg";
import abercrombie from "../../assets/images/brandLogo/abercrombie-and-fitch.svg";
import accor from "../../assets/images/brandLogo/accor-3.svg";
import aeropostale from "../../assets/images/brandLogo/aeropostale-1.svg";
import ben from "../../assets/images/brandLogo/ben-and-jerrys-4.svg";
import benetton from "../../assets/images/brandLogo/benetton-6.svg";
import tires from "../../assets/images/brandLogo/big-o-tires-2.svg";
import bmw from "../../assets/images/brandLogo/bmw-2.svg";
import champion from "../../assets/images/brandLogo/champion-logo.svg";
import chipotle from "../../assets/images/brandLogo/chipotle.svg";
import codeninja from "../../assets/images/brandLogo/codeninja-logo.svg";
import cosatacoffe from "../../assets/images/brandLogo/costa-coffee-logo-594F3ADStR_brandlogos.net.svg";
import crocs from "../../assets/images/brandLogo/crocs-wordmark.svg";
import curves from "../../assets/images/brandLogo/curves-fitness-logo.svg";
import decatch from "../../assets/images/brandLogo/decathlon-logo-brandlogos.net_uf6fv9twe.svg";
import dhl from "../../assets/images/brandLogo/dhl-1.svg";
import dominos from "../../assets/images/brandLogo/dominos-pizza-logo-brandlogos.net_ckhgy35xr.svg";
import dunkins from "../../assets/images/brandLogo/dunkin-donuts-1.svg";
import fedex from "../../assets/images/brandLogo/fedex-express-6.svg";
import foot from "../../assets/images/brandLogo/foot-locker-1.svg";
import gap from "../../assets/images/brandLogo/gap.svg";
import geox from "../../assets/images/brandLogo/geox-1.svg";
import gease from "../../assets/images/brandLogo/grease-monkey-1.svg";
import guess from "../../assets/images/brandLogo/guess-2.svg";
import hardrock from "../../assets/images/brandLogo/hard-rock-cafe-1.svg";
import ihop from "../../assets/images/brandLogo/ihop-3.svg";
import kfc from "../../assets/images/brandLogo/kfc-4.svg";
import landRover from "../../assets/images/brandLogo/land-rover-2.svg";
import luluLemon from "../../assets/images/brandLogo/Lululemon_Athletica-Oq8k3dNr1_brandlogos.net.svg";
import mango from "../../assets/images/brandLogo/mango-4.svg";
import zara from "../../assets/images/brandLogo/zara.svg";
import vans from "../../assets/images/brandLogo/vans-3.svg";
import valvoline from "../../assets/images/brandLogo/valvoline-8.svg";
import ups from "../../assets/images/brandLogo/ups-united-parcel-service.svg";
import armour from "../../assets/images/brandLogo/under-armour-logo.svg";
import tommy from "../../assets/images/brandLogo/tommy-hilfiger-3.svg";
import thenorthface from "../../assets/images/brandLogo/thenorthface-logo.svg";
import tedbaker from "../../assets/images/brandLogo/tedbaker.svg";
import subway from "../../assets/images/brandLogo/subway-13.svg";
import starbucks from "../../assets/images/brandLogo/starbucks-coffee.svg";
import spotify from "../../assets/images/brandLogo/spotify-logo.svg";
import shake from "../../assets/images/brandLogo/Shake_Shack-OrumyxgcE_brandlogos.net.svg";
import servicemaster from "../../assets/images/brandLogo/servicemaster-2.svg";
import remax from "../../assets/images/brandLogo/remax.svg";
import rangerover from "../../assets/images/brandLogo/range-rover-2.svg";
import rangerover2 from "../../assets/images/brandLogo/range-rover-2 (1).svg";
import puma from "../../assets/images/brandLogo/puma-ag.svg";
import pizza from "../../assets/images/brandLogo/pizza-hut.svg";
import papa from "../../assets/images/brandLogo/papa-john-s-pizza-1.svg";
import pakmail from "../../assets/images/brandLogo/pakmail.svg";
import oldNavy from "../../assets/images/brandLogo/old-navy-logo-2.svg";
import nike from "../../assets/images/brandLogo/nike.svg";
import newbalence from "../../assets/images/brandLogo/new-balance-2.svg";
import minuteman from "../../assets/images/brandLogo/minuteman-press.svg";
import mcdonalds from "../../assets/images/brandLogo/mcdonalds-7.svg";

import CommonHeroBanner from "../../components/common/CommonHeroBanner";
import ReactMarquee from "@/components/common/ReactMarquee";
import SwitchToSavings from "@/components/common/SwitchToSavings";
import { useSelector } from "react-redux";
import B2bTab from "@/components/B2bPage/B2bTab/B2bTab";
import B2bPrice from "@/components/B2bPage/B2bPrice/B2bPrice";
import B2bCommonFeature from "@/components/B2bPage/B2bCommonFeature/B2bCommonFeature";
import {
  Confused,
  DollarBag,
  Infilation,
  MoneyCalculation,
  Pricingmeter,
  TrashBin,
  Warning,
} from "@/components/svg-container/SvgContainer";

const B2Bpage = () => {
  const logosGroupOne = [
    seven,
    abercrombie,
    accor,
    aeropostale,
    ben,
    benetton,
    tires,
    bmw,
    champion,
    chipotle,
    codeninja,
    cosatacoffe,
    crocs,
    curves,
    decatch,
    dhl,
    dominos,
    dunkins,
    fedex,
    foot,
    gap,
    geox,
    gease,
    guess,
    hardrock,
    ihop,
    kfc,
    landRover,
  ];

  const logosGroupTwo = [
    luluLemon,
    mango,
    zara,
    vans,
    valvoline,
    ups,
    armour,
    tommy,
    thenorthface,
    tedbaker,
    subway,
    starbucks,
    spotify,
    shake,
    servicemaster,
    remax,
    rangerover,
    puma,
    pizza,
    papa,
    pakmail,
    oldNavy,
    nike,
    newbalence,
    minuteman,
    mcdonalds,
  ];

  const imgArr = [logosGroupOne, logosGroupTwo];
  const isBusiness = useSelector(
    state => state.businessReducer.isBusinessActive
  );

  const ActiveFeatureData = useSelector(
    state => state.tabReducer.ActiveFeatureData
  );
  console.log(ActiveFeatureData, "this is the active feature data");

  return (
    <div>
      <CommonHeroBanner isB2b={true} />
      <div className="mt-[60px] 2xl:mt-[80px] 3xl:mt-[154px]">
        <ReactMarquee
          isIndividual={false}
          imgArr={imgArr}
          gap={300}
          speed={70}
        />
        <div className="  mt-[60px] xl:mt-[80px] 3xl:mt-[120px] ">
          <B2bTab />
        </div>
        {/* <div className="mb-[120px]">
          <B2bCommonFeature
            Tittle={ActiveFeatureData[0]?.Tittle}
            SubTittle={ActiveFeatureData[0]?.SubTittle}
            CardDetails={ActiveFeatureData[0]?.CardDetails}
            BgColor={ActiveFeatureData[0]?.BgColor}
            SvgColor={ActiveFeatureData[0]?.SvgColorCode}
            isHighlight={ActiveFeatureData[0].isHighlight}
            HighLightedTxt={ActiveFeatureData[0].HighLightedTxt}
            Direction={ActiveFeatureData[0].Direction}
          />
        </div>
        <div className="mb-[120px]">
          <B2bCommonFeature
            Tittle={ActiveFeatureData[1]?.Tittle}
            SubTittle={ActiveFeatureData[1]?.SubTittle}
            CardDetails={ActiveFeatureData[1]?.CardDetails}
            BgColor={ActiveFeatureData[1]?.BgColor}
            SvgColor={ActiveFeatureData[1]?.SvgColorCode}
            isHighlight={ActiveFeatureData[1].isHighlight}
            HighLightedTxt={ActiveFeatureData[1].HighLightedTxt}
            Direction={ActiveFeatureData[1].Direction}
          />
        </div>
        <div className=" mb-[87px]">
          <B2bPrice />
        </div>
        <div>
          <SwitchToSavings isBusiness={true} />
        </div> */}
      </div>
    </div>
  );
};

export default B2Bpage;
