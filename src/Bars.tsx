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

import * as THREE from 'three';

const squareGeometry = new THREE.BoxGeometry();
const barMaterial = new THREE.MeshStandardMaterial({ color: '#2A1558' });

const Bars = () => {
  return (
    <>
      <mesh
        position={[0, 3.5, 10.5]}
        scale={[22.5, 0.5, 0.5]}
        geometry={squareGeometry}
        material={barMaterial}
      />
      <mesh
        position={[0, -3.75, 10.5]}
        scale={[22.5, 0.5, 0.5]}
        geometry={squareGeometry}
        material={barMaterial}
      />
      <mesh
        position={[-11, 0, 10.5]}
        rotation-z={Math.PI / 2}
        scale={[7, 0.5, 0.5]}
        geometry={squareGeometry}
        material={barMaterial}
      />
      <mesh
        position={[11, 0, 10.5]}
        rotation-z={Math.PI / 2}
        scale={[7, 0.5, 0.5]}
        geometry={squareGeometry}
        material={barMaterial}
      />
    </>
  );
};

export default Bars;
