/*
 *  Copyright (c) Michael Kolesidis <michael.kolesidis@gmail.com>
 *  GNU Affero General Public License v3.0
 *
 *  ATTENTION! FREE SOFTWARE
 *  This website is free software (free as in freedom).
 *  If you use any part of this code, you must make your entire project's source code
 *  publicly available under the same license. This applies whether you modify the code
 *  or use it as it is in your own project. This ensures that all modifications and
 *  derivative works remain free software, so that everyone can benefit.
 *  If you are not willing to comply with these terms, you must refrain from using any part of this code.
 *
 *  For full license terms and conditions, you can read the AGPL-3.0 here:
 *  https://www.gnu.org/licenses/agpl-3.0.html
 */

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
      <color args={['#141417']} attach="background" />
      {/* <Perf position="top-right" /> */}
      <OrbitControls />
      <Lights />
      {showBars && <Bars />}
      <SlotMachine ref={slotMachineRef} value={[1, 2, 3]} />
    </>
  );
};

export default Game;
