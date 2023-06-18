import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
// import { lsGet, lsSet } from "./utils"

type State = {
  // Coins
  coins: number;
  setCoins: (amount: number) => void;
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
