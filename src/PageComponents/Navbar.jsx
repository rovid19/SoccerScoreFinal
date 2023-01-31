import React from "react";
import { NavLink, Link } from "react-router-dom";
import img from "../slike/logo.png";
import "boxicons";
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);
  const [url, setUrl] = useState(window.location.href);
  const [slideDown, setSlideDown] = useState(false);
  const [className, setClassName] = useState(
    " w-full hidden  lg:mt-0 absolute top-[80px] z-10 ml-[-100px] 2xl:ml-[-100px] lg:ml-[-100px] lg:opacity-100 lg:relative lg:top-0 lg:block "
  );
  const handleUrl = () => {
    if (url != window.location.href) {
      setClassName((prev) => prev + "hidden");
      setUrl(window.location.href);
    }
  };
  const handleClick = () => {
    if (!className.includes("hidden")) {
      setClassName((prev) => prev + "hidden");
    } else {
      setClassName(className.replace("hidden", ""));
    }

    console.log(className);
  };
  /* useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width > 1023) {
      setShowMenu(true);
    } else if (width < 1024) {
      setShowMenu(false);
    }
  }, [width]); */

  return (
    <div className="h-[80px] top-0 w-[100%] absolute bg-yellow z-10 text-black lg:relative lg:w-[100px] xl:w-[250px] lg:h-screen">
      <div className="h-full w-full  flex justify-center items-center lg:h-[25%] lg:mb-5 2xl:h-[20%] 2xl:mb-2 ">
        <Link to="/">
          <img
            src={img}
            className=" shadow-xl cursor-pointer w-[100px] lg:w-auto lg:mt-8"
          />
        </Link>
      </div>
      <div
        className="absolute top-0 h-full flex items-center pb-3 z-10 lg:invisible lg:absolute lg:h-[5%]"
        onClick={() => {
          handleClick();
        }}
      >
        <box-icon
          name="menu-alt-left"
          className="w-[100px]"
          size="lg"
        ></box-icon>
      </div>

      <motion.div
        className={className}
        animate={{ x: 100, y: slideDown ? -100 : 0 }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <li
          onClick={handleUrl}
          className="block text-xl flex justify-center h-[50px] items-center lg:text-sm xl:text-xl   bg-yellow shadow-lg transition-all hover:bg-white hover:text-black lg:flex lg:justify-start lg:mt-1 lg:h-10 "
        >
          <NavLink to="/" className=" pl-4 ">
            Leagues
          </NavLink>
        </li>
        <li
          onClick={handleUrl}
          className="block  flex justify-center text-xl h-[50px] items-center lg:text-sm xl:text-xl bg-yellow shadow-lg transition-all hover:bg-white hover:text-black lg:flex lg:justify-start lg:mt-1 lg:h-10 "
        >
          <NavLink to="/teams" className="pl-4">
            Teams
          </NavLink>
        </li>
        <li
          onClick={handleUrl}
          className="block  flex justify-center text-xl h-[50px] items-center  lg:text-sm xl:text-xl bg-yellow shadow-lg transition-all hover:bg-white hover:text-black lg:flex lg:justify-start lg:mt-1 lg:h-10 "
        >
          <NavLink to="/transfers" className="pl-4 ">
            Transfers
          </NavLink>
        </li>
        <li
          onClick={handleUrl}
          className="block  flex justify-center text-xl h-[50px] items-center lg:text-sm xl:text-xl  bg-yellow shadow-lg transition-all hover:bg-white hover:text-black lg:flex lg:justify-start lg:mt-1 lg:h-10 "
        >
          <NavLink to="/livegames" className="pl-4 ">
            Live games
          </NavLink>
        </li>{" "}
      </motion.div>
    </div>
  );
};

export default Navbar;
