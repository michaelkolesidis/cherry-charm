import useGame from '../stores/store';
import HelpModal from './helpModal/HelpModal';
import HelpButton from './helpButton/HelpButton';
import useAnimatedNumber from '../hooks/useAnimatedNumber';
import './style.css';

const Interface = () => {
  const { modal, coins, win, bet, phase, updateBet } = useGame(
    (state) => state,
  );
  const animatedCoins = useAnimatedNumber(coins);
  return (
    <>
      {/* Help Button */}
      <HelpButton />

      {/* Modal */}
      {modal && <HelpModal />}

      {/* Thumbfeed logo */}
      <a href="https://thumbfeed.com" className="site-logo">
        <img
          id="desktop-logo"
          className="site-logo-img"
          src="thumbfeed-logo-inline.svg"
          alt="Thumbfeed logo"
        />
        <img
          id="mobile-logo"
          className="site-logo-img"
          src="thumbfeed-logo.svg"
          alt="Thumbfeed logo"
        />
      </a>

      {/* Logo */}
      <div id="logo-section">
        <img className="logo" src="./images/logo.png" alt="" />
        {/* <div id="version">{__APP_VERSION__}</div> */}
      </div>

      <div className="interface">
        {/* Coins */}
        <div className="coins-section">
          <div className="coins-number">{animatedCoins}</div>
          <img className="coins-image" src="./images/coin.png" />
        </div>

        {/* Bet */}
        <div className="bet-section">
          <div className="bet-label">BET</div>
          <div className="bet-amount">{bet}</div>
          <div id="bet-controls" className={phase === 'idle' ? '' : 'hidden'}>
            <div
              id="increase-bet"
              className="bet-control"
              onClick={() => updateBet(1)}
            >
              +
            </div>
            <div
              id="decrease-bet"
              className="bet-control"
              onClick={() => updateBet(-1)}
            >
              -
            </div>
          </div>
        </div>

        {/* Spins */}
        <div className="win-section">
          <div className="win-label">WIN </div>
          <div className="win-amount">{win}</div>
        </div>
      </div>
    </>
  );
};

export default Interface;
