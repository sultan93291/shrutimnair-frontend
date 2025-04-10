import { Link } from "react-router-dom"
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <section>
      {/* This is the first div */}
      <div className="bg-[#2D2D2D] pt-7 lg:pt-10 2xl:pt-[68px] px-5 lg:px-8 2xl:px-12 pb-[33px]">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-5 gap-5 4xl:gap-10">
          {/* This is the first div */}
          <div className="order-1">
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-[#FFF]">Important Links</p>
              <p className="text-[#B68D40] font-extrabold leading-[22.96px] mt-1">
                Quick access to essential pages
              </p>
            </div>
            {/*  */}
            <ul className="mt-6 space-y-1">
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  The Journey
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Board of Advisors
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Founding Team
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  INDIA - S A & I
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Team
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Media Relations
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Higher Purpose
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Our Values
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  RentPay™
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  About Us
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Reviews
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  FAQs
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Blog
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Press Releases
                </a>
              </li>
            </ul>
          </div>
          {/* This is the second div */}
          <div className="order-2">
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-[#FFF]">Policies & Compliance</p>
              <p className="text-[#B68D40] font-extrabold leading-[22.96px] mt-1">
                Key policies for security and compliance
              </p>
            </div>
            {/*  */}
            <ul className="mt-6 space-y-1">
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Fixed Deposit
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Refer & Earn
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Privacy Policy
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Refund/Cancellation Policy
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Terms & Conditions
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  An Bribery Policy
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Code of Business Conduct & Ethics
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Anti-Fraud Policy Investigation
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Anti-Money Laundering Policy
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Sanctions Compliance Statement
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Grievance Redressal Policy
                </a>
              </li>
            </ul>
          </div>
          {/* This is the Third div */}
          <div className="order-4 xl:order-3">
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-[#FFF]">Business Services</p>
              <p className="text-[#B68D40] font-extrabold leading-[22.96px] mt-1">
                Solutions for businesses & partners
              </p>
            </div>
            {/*  */}
            <ul className="mt-6 space-y-1">
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  List Your Property
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Register as Agent
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Corporate Rental ERP
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  SME Loans
                </a>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                  Post Your Requirement
                </a>
              </li>
            </ul>
          </div>
          {/* This is the Fourth div */}
          <div className="order-3 xl:order-4">
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="text-[#FFF]">Our Offices</p>
              <p className="text-[#B68D40] font-extrabold leading-[22.96px] mt-1">
                Global presence, local impact
              </p>
            </div>
            {/*  */}
            <ul className="mt-6 space-y-1">
              <div>
                <li data-aos="fade-up" data-aos-delay="100">
                  <a
                    href="#"
                    className="text-[#B68D40] font-bold leading-[19.6px]"
                  >
                    United Kingdom
                  </a>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                    RedGirraffe Inc.
                  </a>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                    Harben House, Harben Parade, Finchley
                  </a>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                    Road, London, NW3 6LH.
                  </a>
                </li>
              </div>
              <div className="pt-5">
                <li data-aos="fade-up" data-aos-delay="100">
                  <a
                    href="#"
                    className="text-[#B68D40] font-bold leading-[19.6px] mt-5"
                  >
                    Singapore
                  </a>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                    RedGirraffe Holdings
                  </a>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                    3 Temasek Avenue, Centennial Tower,
                  </a>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                    #17-01, Singapore 039190.
                  </a>
                </li>
              </div>
              <div className="pt-5">
                <li data-aos="fade-up" data-aos-delay="100">
                  <a
                    href="#"
                    className="text-[#B68D40] font-bold leading-[19.6px] "
                  >
                    India
                  </a>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                    RedGirraffe.com
                  </a>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                    904, Galleria Towers, DLF Phase IV,
                  </a>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                    Gurgaon, Haryana - 122002.
                  </a>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                    507, Tulsiani Chambers, Nariman Point,
                  </a>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <a href="#" className="text-[#E6E6E6] leading-[23.8px]">
                    Mumbai - 400021.
                  </a>
                </li>
              </div>
            </ul>
          </div>
          {/* This is the Fifth div */}
          <div className="order-5">
            <div>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-[#FFF]"
              >
                Stay Connected
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-[#B68D40] font-extrabold leading-[22.96px] mt-1"
              >
                Never miss an update
              </p>
            </div>

            {/* This is the button section */}
            <div className="mt-5 relative w-[280px] h-12">
              <input
                data-aos="fade-up"
                data-aos-delay="100"
                type="text"
                placeholder="Enter your email"
                className="py-3 px-4 rounded-[400px] w-full h-full"
              />
              <button className="bg-[#B68D40] rounded-[47px] my-2 px-4 text-[#050404] font-bold leading-[23.8px] py-2 absolute right-1 -top-1">
                Subscribe
              </button>
            </div>
            {/*  */}
            <div className="mt-8 flex flex-col gap-y-3 ">
              <Link data-aos="fade-up" data-aos-delay="100" to={"/"}>
                <img src={logo} alt="" />
              </Link>
              <div className="flex gap-2 mt-2">
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="border-r-2 border-[#B68D40] pr-2 text-[#B68D40] font-bold text-nowrap"
                >
                  Payments
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="border-r-2 border-[#B68D40] pr-2 text-[#B68D40] font-bold text-nowrap"
                >
                  B2B SaaS
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="pr-2 border-[#B68D40] text-[#B68D40] font-bold text-nowrap"
                >
                  Real Estate
                </p>
              </div>
            </div>
            {/*  */}
            <div className="mt-5">
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-[#E6E6E6] font-extrabold leading-[18.2px]"
              >
                Write to us at:
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-[#E6E6E6] xl:text-xl font-bold"
              >
                connect@redgirraffe.com
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* This is the second div */}
      <div className="bg-[#B68D40] h-16 flex justify-center items-center">
        <p className="text-[#050404] text-[13px] font-bold leading-[21.32px]">
          Copyright © 2025-2026 | RedGirraffe - All rights reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
