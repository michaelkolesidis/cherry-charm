// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Interface from "./interface/Interface";
import Game from "./Game";

const App = () => {
  const [windowWidth] = useState(window.innerWidth);
  const cameraPositionZ = windowWidth > 500 ? 30 : 40;

  return (
    <>
      <Interface />
      <Canvas camera={{ fov: 75, position: [0, 0, cameraPositionZ] }}>
        <Game />
      </Canvas>
    </>
  );
};

export default App;
