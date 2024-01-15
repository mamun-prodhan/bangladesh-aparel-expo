import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../../assets/Logo.png";
import { useState } from "react";
// import "./Navbar.css";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <div className="py-6 md:py-12">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="bangladesh appearel expo logo" />
        </div>
        {/* for desktop screen*/}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-12">
            <Nav route="/" label="About" />
            <Nav route="/agenda" label="Agenda" />
            <Nav route="/speakers" label="Speakers" />
            <Nav route="/exhibitors" label="Exhibitors" />
          </ul>
          <button className="px-[36px] py-[18px] font-semibold text-base text-[#231F20] border border-[#231F20] rounded-[8px] hover:bg-[#231F20] hover:text-white duration-300">
            <Link to="/register">Register</Link>
          </button>
        </div>
        {/* for mobile responsive */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <AiOutlineClose></AiOutlineClose>
          ) : (
            <AiOutlineMenu></AiOutlineMenu>
          )}
        </div>
        <div
          className={`z-[1000] md:hidden absolute bg-white left-0 w-full px-5 py-5 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          }`}
        >
          <div className="space-y-2">
            <ul className="space-y-2">
              <Nav route="/" label="About" />
              <Nav route="/agenda" label="Agenda" />
              <Nav route="/speakers" label="Speakers" />
              <Nav route="/exhibitors" label="Exhibitors" />
            </ul>
            <button className="px-4 py-2 font-semibold text-base text-[#231F20] border border-[#231F20] rounded-[8px] hover:bg-[#231F20] hover:text-white duration-300">
              <Link to="/register">Register</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const Nav = ({ route, label }) => {
  return (
    <li>
      <NavLink
        to={route}
        className="text-[#231F20] text-base font-medium duration-300"
      >
        {label}
      </NavLink>
    </li>
  );
};
