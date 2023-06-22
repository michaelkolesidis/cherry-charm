// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import useGame from "../stores/store";
import Modal from "./modal/Modal";
import HelpButton from "./helpButton/HelpButton";
import "./style.css";

const Interface = () => {
  // const phase = useGame((state) => state.phase);
  const modal = useGame((state) => state.modal);
  const coins = useGame((state) => state.coins);
  const spins = useGame((state) => state.spins);

  return (
    <>
      {/* Help Button */}
      <HelpButton />

      {/* Modal */}
      {modal && <Modal />}

      {/* Logo */}
      <a
        href="https://github.com/michaelkolesidis/cherry-charm"
        target="_blank"
      >
        <img className="logo" src="./images/logo.png" alt="" />
      </a>

      <div className="interface">
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
