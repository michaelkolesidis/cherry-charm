// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { Canvas } from "@react-three/fiber";
// import { KeyboardControls, OrthographicCamera } from "@react-three/drei";
// import useGame from "./stores/useGame";
// import checkFirstTimeVisit from "./utils/functions/checkFirstTimeVisit";
import Interface from "./interface/Interface";
import Game from "./Game";

const App = () => {
  return (
    <>
      <Interface />
      <Canvas camera={{ fov: 75, position: [0, 0, 30] }}>
        <Game />
      </Canvas>
    </>
  );
};

export default App;
