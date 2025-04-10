import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import {
  MessageSvg,
  WhatsappSvg,
} from "../components/svg-container/SvgContainer";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from 'react-icons/rx';
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const navLinks = [
    {
      path: "/loans",
      title: "Loans",
    },
    {
      path: "/axis-rentpay",
      title: "Axis RentPay",
    },
    {
      path: "/b2b-sass",
      title: "B2B SaaS",
    },
    {
      path: "/zero-carbon",
      title: "ZeroCarbon",
    },
    {
      path: "/log-in",
      title: "Log In",
    },
  ];

  const isBusiness = useSelector(
    state => state.businessReducer.isBusinessActive
  );
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup when component unmounts just in case
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);


  return (
    <header
      className={`  ${isBusiness ? "bg-[#1D2526]" : "bg-[#752828]"
        } fixed w-full top-0 left-0 h-auto py-2 2xl:py-3 px-5 lg:px-8 2xl:px-12 flex items-center z-[1000]`}
    >
      <nav className="flex justify-between items-center py-3 w-full">
        {/* This is the left side div */}
        <Link data-aos="fade-up" data-aos-delay="100" to={"/"}>
          <figure className="w-[125px] lg:w-[164px] 2xl:w-[189px] ">
            <img className="w-full h-full object-cover" src={logo} alt="" />
          </figure>
        </Link>
        {/* This is the right side div */}
        <div className="2xl:flex gap-6 items-center hidden">
          <ul className="flex items-center">
            {navLinks?.map(item => (
              <li data-aos="fade-up" key={item?.title}>
                <NavLink
                  data-aos="fade-up"
                  data-aos-delay="100"
                  to={item?.path}
                  className={({ isActive }) =>
                    `px-6 border-r border-[#F0F7FF] ${isActive
                      ? "text-green-400"
                      : "text-[#FFF] text-base font-bold leading-5"
                    } hover:text-gray-300 duration-300 transition-all`
                  }
                >
                  <span>{item?.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Social Contact */}
          <div className="space-y-2">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex gap-2 items-center"
            >
              <WhatsappSvg />
              <p className="text-[#FFF] text-sm font-bold leading-6">
                (+91) 80-1019-1019
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex gap-2 items-center"
            >
              <MessageSvg />
              <p className="text-[#FFF] text-sm font-bold leading-6">
                connect@redgirraffe.com
              </p>
            </div>
          </div>
        </div>

        {/* ================ For Responsive ============== */}

        {/* Hamburger btn */}
        <button onClick={() => setOpen(!isOpen)} className="bg-primary 2xl:hidden text-white w-10 h-9 lg:w-11 lg:h-10 rounded grid place-items-center">
          <FaBars className="text-[22px] lg:text-2xl" />
        </button>

        {/* Blur Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 2xl:hidden z-[999] ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        </div>

        {/* Mobile Sidebar */}
        <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} duration-500 transition-transform fixed top-0 z-[999] left-0 bg-[#2d2d2d] py-10 px-5 lg:px-7 shadow-lg overflow-y-auto max-h-screen min-h-screen w-[250px] lg:w-[270px] 2xl:hidden`}
        >
          {/* logo */}
          <Link to='/' onClick={() => setOpen(false)}>
            <figure className="w-[150px] mx-auto">
              <img className="w-full h-full object-cover" src={logo} />
            </figure>
          </Link>

          {/* NavLinks */}
          <div className="mt-12">
            <ul className="flex flex-col gap-6">
              {navLinks?.map(item => (
                <li data-aos="fade-up" key={item?.title}>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to={item?.path}
                    className={({ isActive }) =>
                      `${isActive
                        ? "text-green-400"
                        : "text-[#FFF] text-base font-medium leading-5"
                      } hover:text-gray-300 duration-300 transition-all`
                    }
                  >
                    <span>{item?.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Contact */}
          <div className="space-y-4 mt-10">
            <div className="flex gap-2 items-center">
              <p className="flex-shrink-0"><WhatsappSvg /></p>
              <p className="text-[#FFF] text-[15px] font-medium leading-6">
                (+91) 80-1019-1019
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <p className="flex-shrink-0"><MessageSvg /></p>
              <p className="text-[#FFF] text-[15px] font-medium leading-6">
                connect@redgirraffe.com
              </p>
            </div>
          </div>

          {/* Cancel btn */}
          <button onClick={() => setOpen(false)} className="absolute top-3 right-3">
            <RxCross2 className="text-xl text-white" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
