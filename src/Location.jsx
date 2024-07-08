import React, { Suspense, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import Lights from "./components/Lights";
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { NavLink } from "react-router-dom";
import Earth from "./components/Earth";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Effects } from "./Effects";

const Location = () => {
  useGSAP(() => {
    gsap.from("#backButton", { opacity: 1, x: -65, delay: 2 });
  }, []);
  return (
    <section>
      <div className="screen-max-width ">
        <div id="backButton" className="p-5">
          <NavLink className="z-100 top-10 text-5xl  " to="/">
            <MdOutlineKeyboardBackspace />
          </NavLink>
        </div>

        <div className="flex flex-col items-center mt-5 z-99 ">
          <div className="w-full h-auto md:h-[90vh] overflow-hidden relative    ">
            <Canvas
              camera={{ position: [10, 10, 10], fov: 50 }}
              className="w-full  h-[75vh] md:h-[90vh] "
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}>
              <Environment preset="sunset" />
              {/* <Lights /> */}
              <Effects />
              <Suspense fallback={null}>
                <Earth />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
