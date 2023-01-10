import "../css/navbar.css";
import "animate.css";
import "aos/dist/aos.css";
import SideNav from "./SideNav";
import React, { Dispatch, SetStateAction } from "react";
const Navbar: React.FC<{
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}> = ({ show, setShow }) => {
  const handleChange = () => {
    setShow(!show);
  };
  return (
    <div className="nav-main lg:backdrop-filter lg:backdrop-blur-md lg:bg-transparent ">
      <div className="    animate__animated animate__fadeInDown flex flex-row justify-between lg:align-middle top-5  items-center ml-6 mt-8 mr-10 ">
        <img
          src="https://i.ibb.co/34ZgwCD/a.png"
          alt="a"
          className="cover w-14 h-14 rounded-xl"
        />
        <section className="lg:flex lg:flex-row lg:justify-between lg:w-3/12 hidden">
          <a
            href="#about"
            className="nav-link cursor-pointer animate__animated animate__fadeInDown hover:text-white"
          >
            About
          </a>
          <a
            href="#experience"
            className="nav-link cursor-pointer animate__animated animate__fadeInDown hover:text-white"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="nav-link cursor-pointer animate__animated animate__fadeInDown hover:text-white"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="nav-link cursor-pointer animate__animated animate__fadeInDown hover:text-white"
          >
            Contact
          </a>
        </section>
        <a
          href="https://drive.google.com/file/d/1_-2cfISw3mTmcaLCkpMsVo9LxAyvCXsn/view"
          rel="noreferrer noopener"
          target="_blank"
          className="hidden nav-button  lg:block lg:rounded-lg lg:overflow-hidden  lg:border-2 lg:border-opacity-3  lg:border-gray-50 lg:px-4 lg:py-1 "
        >
          Resume{" "}
        </a>

        {/* mobile logo */}
        {!show && (
          <div
            className="lg:hidden flex flex-col items-end  cursor-pointer"
            onClick={handleChange}
          >
            <hr className="w-9 h-2 top-nav" />
            <hr className="w-7 h-2 top-nav" />
            <hr className="w-4 h-2 top-nav" />
          </div>
        )}
      </div>
      {show && <SideNav setShow={setShow} show={show} />}
    </div>
  );
};
export default Navbar;
