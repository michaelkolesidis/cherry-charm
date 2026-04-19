import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    ['Node-Mesh']: THREE.Mesh;
    ['Node-Mesh_1']: THREE.Mesh;
  };
  materials: {
    mat16: THREE.MeshStandardMaterial;
    mat23: THREE.MeshStandardMaterial;
  };
};

const Casing = (props: React.JSX.IntrinsicElements['group']) => {
  const gltf = useGLTF('models/casing.glb') as unknown as GLTFResult;
  const { nodes, materials } = gltf;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh'].geometry}
        material={materials.mat16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_1'].geometry}
        material={materials.mat23}
      />
    </group>
  );
};

useGLTF.preload('models/casing.glb');
export default Casing;
