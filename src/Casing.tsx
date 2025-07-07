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
  const gltf = useGLTF('/models/casing.glb') as unknown as GLTFResult;
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

useGLTF.preload('/models/casing.glb');
export default Casing;
