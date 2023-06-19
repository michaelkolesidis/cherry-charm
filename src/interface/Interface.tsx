// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import useGame from "../stores/store";
import "./style.css";

const Interface = () => {
  const coins = useGame((state) => state.coins);
  const spins = useGame((state) => state.spins);
  const wins = useGame((state) => state.wins);
  const losses = useGame((state) => state.losses);

  return (
    <>
      <div className="interface">
        <img className="logo" src="./images/logo.png" alt="" />
        <div className="stats-box">
          <div className="stats">COINS: {coins}</div>
          <div className="stats">SPINS: {spins}</div>
          <div className="stats">WINS: {wins}</div>
          <div className="stats">LOSSES: {losses}</div>
        </div>
      </div>
    </>
  );
};

export default Interface;
