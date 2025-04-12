import HowItWorksCard from "./HowItWorksCard";
import {
  AutomatedRentSvg,
  EnterYourPaymentSvg,
  MaximiseYourSvg,
  SeamlessTransparentSvg,
  SignUpSvg,
  TrackEverythingSvg,
} from "../svg-container/SvgContainer";
import ButtonAndArrow from "../common/ButtonAndArrow";

const HowItWorks = () => {
  const cardsData = [
    {
      title: "Sign Up & Get Started",
      steps: [
        "1. Register on RedGirraffe in just a few clicks.",
        "2. Choose your preferred payment method—Credit Card, Debit Card, UPI, or Fund Transfer",
      ],
      icon: <SignUpSvg />,
    },
    {
      title: "Enter Your Payment Details",
      steps: [
        "1. Add landlord, institution, or society details securely.",
        "2. Input bill amount and select payment frequency (monthly, quarterly, etc.).",
      ],
      icon: <EnterYourPaymentSvg />,
    },
    {
      title: "Seamless & Transparent Transactions",
      steps: [
        "1. Payments processed securely with low transaction fees (as low as 0.39% + GST for credit card payments).",
        "2. No hidden charges—only what is displayed.",
      ],
      icon: <SeamlessTransparentSvg />,
    },
    {
      title: "Automated Rent Receipts & Tax Benefits",
      steps: [
        "1. Instantly receive pre-populated rent receipts for tax & reimbursement claims.",
        "2. Integrated TDS Payment Module for compliance ease.",
        "3. Claim 80C & 80D tax benefits where applicable.",
      ],
      icon: <AutomatedRentSvg />,
    },
    {
      title: "Maximise Your Rewards & Savings",
      steps: [
        "1. Credit Card Benefits: Interest-free period, reward points, cashback offers.",
        "2. Debit Card & UPI Perks: Merchant offers, RedGirraffe loyalty points.",
        "3.Health & Insurance Coverage:  Exclusive personal accident & critical illness insurance plans.",
      ],
      icon: <MaximiseYourSvg />,
    },
    {
      title: "Track Everything on Your Personal Dashboard",
      steps: [
        "1.Monitor payments, receipts, rewards, and offers in one place.",
        "2. Keep your landlord or institution updated seamlessly.",
      ],
      icon: <TrackEverythingSvg />,
    },
  ];
  return (
    <section className="xl:mx-[30px] 2xl:mx-14 bg-[#F2F2F2] xl:rounded-[50px] 2xl:rounded-[80px] shadow-[0px_8px_32px_2px_rgba(0,0,0,0.12)]">
      <div className="px-5 xl:px-10 2xl:px-[60px] 3xl:px-[120px] 4xl:px-[160px] py-10 xl:py-12 2xl:py-16 3xl:py-[120px]">
        {/* This is the title section */}
        <div className="text-center flex flex-col gap-y-2">
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[#050404] text-[22px] md:text-[26px] lg:text-[30px] mb-1 lg:mb-0 2xl:text-[45px] 3xl:text-[72px] font-extrabold xl:leading-[72.8px]"
          >
            How It <span className="text-[#B68D40]">Works</span>
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[#545454] lg:text-lg 2xl:text-2xl font-normal lg:leading-[45.6px]"
          >
            Pay Your Rent, Fees & Bills Seamlessly with RedGirraffe
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[#545454] lg:text-lg 2xl:text-xl lg:leading-[26.4px]"
          >
            Simple, Secure & Rewarding
          </p>
        </div>
        {/* This is the card section */}
        <div className="mt-10 xl:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 xl:gap-6 3xl:gap-8">
            {cardsData.map((card, index) => (
              <HowItWorksCard
                key={index}
                title={card.title}
                steps={card.steps}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
        {/* This is the title section */}
        <div className="text-center mt-8 2xl:mt-16">
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[#545454] text-lg md:text-xl lg:text-2xl font-normal lg:leading-[45.6px]"
          >
            Start Making Smart Payments Today!
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[#545454] md:text-lg lg:text-xl lg:leading-[26.4px]"
          >
            No more hassle—just seamless, rewarding transactions with
            RedGirraffe!
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex justify-center mt-8 2xl:mt-16"
          >
            <ButtonAndArrow bgColor={"#B68D40"} buttonText="Get Started Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
