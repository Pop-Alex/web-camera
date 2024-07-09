import React from "react";
import { gsap, Power3, Expo } from "gsap";
import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import { heroc } from "../utils";
import { heroback } from "../utils";
import { Timeline } from "gsap/gsap-core";
import { TweenMax, TimelineMax } from "gsap/all";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Hero = () => {
  let t2 = new gsap.timeline();
  let t1 = new TimelineMax();
  let eases = Power3.easeOut;
  useGSAP(() => {
    TweenMax.to("#loading", 4, {
      delay: 2,
      left: "100%",
      ease: Expo.easeInOut,
    });
    t2.to(
      "#hero",

      {
        opacity: 1,
        x: -200,
        delay: 1,
        ease: eases,
        stagger: {
          amount: 0.9,
        },
      }
    );
    gsap.to("#cta", { opacity: 1, y: -50, delay: 1.5 });
    TweenMax.staggerFrom(
      "#media",
      2,
      {
        delay: 5,
        opacity: 0,
        y: 20,
        ease: Power3.easeInOut,
      },
      0.1
    );
    t1.to("#ring", 4, {
      rotation: 360,
      transformOrigin: "center",
      ease: "none",
      duration: 60,

      delay: 2,
      opacity: 1,
      x: 400,
      ease: Expo.easeInOut,
    });
  });
  return (
    <section className="w-full nav-height bg-black relative">
      <div
        id="loading"
        className="absolute w-full h-screen z-20 bg-black"></div>
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          Camera Canon
        </p>
        <img
          id="ring"
          src={heroc}
          alt=""
          className="absolute m-0 p-0 top-1/2 left-3/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-1/5 opacity-70"
        />
      </div>

      {/* <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20">
        <a className="btn">
          <Link to="/explore">Explore</Link>
        </a>
      </div> */}
      <div
        id="media"
        className="absolute top-40
       right-11 z-10">
        <ul className="absolute">
          <li className="py-3 inline-block">
            <ion-icon name="logo-facebook">
              <FaFacebook />
            </ion-icon>
          </li>
          <li className="py-3 inline-block">
            <ion-icon name="logo-instagram">
              <FaInstagram />
            </ion-icon>
          </li>
          <li className="py-3 inline-block">
            <ion-icon name="logo-twitter">
              <FaTwitter />
            </ion-icon>
          </li>
          <li className="py-3 inline-block">
            <ion-icon name="logo-youtube">
              <FaYoutube />
            </ion-icon>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
