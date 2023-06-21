import * as THREE from "three";

const squareGeometry = new THREE.BoxGeometry();
const barMaterial = new THREE.MeshStandardMaterial({ color: "#2A1558" });

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
