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

import useGame from '../../stores/store';
import './style.css';

const Modal = () => {
  const { setModal } = useGame();

  return (
    <div className="modal" onClick={() => setModal(false)}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-main">
          <div className="modal-text">
            Click on the SPIN button or press SPACE to spin.
          </div>
          <div className="modal-text">
            <img className="modal-image" src="./images/cherry.png" />
            <img className="modal-image" src="./images/cherry.png" />
            <img className="modal-image" src="./images/cherry.png" />
            <span> Pay 50 </span>
            <img className="modal-image" src="./images/coin.png" />
          </div>
          <div className="modal-text">
            <img className="modal-image" src="./images/apple.png" />
            <img className="modal-image" src="./images/apple.png" />
            <img className="modal-image" src="./images/apple.png" />
            <span> Pay 20 </span>
            <img className="modal-image" src="./images/coin.png" />
          </div>
          <div className="modal-text">
            <img className="modal-image" src="./images/banana.png" />
            <img className="modal-image" src="./images/banana.png" />
            <img className="modal-image" src="./images/banana.png" />
            <span> Pay 15 </span>
            <img className="modal-image" src="./images/coin.png" />
          </div>
          <div className="modal-text">
            <img className="modal-image" src="./images/lemon.png" />
            <img className="modal-image" src="./images/lemon.png" />
            <img className="modal-image" src="./images/lemon.png" />
            <span> Pay 3 </span>
            <img className="modal-image" src="./images/coin.png" />
          </div>
          <div className="modal-text">
            <img className="modal-image" src="./images/cherry.png" />
            <img className="modal-image" src="./images/cherry.png" />
            <span> Pay 40 </span>
            <img className="modal-image" src="./images/coin.png" />
          </div>
          <div className="modal-text">
            <img className="modal-image" src="./images/apple.png" />
            <img className="modal-image" src="./images/apple.png" />
            <span> Pay 10 </span>
            <img className="modal-image" src="./images/coin.png" />
          </div>
          <div className="modal-text">
            <img className="modal-image" src="./images/banana.png" />
            <img className="modal-image" src="./images/banana.png" />
            <span> Pay 5 </span>
            <img className="modal-image" src="./images/coin.png" />
          </div>
          <div className="modal-text">
            Please note that slot machines only consider pairs a match if they
            are in order from left to right.
          </div>
          <div className="modal-text">
            Extra: Click & hold anywhere, and move the cursor around to explore
            the 3D scene!
          </div>
          <div>
            <div>
              <a href="https://github.com/michaelkolesidis/cherry-charm">
                © 2023 Michael Kolesidis.
              </a>
            </div>
            <div className="modal-about">
              <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">
                Licensed under the GNU AGPL 3.0
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
