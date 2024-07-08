import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { gsap, Power3 } from "gsap";
import { navLists } from "../constants";
import { useGSAP } from "@gsap/react";
import Sidebar from "./Sidebar";
const Navbar = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  useGSAP(() => {
    tl.from("#side", 1, {
      opacity: 0,
      x: -200,
      delay: 2,
    });
    tl.from("#item1,#item2", 2, {
      opacity: 1,
      y: -200,
      ease: ease,
      delay: 1,
      stagger: {
        amount: 0.9,
      },
    });
  }, []);
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between item-center sticky top-0 z-50">
      <nav className="flex w-full screen-max-width ">
        <div id="side">{/* <Sidebar /> */}</div>
        <div className="flex flex-1  justify-end  max-sm:hidden md:w-auto">
          <div id="item1">
            <li className="px-5 cursor-pointer text-gray hover:text-white transition-all text-2xl ">
              <Link
                to="highlights"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                High
              </Link>
            </li>
          </div>
          <div id="item2">
            <li className="px-5 cursor-pointer text-gray hover:text-white transition-all text-2xl ">
              <Link
                id="item2"
                to="demo"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                Demo
              </Link>
            </li>
          </div>
          <div id="item2">
            <li className="px-5 cursor-pointer text-gray hover:text-white transition-all text-2xl ">
              <NavLink
                id="item3"
                to="/location"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}>
                Location
              </NavLink>
            </li>
          </div>
        </div>
        {/* <div className="flex item-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="" />
          <img src={bagImg} alt="" />
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
