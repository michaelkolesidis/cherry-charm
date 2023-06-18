import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, OrthographicCamera } from "@react-three/drei";
// import useGame from "./stores/useGame";
// import checkFirstTimeVisit from "./utils/functions/checkFirstTimeVisit";
import Interface from "./interface/Interface";
import Game from "./Game";

const App = () => {
  return (
    <>
      <Canvas camera={{ fov: 75, position: [0, 5, 25] }}>
        <Interface />
        <Game />
      </Canvas>
    </>
  );
};

export default App;
