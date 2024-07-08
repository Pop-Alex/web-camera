import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { frameImg, frameVideo } from "../utils";

import gsap from "gsap";
const VideoSection = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from("#text", {
      scrollTrigger: {
        trigger: "#text",
        start: "20% bottom",
      },
      opacity: 0,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">Amazing Camera</h2>

          <p className="hiw-subtitle">Check now!!</p>
        </div>

        <div className="mt-15 md:mt-20 mb-15 ">
          <div id="text" className="relative h-full flex-center">
            <div className="overflow-hidden  ">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-15 "
              />
            </div>
            <div className="hiw-video  ">
              <video
                className="pointer-events-none z-14  "
                playsInline
                preload="none"
                muted
                autoPlay
                loop
                ref={videoRef}>
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
