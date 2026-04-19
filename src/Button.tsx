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

  const gltf = useGLTF('models/button.glb') as unknown as GLTFResult;
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
        position={[0, -33, 22]}
        fontSize={55}
        scale={[0.8, 1, 1]}
        font="./fonts/Nunito-Black.ttf"
      >
        {phase === 'idle' ? 'SPIN' : 'SPINNING'}
      </Text>
    </group>
  );
};

useGLTF.preload('models/button.glb');
export default Button;
