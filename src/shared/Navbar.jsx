import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import {
  MessageSvg,
  WhatsappSvg,
} from "../components/svg-container/SvgContainer";
import { useSelector } from "react-redux";
const Navbar = () => {
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

  return (
    <header
      className={`  ${
        isBusiness ? "bg-[#1D2526]" : "bg-[#752828]"
      } fixed w-full top-0 left-0 h-auto  py-3 px-12 flex items-center z-[1000]`}
    >
      <nav className="flex justify-between items-center py-3 w-full">
        {/* This is the left side div */}
        <Link data-aos="fade-up" data-aos-delay="100" to={"/"}>
          <figure className="w-[189px] ">
            <img className="w-full h-full object-cover" src={logo} alt="" />
          </figure>
        </Link>
        {/* This is the right side div */}
        <div className="flex gap-6 items-center">
          <ul className="flex items-center">
            {navLinks?.map(item => (
              <li data-aos="fade-up" key={item?.title}>
                <NavLink
                  data-aos="fade-up"
                  data-aos-delay="100"
                  to={item?.path}
                  className={({ isActive }) =>
                    `px-6 border-r border-[#F0F7FF] ${
                      isActive
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
      </nav>
    </header>
  );
};

export default Navbar;
