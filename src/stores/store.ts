// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import devLog from "../utils/functions/devLog";
import { Fruit } from "../utils/enums";

type State = {
  // Endpoint
  // valuesUrl: string;

  // Modal
  modal: boolean;
  setModal: (isOpen: boolean) => void;

  // Coins
  coins: number;
  updateCoins: (amount: number) => void;

  // Fruits (results)
  fruit0: Fruit | "";
  setFruit0: (fr: Fruit | "") => void;
  fruit1: Fruit | "";
  setFruit1: (fr: Fruit | "") => void;
  fruit2: Fruit | "";
  setFruit2: (fr: Fruit | "") => void;

  // Segments
  // receivedSegments: number[];
  // setReceivedSegments: (segments: number[]) => void;

  // Games
  spins: number;
  addSpin: () => void;
  // wins: number;
  // won: () => void;
  // losses: number;
  // lost: () => void;

  // Sparkles
  // sparkles: boolean;
  // setSparkles: (value: boolean) => void;

  // Time
  startTime: number;
  endTime: number;

  // Phase
  phase: "idle" | "spinning";
  start: () => void;
  end: () => void;

  // First time
  firstTime: boolean;
  setFirstTime: (isFirstTime: boolean) => void;
};

const useGame = create<State>()(
  subscribeWithSelector((set) => ({
    /**
     * Endpoint
     * (different endpoints for running locally and for deployment)
     */
    // valuesUrl: /(localhost)/.test(window.location.href)
    //   ? "http://localhost:4000/values"
    //   : "https://cherry-charm.onrender.com/values",

    /**
     *  Modal
     *  (is the help modal open)
     */
    modal: false,
    setModal: (isOpen: boolean) => {
      set(() => {
        return {
          modal: isOpen,
        };
      });
    },

    /**
     * Coins
     *
     */
    coins: 20,
    updateCoins: (amount: number) => {
      set((state) => {
        return {
          coins: state.coins + amount,
        };
      });
    },

    /**
     * Fruits
     *
     */
    fruit0: "",
    setFruit0: (fr: Fruit | "") => {
      set(() => {
        return {
          fruit0: fr,
        };
      });
    },
    fruit1: "",
    setFruit1: (fr: Fruit | "") => {
      set(() => {
        return {
          fruit1: fr,
        };
      });
    },
    fruit2: "",
    setFruit2: (fr: Fruit | "") => {
      set(() => {
        return {
          fruit2: fr,
        };
      });
    },

    /**
     * Received segments
     *
     */
    // receivedSegments: [-1, -1, -1],
    // setReceivedSegments: (segments: number[]) => {
    //   set(() => {
    //     return {
    //       receivedSegments: segments,
    //     };
    //   });
    // },

    /**
     * Games
     *
     */
    spins: 0,
    addSpin: () => {
      set((state) => {
        return {
          spins: state.spins + 1,
        };
      });
    },
    // wins: 0,
    // won: () => {
    //   set((state) => {
    //     return {
    //       wins: state.wins + 1,
    //     };
    //   });
    // },
    // losses: 0,
    // lost: () => {
    //   set((state) => {
    //     return {
    //       losses: state.losses + 1,
    //     };
    //   });
    // },

    /**
     * Sparkles
     */
    // sparkles: false,
    // setSparkles: (value: boolean) => {
    //   set(() => {
    //     return {
    //       sparkles: value,
    //     };
    //   });
    // },

    /**
     * Time
     */
    startTime: 0,
    endTime: 0,

    /**
     * Phases
     * The phase of the game
     */
    phase: "idle",
    start: () => {
      set((state) => {
        if (state.phase === "idle") {
          return { phase: "spinning", startTime: Date.now() };
        }
        return {};
      });
    },
    end: () => {
      set((state) => {
        if (state.phase === "spinning") {
          const endTime = Date.now();
          const startTime = state.startTime;
          const elapsedTime = endTime - startTime;
          devLog(`Time spinning: ${elapsedTime / 1000} seconds`);
          return { phase: "idle", endTime: endTime };
        }
        return {};
      });
    },

    /**
     * Other
     *
     */
    firstTime: true,
    setFirstTime: (isFirstTime: boolean) => {
      set(() => {
        return {
          firstTime: isFirstTime,
        };
      });
    },
  }))
);

export default useGame;
