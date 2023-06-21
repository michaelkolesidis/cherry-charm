// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { useState } from "react";
import useGame from "../stores/store";
import "./style.css";

const Interface = () => {
  // const phase = useGame((state) => state.phase);
  const coins = useGame((state) => state.coins);
  const spins = useGame((state) => state.spins);

  const [instructions, setInstructions] = useState(true);

  setTimeout(() => {
    setInstructions(false);
  }, 5000);

  return (
    <>
      <div className="interface">
        {/* Logo */}
        <img className="logo" src="./images/logo.png" alt="" />

        {/* Instructions */}
        {instructions && (
          <div className="instructions">
            Click SPIN Button or Press SPACE to Spin!
          </div>
        )}

        {/* Coins */}
        <div className="coins-section">
          <div className="coins-number">{coins}</div>
          <img className="coins-image" src="./images/coin.png" />
        </div>

        {/* Spins */}
        <div className="spins-section">
          <div className="spins-number">{spins}</div>
        </div>

        {/* Phase */}
        {/* <div >{phase.toUpperCase()}</div> */}
      </div>
    </>
  );
};

export default Interface;
