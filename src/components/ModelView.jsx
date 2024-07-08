import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import React, { Suspense, useRef, useState } from "react";
import Lights from "./Lights";
import CameraModel from "./CameraModel";
import CameraModel2 from "./CameraModel2";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import {
  EffectComposer,
  Selection,
  Outline,
  N8AO,
  TiltShift2,
  ToneMapping,
} from "@react-three/postprocessing";
const annotations = [
  {
    title: "Bathroom Sink",
    description: "<p>Lentila</p>",

    lookAt: {
      x: 0.37,
      y: 0.27,
      z: 0.36,
    },
  },
  {
    title: "Bath",
    description: "<p>Partea superioara</p>",

    lookAt: {
      x: 0.32,
      y: 0.71,
      z: 0.33,
    },
  },
];

function Annotations({ controls }) {
  const { camera } = useThree();
  const [selected, setSelected] = useState(-1);
  const [open, setOpen] = useState(false);

  useFrame(() => {
    gsap.ticker.tick();
  });
  return (
    <>
      {annotations.map((a, i) => {
        return (
          <>
            <Html
              zIndexRange={[1, 0]}
              key={i}
              position={[a.lookAt.x, a.lookAt.y, a.lookAt.z]}>
              <svg
                className="annotation"
                height="44"
                width="64"
                transform="translate(-16 -16)">
                <circle
                  cx="17"
                  cy="17"
                  r="16"
                  stroke="white"
                  strokeWidth="2"
                  fill="rgba(0,0,0,.66)"
                  onPointerDown={() => {
                    setSelected(i);

                    /* gsap.to(controls.current, {
                      duration: 1,
                      x: a.lookAt.x,
                      y: a.lookAt.y,
                      z: a.lookAt.z,
                      ease: "cubic.out",
                    }); */

                    /* gsap.to(camera.position, {
                      duration: 1,
                      x: a.camPos.x,
                      y: a.camPos.y,
                      z: a.camPos.z,
                      ease: "cubic.out",
                    }); */
                  }}
                />

                <text
                  x="12"
                  y="21"
                  fill="white"
                  fontSize={17}
                  fontFamily="monospace"
                  style={{ pointerEvents: "none" }}>
                  {a.title}
                </text>
              </svg>
              {a.description && i === selected && (
                <div
                  id={"desc_" + i}
                  className="annotationDescription"
                  dangerouslySetInnerHTML={{ __html: a.description }}></div>
              )}
            </Html>
          </>
        );
      })}
    </>
  );
}

function Effects() {
  return (
    <EffectComposer autoClear={false}>
      <Outline edgeStrength={10} />
    </EffectComposer>
  );
}

const ModelView = ({
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  const ref = useRef();
  return (
    <View id={gsapType} className=" w-full h-full">
      <ambientLight intensity={0.4} />
      {/* <Annotations controls={ref} /> */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      {/* <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={2048}
        castShadow
      /> */}

      <Lights />
      {/* <Environment preset="city" /> */}
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.75}
        scale={10}
        blur={3}
        far={4}
      />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group ref={groupRef} position={[0, 0, 0]}>
        {/*  <CameraModel scale={[15, 15, 15]} /> */}
        <Selection>
          <Effects />
          <Suspense>
            <CameraModel2 item={item} />
          </Suspense>
        </Selection>
      </group>
    </View>
  );
};

export default ModelView;
