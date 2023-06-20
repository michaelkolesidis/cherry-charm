// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { useEffect, useRef } from "react";
// import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { Perf } from "r3f-perf";
import useGame from "./stores/store";
// import devLog from "./utils/functions/devLog";
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

  return (
    <>
      <color args={["#121215"]} attach="background" />
      {/* <Perf position="bottom-left" /> */}
      <OrbitControls />
      <Lights />
      <SlotMachine ref={slotMachineRef} value={[1, 2, 3]} />
    </>
  );
};

export default Game;
