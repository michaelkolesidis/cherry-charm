import useGame from '../../stores/store';
import './style.css';

const HelpButton = () => {
  const { setModal } = useGame();

  const handleHelp = () => {
    setModal(true);
  };

  return <div onClick={handleHelp} className="help-button" />;
};

export default HelpButton;
