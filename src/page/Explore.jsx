import React, { useEffect, useRef } from "react";
import { imageData } from "../data";
import Gallery from "./Gallery";
import LocomotiveScroll from "locomotive-scroll";
import "../../node_modules/locomotive-scroll/src/locomotive-scroll.scss";

const Explore = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref) {
      new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: "horizontal",
        multiplier: 0.5,
      });
    }
  }, []);
  const images = imageData.map((item, index) =>
    item.map((url, elementIndex) => (
      <Gallery
        key={url}
        src={url.img}
        text={url.text}
        index={elementIndex}
        columnOffset={index * 15}
      />
    ))
  );

  return (
    <>
      <div className="main-container">
        <div className="scroll-container" data-scroll-container ref={ref}>
          <div className="content">
            <div className="gallery">
              {images}

              <div className="behind-text fill" data-scroll data-scroll-speed>
                Camera
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
