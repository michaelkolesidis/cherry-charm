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
        <div className="stats">Coins: {coins}</div>
        <div className="stats">Total Spins: {spins}</div>
        <div className="stats">Wins: {wins}</div>
        <div className="stats">Losses: {losses}</div>
      </div>
    </>
  );
};

export default Interface;
