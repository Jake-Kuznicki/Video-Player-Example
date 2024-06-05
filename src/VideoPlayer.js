// src/VideoPlayer.js

import React, { useEffect, useRef, useState } from 'react';
import dashjs from 'dashjs';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [flameColor, setFlameColor] = useState(0); // Initial flame color value

  useEffect(() => {
    const player = dashjs.MediaPlayer().create();
    player.initialize(videoRef.current, 'https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd', true);

    return () => {
      player.reset();
    };
  }, []);

  const handleColorChange = (event) => {
    const newValue = event.target.value;
    setFlameColor(newValue);
  };

  return (
    <div className="container">
      <div className="video-container">
        <div className="flame" style={{ background: `radial-gradient(circle, rgba(255, ${flameColor}, 0, 0.5), rgba(255, ${flameColor}, 0, 0.5), transparent)` }}></div>
        <video
          ref={videoRef}
          controls
          className="video-player"
        />
      </div>
      <input
        type="range"
        min="0"
        max="255"
        value={flameColor}
        onChange={handleColorChange}
        style={{ width: '75%', margin: '20px auto', display: 'block' }}
      />
    </div>
  );
};

export default VideoPlayer;
