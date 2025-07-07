/*
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

import React from 'react';
import { useRef, forwardRef, ForwardedRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { GLTF } from 'three-stdlib';
// import useGame from "./stores/store";
import { WHEEL_SEGMENT } from './utils/constants';

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
  };
};

type ReelProps = React.JSX.IntrinsicElements['group'] & {
  value?: number;
  reelSegment: number;
  map: number;
};

const Reel = forwardRef(
  (props: ReelProps, ref: ForwardedRef<THREE.Group>): React.JSX.Element => {
    // const sparkles = useGame((state) => state.sparkles);

    const { reelSegment } = props;

    const gltf = useGLTF('/models/reel.glb') as unknown as GLTFResult;
    const { nodes, materials } = gltf;

    const reel = useRef<THREE.Group>(null);

    // Color maps
    const colorMap0 = useLoader(THREE.TextureLoader, '/images/reel_0.png');
    const colorMap1 = useLoader(THREE.TextureLoader, '/images/reel_1.png');
    const colorMap2 = useLoader(THREE.TextureLoader, '/images/reel_2.png');
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
            {/* {sparkles && (
              <Sparkles count={200} scale={2.5} size={10} speed={4} />
            )} */}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={materials['Material.002']}
          />
        </group>
      </group>
    );
  }
);

useGLTF.preload('/models/reel.glb');
export default Reel;
