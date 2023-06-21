// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useGame from "./stores/store";
import devLog from "./utils/functions/devLog";
import segmentToFruit from "./utils/functions/segmentToFruit";
import endgame from "./utils/functions/endgame";
import { WHEEL_SEGMENT } from "./utils/constants";
import Reel from "./Reel";

interface ReelGroup extends THREE.Group {
  reelSegment?: number;
  reelPosition?: number;
  reelSpinUntil?: number;
  reelStopSegment?: number;
}

interface SlotMachineProps {
  value: (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7)[];
}

const SlotMachine = forwardRef(({ value }: SlotMachineProps, ref) => {
  // const valuesUrl = useGame((state) => state.valuesUrl);
  const fruit0 = useGame((state) => state.fruit0);
  const fruit1 = useGame((state) => state.fruit1);
  const fruit2 = useGame((state) => state.fruit2);
  const setFruit0 = useGame((state) => state.setFruit0);
  const setFruit1 = useGame((state) => state.setFruit1);
  const setFruit2 = useGame((state) => state.setFruit2);
  // const receivedSegments = useGame((state) => state.receivedSegments);
  // const setReceivedSegments = useGame((state) => state.setReceivedSegments);
  const phase = useGame((state) => state.phase);
  const start = useGame((state) => state.start);
  const end = useGame((state) => state.end);
  const addSpin = useGame((state) => state.addSpin);
  const coins = useGame((state) => state.coins);
  const updateCoins = useGame((state) => state.updateCoins);

  // const fetchSegmentValues = async () => {
  //   try {
  //     const requestOptions = {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     };
  //     const response = await fetch(valuesUrl, requestOptions);
  //     if (response.ok) {
  //       const data = await response.json();

  //       setReceivedSegments(data);
  //       console.log(data[0]);
  //     } else {
  //       console.error("Failed to fetch scratch card: ", response.status);
  //     }
  //   } catch (error) {
  //     console.error("Error while fetching scratch card: ", error);
  //   }
  // };

  useEffect(() => {
    devLog("PHASE: " + phase);

    if (phase === "idle") {
      updateCoins(endgame(fruit0, fruit1, fruit2));
    }
  }, [phase]);

  const reelRefs = [
    useRef<ReelGroup>(null),
    useRef<ReelGroup>(null),
    useRef<ReelGroup>(null),
  ];

  const spinSlotMachine = () => {
    start();
    const min = 15;
    const max = 30;
    const getRandomStopSegment = () =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const spinReel = (reelIndex: number) => {
      const reel = reelRefs[reelIndex].current;
      if (reel) {
        // Reset rotation
        reel.rotation.x = 0;
        // Reset all attributes
        reel.reelSegment = 0;
        reel.reelPosition = 0;
        reel.reelSpinUntil = 0;
        reel.reelStopSegment = 0;
        // Clear fruits from previous spins
        setFruit0("");
        setFruit1("");
        setFruit2("");
        const stopSegment = getRandomStopSegment();
        devLog(`Stop segment of reel ${reelIndex}: ${stopSegment}`);

        reel.reelSpinUntil = stopSegment;
      }
    };

    spinReel(0);
    spinReel(1);
    spinReel(2);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        if (phase !== "spinning") {
          if (coins > 0) {
            // fetchSegmentValues();
            spinSlotMachine();
            addSpin();
            updateCoins(-1);
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [phase]);

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
            // The reel has stopped spinning at the desired segment
            setTimeout(() => {
              end();
            }, 1000);
            const fruit = segmentToFruit(i, reel.reelSegment);

            if (fruit) {
              switch (i) {
                case 0:
                  setFruit0(fruit);
                  break;
                case 1:
                  setFruit1(fruit);
                  break;
                case 2:
                  setFruit2(fruit);
                  break;
              }
            }

            devLog(
              `Reel ${i + 1} stopped at segment ${reel.reelSegment} ${fruit}`
            );
            reel.reelSpinUntil = undefined; // Reset reelSpinUntil to stop further logging
          }
        }
      }
    }
  });

  useImperativeHandle(ref, () => ({
    reelRefs,
  }));

  // useImperativeHandle(ref, () => ({
  //   reelRefs: reelRefs.map((ref) => ref.current),
  // }));

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
    </>
  );
});

export default SlotMachine;
