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
  reelPosition?: number;
  reelSpinUntil?: number;
  reelStopSegment?: number;
};

const Reel = forwardRef(
  (props: ReelProps, ref: ForwardedRef<THREE.Group>): JSX.Element => {
    const { nodes, materials } = useGLTF("/models/reel.glb") as GLTFResult;

    const { reelSegment, reelPosition, reelSpinUntil, reelStopSegment } = props;

    const reel = useRef<THREE.Group>(null);

    const colorMap = useLoader(THREE.TextureLoader, "/images/reel.png");

    useFrame(() => {
      if (reel.current) reel.current.rotation.x += 0.025;
    });

    return (
      <group {...props} ref={ref} dispose={null}>
        <group
          rotation={[reelSegment * WHEEL_SEGMENT - 0.2, 0, -Math.PI / 2]}
          scale={[1, 0.29, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            // material={materials["Material.001"]}
          >
            <meshStandardMaterial map={colorMap} />
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
