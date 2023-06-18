import { useEffect, useRef } from "react";
// import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import useGame from "./stores/store";
import endgame from "./utils/functions/endgame";
import Lights from "./lights/Lights";
import SlotMachine from "./SlotMachine";

const Game = () => {
  const fruit0 = useGame((state) => state.fruit0);
  const fruit1 = useGame((state) => state.fruit1);
  const fruit2 = useGame((state) => state.fruit2);
  const slotMachineRef = useRef();

  useEffect(() => {
    endgame(fruit0, fruit1, fruit2);
  }, [fruit0, fruit1, fruit2]);

  useEffect(() => {
    // if (slotMachineRef.current) {
    // console.log(slotMachineRef.current);
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
