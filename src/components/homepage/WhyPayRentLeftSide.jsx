import ButtonAndArrow from "../common/ButtonAndArrow";
import {
  AutomatedSvg,
  CliamSvg,
  EarnRewardPointsSvg,
  EnjoyDaysSvg,
  ExclusiveBankSvg,
  ExclusivePersonalSvg,
  IfYourLandlordSvg,
  IntegratedSvg,
  MaximizeInterestSvg,
  PersonalizedDashboardSvg,
  RedGirraffeCashSvg,
  TransparentSvg,
  WhyPaySvg,
  YourCreditScoreSvg,
} from "../svg-container/SvgContainer";

const WhyPayRentLeftSide = () => {
  const data = [
    {
      id: 1,
      title: "Why Pay High-Value Bills with Your Credit Card?",
      description: " Turn Every Payment into a Financial Advantage!",
      icon: <WhyPaySvg />,
    },
    {
      id: 2,
      title: "Your Credit Score",
      description:
        "Higher scores unlock lower-interest loans and financial benefits.",
      icon: <YourCreditScoreSvg />,
    },
    {
      id: 3,
      title: "Enjoy 45-56 Days of Interest-Free Credit",
      description: "Pay now, settle later.",
      icon: <EnjoyDaysSvg />,
    },
    {
      id: 4,
      title: "Earn Reward Points",
      description:
        "Redeem as cashback, discounts, or travel perks (check your bank’s offers).",
      icon: <EarnRewardPointsSvg />,
    },
    {
      id: 5,
      title: "Maximize Interest on Your Savings",
      description:
        "Use your credit card and keep funds earning in savings accounts.",
      icon: <MaximizeInterestSvg />,
    },
    {
      id: 6,
      title: "Exclusive Bank Cashback Offers",
      description: "Access special promotions (refer to your bank).",
      icon: <ExclusiveBankSvg />,
    },
    {
      id: 7,
      title: "Automated, Pre-Populated Rent Receipts",
      description: "Hassle-free tax benefits & reimbursements.",
      icon: <AutomatedSvg />,
    },
    {
      id: 8,
      title: "Integrated TDS Payment Option",
      description: "Simplify tax compliance with built-in tools.",
      icon: <IntegratedSvg />,
    },
    {
      id: 9,
      title: "Personalized Dashboard",
      description: "Track payments, receipts & rewards seamlessly",
      icon: <PersonalizedDashboardSvg />,
    },
    {
      id: 10,
      title: "RedGirraffe Cash Points & Gift Cards",
      description:
        "Redeem on 300+ premium brands (Amazon, Flipkart, Uber, Starbucks & more).",
      icon: <RedGirraffeCashSvg />,
    },
    {
      id: 11,
      title: "Claim 80C & 80D Tax Benefits",
      description: "Reduce taxable income (consult your accountant).",
      icon: <CliamSvg />,
    },
    {
      id: 12,
      title: "Exclusive Personal Accident & Critical Illness Insurance",
      description: "Optional add-on at preferential rates.",
      icon: <ExclusivePersonalSvg />,
    },
    {
      id: 13,
      title: "Transparent, Low-Cost Transactions",
      description:
        "Just 0.39% + GST per transaction (₹39 + GST per ₹10,000). Additional bank-imposed fees may apply.",
      icon: <TransparentSvg />,
    },
    {
      id: 14,
      title:
        " If your landlord is on RedGirraffe, they can earn up to ₹3,000/month in brand rewards",
      description: "(Amazon, Uber, Flipkart & more). Let them know!",
      icon: <IfYourLandlordSvg />,
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
            <button className="bg-[#BF9B58] p-1 lg:p-[6px] rounded-[200px] self-start">
              {item.icon}
            </button>
            <p
              className={`text-[#000717] text-[17px] md:text-lg 2xl:text-xl font-semibold md:font-extrabold lg:leading-8 group-hover:text-[#BF9B58]
          transition-all duration-900 ease-in group-hover:scale-105 group-hover:text-[21px] 
          ${index === 0 ? "text-[21px] scale-[105px] text-[#BF9B58] " : ""}`}
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

export default WhyPayRentLeftSide;
