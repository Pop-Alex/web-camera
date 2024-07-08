import React, { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Bounds,
  useBounds,
  Html,
} from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
import EarthDayMap from "../assests/8k_earth_daymap.jpg";
import EarthNormalMap from "../assests/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assests/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../assests/8k_earth_clouds.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";

const Earth = () => {
  const ref = useRef();
  const [selected, setSelected] = useState(-1);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setSelected(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  console.log(selected);
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const cloudsRef = useRef();
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    cloudsRef.current.rotation.y = elapsedTime / 300;
  });
  const latLonToCartesian = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return [x, y, z];
  };
  const markers = [
    { lat: 40.7128, lon: -74.006, title: "New York" }, // New York
    { lat: 34.0522, lon: -118.2437, title: "Los Angeles" }, // Los Angeles
    { lat: 51.5074, lon: -0.1278, title: "London" }, // London
    { lat: 47.04, lon: 21.55, title: "Oradea" }, // Oradea
  ];
  const [isOccluded, setOccluded] = useState();
  const [isInRange, setInRange] = useState();
  const isVisible = isInRange && !isOccluded;

  const vec = new THREE.Vector3();
  useFrame((state) => {
    const range =
      state.camera.position.distanceTo(ref.current.getWorldPosition(vec)) <= 15;
    if (range !== isInRange) setInRange(range);
  });

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />

      <mesh>
        <sphereGeometry args={[5, 32, 32]}></sphereGeometry>
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.7}
          roughness={0.9}></meshStandardMaterial>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
        <group ref={ref}>
          {markers.map((marker, index) => {
            const [x, y, z] = latLonToCartesian(marker.lat, marker.lon, 5);
            return (
              <Html
                ref={menuRef}
                key={index}
                position={[x, y, z]}
                onOcclude={setOccluded}
                style={{
                  transition: "all 0.2s",
                  opacity: isVisible ? 1 : 5,
                  transform: `scale(${isVisible ? 1 : 0.25})`,
                }}>
                <FaMapMarkerAlt
                  onClick={() => {
                    setSelected(index);
                  }}
                />
                {/* <svg
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
                      setSelected(index);
                    }}

                  />
                </svg> */}
                {marker.title && index === selected && (
                  <div
                    id={"desc_" + index}
                    className="annotationDescription"
                    dangerouslySetInnerHTML={{ __html: marker.title }}></div>
                )}
              </Html>
            );
          })}
        </group>
      </mesh>

      <mesh ref={cloudsRef}>
        <sphereGeometry args={[5.1, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};

export default Earth;
