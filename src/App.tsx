import { Canvas } from '@react-three/fiber';
import Interface from './interface/Interface';
import Game from './Game';
import useGame from './stores/store';

const App = () => {
  const { isMobile } = useGame((state) => state);

  return (
    <>
      <Interface />
      <Canvas
        camera={{ fov: 75, position: [0, 0, isMobile ? 40 : 30] }}
        gl={{ alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Game />
      </Canvas>
    </>
  );
};

export default App;
