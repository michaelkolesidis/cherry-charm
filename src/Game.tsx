// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
// import { Perf } from "r3f-perf";
import Lights from "./lights/Lights";
import SlotMachine from "./SlotMachine";

const Game = () => {
  const slotMachineRef = useRef();

  return (
    <>
      <color args={["#141417"]} attach="background" />
      {/* <Perf position="top-right" /> */}
      <OrbitControls />
      <Lights />
      <SlotMachine ref={slotMachineRef} value={[1, 2, 3]} />
    </>
  );
};

export default Game;
