import WhyPayRent from "@/components/homepage/WhyPayRent";
import airtel from "../../assets/images/bankingLogo/Airtel_Payments_Bank-OC7iVv4KE_brandlogos.net.svg";
import america from "../../assets/images/bankingLogo/american-express-1.svg";
import apple from "../../assets/images/bankingLogo/Apple_Pay-OCCmCxK1c_brandlogos.net.svg";
import Axis_Bank from "../../assets/images/bankingLogo/Axis_Bank-OGxlzxXTv_brandlogos.net.svg";
import bajaj from "../../assets/images/bankingLogo/bajaj-finserv-logo-brandlogos.net_thyuib3cd.svg";
import bankofamerica from "../../assets/images/bankingLogo/bank-of-america.svg";
import baroda from "../../assets/images/bankingLogo/Bank_of_Baroda-3ryBfGUM_brandlogos.net.svg";
import barclays from "../../assets/images/bankingLogo/barclays-logo-1.svg";
import bhim from "../../assets/images/bankingLogo/BHIM-OryQ25gqM_brandlogos.net.svg";
import bnp from "../../assets/images/bankingLogo/bnp-paribas-1.svg";
import canara from "../../assets/images/bankingLogo/Canara_Bank_Logo.svg.png";
import capital from "../../assets/images/bankingLogo/capital-small-finance-bank-logo-brandlogos.net_lzt9wkcs2.svg";
import central from "../../assets/images/bankingLogo/central-bank-of-india-1911-seeklogo.png";
import citi from "../../assets/images/bankingLogo/citibank-5.svg";
import deutsche from "../../assets/images/bankingLogo/deutsche-bank-logo-without-wordmark.svg";
import development from "../../assets/images/bankingLogo/development-bank-of-singapore.svg";
import dinners from "../../assets/images/bankingLogo/diners-club-logo3-1.svg";
import discover from "../../assets/images/bankingLogo/discover-4.svg";
import gpay from "../../assets/images/bankingLogo/g-pay-logo-brandlogos.net_m2s30kmwb.svg";
import HDFC from "../../assets/images/bankingLogo/HDFC-Oi8faq9wi_brandlogos.net (1).svg";
import hsbc from "../../assets/images/bankingLogo/hsbc-3.svg";
import ICIC from "../../assets/images/bankingLogo/ICICI_Bank-7DEFd4t0_brandlogos.net.svg";
import idibi from "../../assets/images/bankingLogo/idbi-bank-logo-1 (1).svg";
import idfc from "../../assets/images/bankingLogo/idfc-first-bank-logo-brandlogos.net_b09qwqpa3 (1).svg";
import indian from "../../assets/images/bankingLogo/Indian_Bank_logo.svg.png";
import indian_ovesars from "../../assets/images/bankingLogo/indian-overseas-bank-vector-logo.png";
import insuind from "../../assets/images/bankingLogo/indusind-bank-logo-brandlogos.net_a37d9tcf4.svg";
import jcb from "../../assets/images/bankingLogo/jcb-card-icon.svg";
import kotak from "../../assets/images/bankingLogo/Kotak_Mahindra_Bank-Ob9zXUbPM_brandlogos.net.svg";
import lic from "../../assets/images/bankingLogo/lic.svg";
import mastercard from "../../assets/images/bankingLogo/mastercard-logo-O88F55Erg_brandlogos.net.svg";
import paypal from "../../assets/images/bankingLogo/paypal-pure-.svg";
import punjab from "../../assets/images/bankingLogo/Punjab_National_Bank-OsZAY0ENE_brandlogos.net.svg";
import rupay from "../../assets/images/bankingLogo/RuPay-O8gnEB5np_brandlogos.net.svg";
import sbi from "../../assets/images/bankingLogo/sbi-life-insurance-logo-brandlogos.net_x3rqfpbn1 (1).svg";
import standard from "../../assets/images/bankingLogo/standard-chartered-2.svg";
import state from "../../assets/images/bankingLogo/State_Bank_of_India-OBB9IFDl8_brandlogos.net.svg";
import syndicate from "../../assets/images/bankingLogo/idU7IIyeu0_1744453198000.svg";
import uco from "../../assets/images/bankingLogo/239-2391368_newsflash-cbi-arrests-two-officials-of-uco-bank-in-uco-bank-logo.png";
import union from "../../assets/images/bankingLogo/union-bank-of-india.svg";
import visa from "../../assets/images/bankingLogo/Visa_Inc-OdftkRHIe_brandlogos.net.svg";
import yes from "../../assets/images/bankingLogo/Yes_Bank-OSuEn7mdt_brandlogos.net.svg";

const bankLogos1 = [
  airtel,
  america,
  apple,
  Axis_Bank,
  bajaj,
  bankofamerica,
  baroda,
  barclays,
  bhim,
  bnp,
  canara,
  capital,
  central,
  citi,
  deutsche,
  development,
  dinners,
  discover,
  gpay,
  HDFC,
  hsbc,
  ICIC,
];

const bankLogos2 = [
  idibi,
  idfc,
  indian,
  indian_ovesars,
  insuind,
  jcb,
  kotak,
  lic,
  mastercard,
  paypal,
  punjab,
  rupay,
  sbi,
  standard,
  state,
  syndicate,
  uco,
  union,
  visa,
  yes,
];

import CommonHeroBanner from "../../components/common/CommonHeroBanner";
import ReactMarquee from "@/components/common/ReactMarquee";
import HowItWorks from "@/components/homepage/HowItWorks";
import WhatOurUserSays from "@/components/homepage/WhatOurUserSays";
import SwitchToSavings from "@/components/common/SwitchToSavings";
import { useSelector } from "react-redux";

const HomePage = () => {
  const imgArr = [bankLogos1, bankLogos2];
  const isBusiness = useSelector(
    state => state.businessReducer.isBusinessActive
  );
  console.log(isBusiness);

  return (
    <div>
      <CommonHeroBanner />
      <div className="mt-[20px] lg:mt-[40px] 2xl:mt-[80px] 3xl:mt-[154px]">
        <ReactMarquee
          isIndividual={true}
          imgArr={imgArr}
          gap={300}
          speed={70}
        />
        <div className="mt-[60px] xl:mt-[80px] 3xl:mt-[154px]">
          <WhyPayRent />
        </div>
        <div className="mt-[20px] md:mt-[30px] xl:mt-[70px] 3xl:mt-[120px]">
          <HowItWorks />
        </div>
        <div className="mt-[20px] md:mt-[30px] xl:mt-[70px] 3xl:mt-[120px]">
          <WhatOurUserSays />
        </div>

        <div>
          <SwitchToSavings />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
