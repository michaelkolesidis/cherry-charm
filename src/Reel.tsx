import { useRef, forwardRef, ForwardedRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { WHEEL_SEGMENT } from "./utils/constants";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

type ReelProps = JSX.IntrinsicElements["group"] & {
  value?: number;
  reelSegment: number;
  map: number;
};

const Reel = forwardRef(
  (props: ReelProps, ref: ForwardedRef<THREE.Group>): JSX.Element => {
    const {
      reelSegment,
    } = props;
    const { nodes, materials } = useGLTF("/models/reel.glb") as GLTFResult;
    const reel = useRef<THREE.Group>(null);

    // Color maps
    const colorMap0 = useLoader(THREE.TextureLoader, "/images/reel_0.png");
    const colorMap1 = useLoader(THREE.TextureLoader, "/images/reel_1.png");
    const colorMap2 = useLoader(THREE.TextureLoader, "/images/reel_2.png");
    let activeColorMap;
    switch (props.map) {
      case 0:
        activeColorMap = colorMap0;
        break;
      case 1:
        activeColorMap = colorMap1;
        break;
      case 2:
        activeColorMap = colorMap2;
        break;
    }

    useFrame(() => {
      if (reel.current) reel.current.rotation.x += 0.025;
    });

    return (
      <group {...props} ref={ref} dispose={null}>
        <group
          rotation={[reelSegment * WHEEL_SEGMENT - 0.2, 0, -Math.PI / 2]}
          scale={[1, 0.29, 1]}
        >
          <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry}>
            <meshStandardMaterial map={activeColorMap} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials["Material.002"]}
          />
        </group>
      </group>
    );
  }
);

useGLTF.preload("/models/reel.glb");
export default Reel;
