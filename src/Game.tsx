import { useEffect, useRef } from "react";
// import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
// import useGame from "./stores/useGame";
import Lights from "./lights/Lights";
import SlotMachine from "./SlotMachine";

const Game = () => {
  const slotMachineRef = useRef();

  useEffect(() => {
    // if (slotMachineRef.current) {
    console.log(slotMachineRef.current);
    // }
  }, [slotMachineRef]);

  return (
    <>
      <color args={["#121215"]} attach="background" />
      <Perf position="bottom-left" />
      <OrbitControls />
      <Lights />
      <SlotMachine ref={slotMachineRef} value={[1, 2, 3]} />
    </>
  );
};

export default Game;
