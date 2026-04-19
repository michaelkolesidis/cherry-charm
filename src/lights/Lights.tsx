export default function Lights() {
  return (
    <>
      <directionalLight position={[-2, 3, 2]} intensity={2} />
      <directionalLight position={[2, 3, 2]} intensity={2} />
      <ambientLight intensity={3} />
    </>
  );
}
