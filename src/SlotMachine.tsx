// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import useGame from "./stores/store";
import devLog from "./utils/functions/devLog";
import segmentToFruit from "./utils/functions/segmentToFruit";
import endgame from "./utils/functions/endgame";
import { WHEEL_SEGMENT } from "./utils/constants";
import Reel from "./Reel";
import Button from "./Button";
// import Casing from "./Casing";
// import Bars from "./Bars";

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
  // const setSparkles = useGame((state) => state.setSparkles);
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
      // const winnings = endgame(fruit0, fruit1, fruit2);
      updateCoins(endgame(fruit0, fruit1, fruit2));

      // setSparkles(true);
      // setTimeout(() => {
      //   setSparkles(false);
      // }, 1000);
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

  const [buttonZ, setButtonZ] = useState(0);
  const [buttonY, setButtonY] = useState(-13);

  const [textZ, setTextZ] = useState(1.6);
  const [textY, setTextY] = useState(-14);

  return (
    <>
      {/* <Casing
        scale={[25, 25, 25]}
        position={[0, -12, 13.8]}
        rotation={[0.2,  Math.PI, 0]}
      /> */}
      {/* <Bars /> */}
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
          if (phase !== "spinning") {
            if (coins > 0) {
              spinSlotMachine();
              addSpin();
              updateCoins(-1);
            }
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
      <Text
        color="white"
        anchorX="center"
        anchorY="middle"
        position={[0, textY, textZ]}
        rotation={[-Math.PI / 8, 0, 0]}
        fontSize={3}
        font="./fonts/nickname.otf"
        onPointerDown={() => {
          setTextZ(1.3);
          setTextY(-14.1);
        }}
        onPointerUp={() => {
          setTextZ(1.6);
          setTextY(-14);
        }}
      >
        {phase === "idle" ? "SPIN" : "SPINNING"}
      </Text>
    </>
  );
});

export default SlotMachine;
