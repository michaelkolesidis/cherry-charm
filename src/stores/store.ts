import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
// import { lsGet, lsSet } from "./utils"
import { Fruit } from "../utils/enums";

type State = {
  // Coins
  coins: number;
  setCoins: (amount: number) => void;
  // Fruits (results)
  fruit0: string;
  setFruit0: (fr: string) => void;
  fruit1: string;
  setFruit1: (fr: string) => void;
  fruit2: string;
  setFruit2: (fr: string) => void;
  // Games
  spins: number;
  addSpin: () => void;
  wins: number;
  won: () => void;
  losses: number;
  lost: () => void;
  // Time
  startTime: number;
  endTime: number;
  // Phase
  phase: string;
  start: () => void;
  end: () => void;
  // First time
  firstTime: boolean;
  setFirstTime: (isFirstTime: boolean) => void;
};

const useGame = create<State>()(
  subscribeWithSelector((set) => ({
    /**
     * Coins
     *
     */
    coins: 20,
    setCoins: (amount: number) => {
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
    setFruit0: (fr: string) => {
      set(() => {
        return {
          fruit0: fr,
        };
      });
    },
    fruit1: "",
    setFruit1: (fr: string) => {
      set(() => {
        return {
          fruit1: fr,
        };
      });
    },
    fruit2: "",
    setFruit2: (fr: string) => {
      set(() => {
        return {
          fruit2: fr,
        };
      });
    },

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
    wins: 0,
    won: () => {
      set((state) => {
        return {
          wins: state.wins + 1,
        };
      });
    },
    losses: 0,
    lost: () => {
      set((state) => {
        return {
          losses: state.losses + 1,
        };
      });
    },

    /**
     * Time
     */
    startTime: 0,
    endTime: 0,

    /**
     * Phases
     * The phase of the game
     */
    phase: "ready",
    start: () => {
      set((state) => {
        if (state.phase === "ready") {
          return { phase: "playing", startTime: Date.now() };
        }
        return {};
      });
    },
    end: () => {
      set((state) => {
        if (state.phase === "playing") {
          const endTime = Date.now();
          const startTime = state.startTime;
          const elapsedTime = endTime - startTime;
          console.log(elapsedTime);
          return { phase: "ended", endTime: endTime };
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
