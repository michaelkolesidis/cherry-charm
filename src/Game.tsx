import { useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
// import { Perf } from "r3f-perf";
import Lights from './lights/Lights';
import SlotMachine from './SlotMachine';
import Bars from './Bars';
import useGame from './stores/store';

const Game = () => {
  const { showBars } = useGame((state) => state);

  const slotMachineRef = useRef<THREE.Group | null>(null);

  return (
    <>
      {/* <color args={['#141417']} attach="background" /> */}
      {/* <Perf position="top-right" /> */}
      <OrbitControls />
      <Lights />
      {showBars && <Bars />}
      <SlotMachine ref={slotMachineRef} value={[1, 2, 3]} />
    </>
  );
};

export default Game;
