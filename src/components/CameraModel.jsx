import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF(
    "/models/nikon_z6_with_nikkor_24-70_f4.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, -0.77, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Z6_RC_LOD0_u0_v0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Z6_RC_LOD0_u0_v0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Z6_RC_LOD0_u0_v0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Z6_RC_LOD0_u0_v0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Z6_RC_LOD0_u0_v0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Z6_RC_LOD0_u0_v0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Z6_RC_LOD0_u0_v0}
        />
      </group>
    </group>
  );
}
export default Model;
useGLTF.preload("/models/nikon_z6_with_nikkor_24-70_f4.glb");
