import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import Reel from "./Reel";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { WHEEL_SEGMENT } from "./utils/constants";
import { Fruit } from "./utils/enums";

interface CustomGroup extends THREE.Group {
  reelSegment?: number;
  reelPosition?: number;
  reelSpinUntil?: number;
  reelStopSegment?: number;
}

interface SlotMachineProps {
  value: (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7)[];
}

const SlotMachine = forwardRef(({ value }: SlotMachineProps, ref) => {
  const reelRefs = [
    useRef<CustomGroup>(null),
    useRef<CustomGroup>(null),
    useRef<CustomGroup>(null),
  ];

  useEffect(() => {
    const getRandomStopSegment = () => Math.floor(Math.random() * 8); // Generates a random number between 0 and 7

    const spinReel = (reelIndex: number) => {
      const reel = reelRefs[reelIndex].current;
      if (reel) {
        const stopSegment = getRandomStopSegment();
        reel.reelSpinUntil = stopSegment;
      }
    };

    spinReel(0);
    spinReel(1);
    spinReel(2);
  }, []);

  // document.addEventListener("keydown", (e) => {
  //   if (e.code === "Space") {
  //     const getRandomStopSegment = () => Math.floor(Math.random() * 8); // Generates a random number between 0 and 7

  //     const spinReel = (reelIndex: number) => {
  //       const reel = reelRefs[reelIndex].current;
  //       if (reel) {
  //         const stopSegment = getRandomStopSegment();
  //         reel.reelSpinUntil = stopSegment;
  //       }
  //     };

  //     spinReel(0);
  //     spinReel(1);
  //     spinReel(2);
  //   }
  // })

  let segmentToFruit = (reel: number, segment: number) => {
    switch (reel) {
      case 0:
        switch (segment) {
          case 0:
            return Fruit.cherry;

          case 1:
            return Fruit.lemon;

          case 2:
            return Fruit.apple;

          case 3:
            return Fruit.lemon;

          case 4:
            return Fruit.banana;

          case 5:
            return Fruit.banana;

          case 6:
            return Fruit.lemon;

          case 7:
            return Fruit.lemon;
        }
        break;
      case 1:
        switch (segment) {
          case 0:
            return Fruit.lemon;

          case 1:
            return Fruit.apple;

          case 2:
            return Fruit.lemon;

          case 3:
            return Fruit.lemon;

          case 4:
            return Fruit.cherry;

          case 5:
            return Fruit.apple;

          case 6:
            return Fruit.banana;

          case 7:
            return Fruit.lemon;
        }
        break;
      case 2:
        switch (segment) {
          case 0:
            return Fruit.lemon;

          case 1:
            return Fruit.apple;

          case 2:
            return Fruit.lemon;

          case 3:
            return Fruit.apple;

          case 4:
            return Fruit.cherry;

          case 5:
            return Fruit.lemon;

          case 6:
            return Fruit.banana;

          case 7:
            return Fruit.lemon;
        }
        break;
    }
  };

  useFrame(() => {
    for (let i = 0; i < reelRefs.length; i++) {
      const reel = reelRefs[i].current;
      if (reel) {
        if (reel.reelSpinUntil !== undefined) {
          if (reel.reelSegment === undefined) {
            reel.reelSegment = 0;
          }

          const targetRotationX =
            (reel.reelSpinUntil - reel.reelSegment) * WHEEL_SEGMENT;
          const rotationSpeed = 0.1;

          if (reel.rotation.x < targetRotationX) {
            reel.rotation.x += rotationSpeed;
            reel.reelSegment = Math.floor(reel.rotation.x / WHEEL_SEGMENT);
          } else if (reel.rotation.x >= targetRotationX) {
            // The reel stopped spinning at the desired segment
            
            let fruit = segmentToFruit(i, reel.reelSegment )

            console.log(`Reel ${i + 1} stopped at segment ${reel.reelSegment} ${fruit}`);
            reel.reelSpinUntil = undefined; // Reset reelSpinUntil to stop further logging
          }
        }
      }
    }
  });

  useImperativeHandle(ref, () => ({
    reelRefs,
  }));

  return (
    <>
      <Reel
        ref={reelRefs[0]}
        value={value[0]}
        position={[-7, 0, 0]}
        rotation={[0, 0, 0]}
        scale={[10, 10, 10]}
        reelSegment={0}
        // reelPosition={0}
        // reelSpinUntil={0}
        // reelStopSegment={0}
      />
      <Reel
        ref={reelRefs[1]}
        value={value[1]}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        scale={[10, 10, 10]}
        reelSegment={0}
        reelPosition={0}
        reelSpinUntil={0}
        reelStopSegment={0}
      />
      <Reel
        ref={reelRefs[2]}
        value={value[2]}
        position={[7, 0, 0]}
        rotation={[0, 0, 0]}
        scale={[10, 10, 10]}
        reelSegment={0}
        reelPosition={0}
        reelSpinUntil={0}
        reelStopSegment={0}
      />
    </>
  );
});

export default SlotMachine;
