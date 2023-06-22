// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import useGame from "../../stores/store";
import "./style.css";

const HelpButton = () => {
  const { setModal } = useGame();

  const handleHelp = () => {
    setModal(true);
  };

  return <div onClick={handleHelp} className="help-button" />;
};

export default HelpButton;
