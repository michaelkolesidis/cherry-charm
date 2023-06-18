export default function Lights() {
  return (
    <>
      <directionalLight
        // castShadow
        position={[-1, 3, 2]}
        intensity={1.5}
      />
      <ambientLight intensity={0.5} />
    </>
  );
}
