export default function Lights() {
  return (
    <>
      <directionalLight
        // castShadow
        position={[-2, 3, 2]}
        intensity={1}
      />
      <directionalLight
        // castShadow
        position={[2, 3, 2]}
        intensity={1}
      />
      <ambientLight intensity={0.5} />
    </>
  );
}
