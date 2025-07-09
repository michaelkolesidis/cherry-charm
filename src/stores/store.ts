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

import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import devLog from '../utils/functions/devLog';
import { Fruit } from '../utils/enums';

type State = {
  // Endpoint
  // valuesUrl: string;

  // Mobile
  isMobile: boolean;
  setIsMobile: (value: boolean) => void;

  // Modal
  modal: boolean;
  setModal: (isOpen: boolean) => void;

  // Coins
  coins: number;
  updateCoins: (amount: number) => void;

  // Fruits (results)
  fruit0: Fruit | '';
  setFruit0: (fr: Fruit | '') => void;
  fruit1: Fruit | '';
  setFruit1: (fr: Fruit | '') => void;
  fruit2: Fruit | '';
  setFruit2: (fr: Fruit | '') => void;

  // Bars
  showBars: boolean;
  toggleBars: () => void;

  // Segments
  // receivedSegments: number[];
  // setReceivedSegments: (segments: number[]) => void;

  // Bet
  bet: number;
  updateBet: (amount: number) => void;

  // Win
  win: number;
  setWin: (amount: number) => void;

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
  phase: 'idle' | 'spinning';
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
     * Mobile
     */
    isMobile: window.innerWidth < 768,
    setIsMobile: (value: boolean) => set(() => ({ isMobile: value })),

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
    coins: 100,
    updateCoins: (amount: number) => {
      set((state) => {
        const newCoins = state.coins + amount;
        return {
          coins: newCoins,
          bet: state.bet > newCoins ? newCoins : state.bet,
        };
      });
    },

    /**
     * Fruits
     *
     */
    fruit0: '',
    setFruit0: (fr: Fruit | '') => {
      set(() => {
        return {
          fruit0: fr,
        };
      });
    },
    fruit1: '',
    setFruit1: (fr: Fruit | '') => {
      set(() => {
        return {
          fruit1: fr,
        };
      });
    },
    fruit2: '',
    setFruit2: (fr: Fruit | '') => {
      set(() => {
        return {
          fruit2: fr,
        };
      });
    },

    /**
     * Bars
     */
    showBars: false,
    toggleBars: () => {
      set((state) => ({ showBars: !state.showBars }));
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
     * Bet
     */
    bet: 1,
    updateBet: (amount: number) => {
      set((state) => {
        const newBet = state.bet + amount;
        const clampedBet = Math.max(1, Math.min(newBet, state.coins));
        return { bet: clampedBet };
      });
    },

    /**
     * Win
     */
    win: 0,
    setWin: (amount: number) => {
      set(() => {
        return {
          win: amount,
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
    phase: 'idle',
    start: () => {
      set((state) => {
        if (state.phase === 'idle') {
          return { phase: 'spinning', startTime: Date.now() };
        }
        return {};
      });
    },
    end: () => {
      set((state) => {
        if (state.phase === 'spinning') {
          const endTime = Date.now();
          const startTime = state.startTime;
          const elapsedTime = endTime - startTime;
          devLog(`Time spinning: ${elapsedTime / 1000} seconds`);
          return { phase: 'idle', endTime: endTime };
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
