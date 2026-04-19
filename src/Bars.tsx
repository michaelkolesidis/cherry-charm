import * as THREE from 'three';

const squareGeometry = new THREE.CapsuleGeometry(0.4, 21, 4, 8);
const barMaterial = new THREE.MeshStandardMaterial({ color: '#3b0873' });

const Bars = () => {
  return (
    <>
      <mesh
        position={[0, 3.7, 10.5]}
        rotation={[0, 0, Math.PI / 2]}
        geometry={squareGeometry}
        material={barMaterial}
      />
      <mesh
        position={[0, -3.7, 10.5]}
        rotation={[0, 0, Math.PI / 2]}
        geometry={squareGeometry}
        material={barMaterial}
      />
    </>
  );
};

export default Bars;
