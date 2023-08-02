import { useEffect, useState } from "react";

import closeFullScreenSrc from "../../assets/icons/close_fullscreen.svg";
import openFullScreenSrc from "../../assets/icons/fullscreen.svg";

import muteVolumeSrc from "../../assets/icons/volume_off.svg";
import unmuteVolumeSrc from "../../assets/icons/volume_up.svg";

import "./MediaButtons.scss";
const MediaButtons = ({ handleSizing, handleVolume }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleToggleMuted = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (handleSizing && isFullScreen) {
      handleSizing();
    }
    if (handleVolume && isMuted) {
      handleVolume();
    }
  }, [isFullScreen, isMuted]);

  return (
    <div className="media-buttons">
      <button onClick={handleToggleFullScreen} className="media-buttons__button">
        {isFullScreen ? (
          <img src={openFullScreenSrc} alt="Open Full Screen" className="media-buttons__icon" />
        ) : (
          <img
            src={closeFullScreenSrc}
            alt="Close Full Screen"
            className="media-buttons__icon"
          ></img>
        )}
      </button>
      <button onClick={handleToggleMuted} className="media-buttons__button">
        {isMuted ? (
          <img src={muteVolumeSrc} alt="Mute" className="media-buttons__icon" />
        ) : (
          <img src={unmuteVolumeSrc} alt="Unmute" className="media-buttons__icon" />
        )}
      </button>
    </div>
  );
};

export default MediaButtons;
