import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import ModelView from "./ModelView";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { yellowImg } from "../utils";
import { models } from "../constants";
const Model = () => {
  const cameraControl = useRef();
  const small = useRef(new THREE.Group());
  const [smallRotation, setSmallRotation] = useState(0);
  const [model, setModel] = useState({
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });
  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <section className="common-padding" id="demo">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>
        <div className="flex flex-col items-center mt-5 ">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative   ">
            <ModelView
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControl}
              setRotationState={setSmallRotation}
              item={model}
            />
            <Canvas
              className="w-full h-full "
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}>
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
