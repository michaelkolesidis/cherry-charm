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

import * as React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Text } from '@react-three/drei';
import useGame from './stores/store';

type GLTFResult = GLTF & {
  nodes: {
    Cube_Subscribe_0: THREE.Mesh;
  };
};

const Button = (props: React.JSX.IntrinsicElements['group']) => {
  const { phase } = useGame((state) => state);

  const gltf = useGLTF('/models/button.glb') as unknown as GLTFResult;
  const { nodes } = gltf;

  const material = new THREE.MeshStandardMaterial({ color: '#3b0873' });

  return (
    <group
      {...props}
      dispose={null}
      onPointerOver={() => {
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'default';
      }}
    >
      <group
        position={[713.17, 1157.193, -723.814]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[130.456, 19.364, 45.456]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Subscribe_0.geometry}
          material={material}
          position={[-5.454, -37.484, -26.142]}
        ></mesh>
      </group>
      <Text
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[0, -36, 22]}
        fontSize={65}
        scale={[0.8, 1, 1]}
        font="./fonts/nickname.otf"
      >
        {phase === 'idle' ? 'SPIN' : 'SPINNING'}
      </Text>
    </group>
  );
};

useGLTF.preload('/models/button.glb');
export default Button;
