import ButtonAndArrow from "../common/ButtonAndArrow";
import {
  WhyPaySvg,
  CashUp,
  CashHome,
  CashCalculation,
  VerifiedCash,
  Merchant,
  Credit,
  CertifiedPay,
  Setting,
  Dashboard,
  Gift,
  Claim,
  Security,
  Caluculation,
  Privacy,
} from "../svg-container/SvgContainer";

const WhyPayRentRightSide = () => {
  const data = [
    {
      id: 1,
      title:
        "Why Pay High-Value Bills with Your Debit Card, UPI, or Fund Transfer?",
      description: "Seamless Payments. Smart Benefits. Maximum Convenience.",
      icon: <CashUp />,
    },
    {
      id: 2,
      title: "Smart Rent Optimization",
      description: "Data analytics to maximize financial efficiency.",
      icon: <CashHome />,
    },
    {
      id: 3,
      title: "Convert Annual Insurance Premiums to EMI",
      description: "Easy instalments at extra cost.",
      icon: <CashCalculation />,
    },
    {
      id: 4,
      title: "Financial Protection Against Unexpected Events",
      description:
        "Coverage for job loss, accidents, or surgeries (check with RedGirraffe for details).",
      icon: <VerifiedCash />,
    },
    {
      id: 5,
      title: "Exclusive Merchant Offers",
      description: "Unlock deals from leading brands.",
      icon: <Merchant />,
    },
    {
      id: 6,
      title: "Earn RedGirraffe Loyalty Points",
      description: "Redeem for valuable rewards.",
      icon: <Credit />,
    },
    {
      id: 7,
      title: "Automated, Pre-Populated Rent Receipts",
      description: "Easy tax benefits & claims.",
      icon: <CertifiedPay />,
    },
    {
      id: 8,
      title: "Integrated TDS Payment Module",
      description: "Stay compliant effortlessly.",
      icon: <Setting />,
    },
    {
      id: 9,
      title: "Personalized Dashboard",
      description: "Easily manage payments & receipts.",
      icon: <Dashboard />,
    },
    {
      id: 10,
      title: "RedGirraffe Cash Points & Gift Cards",
      description: "Redeem across 300+ brands.",
      icon: <Gift />,
    },
    {
      id: 11,
      title: "Claim 80C & 80D Tax Benefits",
      description: "Eligible deductions apply.",
      icon: <Caluculation />,
    },
    {
      id: 12,
      title: "Comprehensive Health & Surgery Coverage",
      description:
        "Plans available without medical exams (additional costs apply).",
      icon: <Security />,
    },
    {
      id: 13,
      title: "Transparent Pricing—No Hidden Charges",
      description: "Pay only what is mentioned.",
      icon: <Privacy />,
    },
  ];

  return (
    <section>
      {data.map((item, index) => (
        <div
          key={item.id}
          className="border-b last:border-b-0 pb-7 pt-7 group cursor-pointer"
        >
          <div data-aos="fade-up" data-aos-delay="100" className="flex gap-3">
            <button className="bg-[#BF9B58] p-1 lg:p-[6px] xl:rounded-[200px] self-start">
              {item.icon}
            </button>
            <p
              className={`text-[#000717] text-[17px] md:text-lg 2xl:text-xl font-semibold lg:font-extrabold lg:leading-8 group-hover:text-[#BF9B58]
          transition-all duration-900 ease-in group-hover:scale-105 group-hover:text-[21px] 
          ${index === 0 ? "lg:text-[21px] scale-[105px] text-[#BF9B58] " : ""}`}
            >
              {item.title}
            </p>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-2 md:mt-3 2xl:mt-5 text-[#4D4D4D] xl:text-lg 2xl:text-xl font-normal xl:leading-9"
          >
            {item.description}
          </p>
        </div>
      ))}
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        className="mt-3 lg:mt-[26px] text-[#050404] lg:text-lg xl:text-xl text-semibold lg:font-extrabold lg:leading-8"
      >
        Turn Fixed Payments into Financial Gains! Pay Rent, Fees & Bills the
        Smart Way.
      </p>
      <div data-aos="fade-up" data-aos-delay="100" className="mt-7 md:mt-12">
        <ButtonAndArrow bgColor="#B68D40" buttonText="Get Started Now" />
      </div>
    </section>
  );
};

export default WhyPayRentRightSide;
