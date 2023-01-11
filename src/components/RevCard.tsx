import React from "react";
import "../css/revcard.css";
import * as AOS from "aos";
import "animate.css";
import "aos/dist/aos.css";
const RevCard: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <a
      href="https://octoprofiler.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="  "
    >
      <div
        className="rev-main lg:items-center lg:justify-start  flex items-center justify-start flex-col text-start lg:p-4 lg:items-center justify-start backdrop-filter  bg-opacity-10 bg-gray-900 rounded-3xl shadow-2xl  "
        data-aos="fade-down"
      >
        <div className="lg:flex rev-sub-div lg:flex-col lg:justify-center  lg:items-start  lg:p-5 lg:mt-16 lg:gap-4 lg:z-20 flex flex-col  justify-center items-start gap-4 p-5">
          <p className="rev-p ">Featured Project</p>
          <h3 className="rev-h3 font-bold text-4xl">Github Profiler</h3>
          <div className="">
            <p className=" lg:rounded-3xl  lg:w-6/12 lg:absolute  lg:p-6 lg:float-left lg:text-left lg:bg-gray-900 lg:text-gray-400">
              A nicer look at GitHub profiles built with Next.js and the GitHub
              API
            </p>
          </div>
          <div className=" lg:mt-24  lg:flex lg:flex-row lg:items-center flex items-center gap-1">
            <a
              className="link"
              href="https://github.com/KrishKashiwala/Octoprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-github w-10 h-5 fill-current opacity-40 transition ease-in-out duration-200"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/feed/update/urn:li:activity:6878261971884617728/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current opacity-40 transition ease-in-out duration-200"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
        <img
          className="rev-img hidden lg:block"
          src="https://i.ibb.co/2cftsKp/demo.png"
          alt="demo"
        ></img>
      </div>
    </a>
  );
};
export default RevCard;
