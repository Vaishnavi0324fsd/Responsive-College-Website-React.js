import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../assets/college-video.mp4';

const VideoPlayer = ({ playState, setPlayState }) => { // Ensure setPlayState is passed as a prop
  const player = useRef(null);

  const closePlayer = (e) => { // Add 'e' parameter
    if (e.target === player.current) {
      setPlayState(false); // Call setPlayState to update the state
    }
  };

  return (
    <div
      className={`video-player ${playState ? '' : 'hide'}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls />
    </div>
  );
};

export default VideoPlayer;
