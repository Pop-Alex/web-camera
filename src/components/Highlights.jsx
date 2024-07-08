import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Carousel from "./Carousel";
const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 15, delay: 2 });
  }, []);
  return (
    <section
      id="highlights"
      className=" overflow-hidden h-full w-full 
  common-padding bg-black">
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between">
          <h1 id="title" className="section-heading ">
            Highlights
          </h1>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default Highlights;
