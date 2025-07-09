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

import {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useGame from './stores/store';
import devLog from './utils/functions/devLog';
import segmentToFruit from './utils/functions/segmentToFruit';
import calculateWin from './utils/functions/calculateWin';
import { WHEEL_SEGMENT } from './utils/constants';
import Reel from './Reel';
import Button from './Button';

interface ReelGroup extends THREE.Group {
  reelSegment?: number;
  reelSpinUntil?: number;
  reelStopSegment?: number;
  isSnapping?: boolean;
  targetRotationX?: number;
}

interface SlotMachineProps {
  value: (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7)[];
}

const SlotMachine = forwardRef(({ value }: SlotMachineProps, ref) => {
  const {
    fruit0,
    fruit1,
    fruit2,
    setFruit0,
    setFruit1,
    setFruit2,
    setWin,
    phase,
    start,
    end,
    addSpin,
    bet,
    coins,
    updateCoins,
  } = useGame((state) => state);

  const reelRefs = [
    useRef<ReelGroup>(null),
    useRef<ReelGroup>(null),
    useRef<ReelGroup>(null),
  ];

  const [, setStoppedReels] = useState(0);

  useEffect(() => {
    devLog('PHASE: ' + phase);
    if (phase === 'idle') {
      const coinsWon = calculateWin(fruit0, fruit1, fruit2) * bet;
      setWin(coinsWon);
      updateCoins(coinsWon);
    }
  }, [phase]);

  const spinSlotMachine = () => {
    setWin(0);
    start();
    setStoppedReels(0);

    const min = 10;
    const max = 35;
    const getRandomStopSegment = () =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    setFruit0('');
    setFruit1('');
    setFruit2('');

    for (let i = 0; i < 3; i++) {
      const reel = reelRefs[i].current;
      if (reel) {
        reel.rotation.x = 0;
        reel.reelSegment = 0;
        const stopSegment = getRandomStopSegment();
        reel.reelSpinUntil = stopSegment;
        reel.targetRotationX = stopSegment * WHEEL_SEGMENT;
        reel.isSnapping = false;
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space' && phase !== 'spinning' && coins > 0) {
        spinSlotMachine();
        addSpin();
        updateCoins(-bet);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [phase, coins]);

  useFrame(() => {
    for (let i = 0; i < reelRefs.length; i++) {
      const reel = reelRefs[i].current;
      if (
        !reel ||
        reel.reelSpinUntil === undefined ||
        reel.targetRotationX === undefined
      )
        continue;

      const rotationSpeed = 0.1;

      if (!reel.isSnapping) {
        if (reel.rotation.x < reel.targetRotationX - rotationSpeed) {
          reel.rotation.x += rotationSpeed;
          reel.reelSegment = Math.floor(reel.rotation.x / WHEEL_SEGMENT);
        } else {
          reel.isSnapping = true;
        }
      }

      if (reel.isSnapping) {
        reel.rotation.x = THREE.MathUtils.lerp(
          reel.rotation.x,
          reel.targetRotationX,
          0.2
        );

        if (Math.abs(reel.rotation.x - reel.targetRotationX) < 0.01) {
          reel.rotation.x = reel.targetRotationX;

          const fruit = segmentToFruit(i, reel.reelSpinUntil);
          if (fruit) {
            if (i === 0) setFruit0(fruit);
            if (i === 1) setFruit1(fruit);
            if (i === 2) setFruit2(fruit);
          }

          devLog(
            `Reel ${i + 1} stopped at segment ${reel.reelSpinUntil} (${fruit})`
          );

          reel.reelSpinUntil = undefined;
          reel.isSnapping = false;

          setStoppedReels((prev) => {
            const newStopped = prev + 1;
            if (newStopped === 3) {
              setTimeout(() => {
                end();
              }, 1000);
            }
            return newStopped;
          });
        }
      }
    }
  });

  useImperativeHandle(ref, () => ({
    reelRefs,
  }));

  const [buttonZ, setButtonZ] = useState(0);
  const [buttonY, setButtonY] = useState(-13);

  return (
    <>
      <Reel
        ref={reelRefs[0]}
        value={value[0]}
        map={0}
        position={[-7, 0, 0]}
        rotation={[0, 0, 0]}
        scale={[10, 10, 10]}
        reelSegment={0}
      />
      <Reel
        ref={reelRefs[1]}
        value={value[1]}
        map={1}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        scale={[10, 10, 10]}
        reelSegment={0}
      />
      <Reel
        ref={reelRefs[2]}
        value={value[2]}
        map={2}
        position={[7, 0, 0]}
        rotation={[0, 0, 0]}
        scale={[10, 10, 10]}
        reelSegment={0}
      />
      <Button
        scale={[0.055, 0.045, 0.045]}
        position={[0, buttonY, buttonZ]}
        rotation={[-Math.PI / 8, 0, 0]}
        onClick={() => {
          if (phase !== 'spinning' && coins > 0) {
            spinSlotMachine();
            addSpin();
            updateCoins(-bet);
          }
        }}
        onPointerDown={() => {
          setButtonZ(-1);
          setButtonY(-13.5);
        }}
        onPointerUp={() => {
          setButtonZ(0);
          setButtonY(-13);
        }}
      />
    </>
  );
});

export default SlotMachine;
