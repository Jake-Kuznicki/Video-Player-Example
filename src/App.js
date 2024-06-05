// src/App.js
import React from 'react';
import './App.css';
import VideoPlayer from './VideoPlayer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React DASH Video Player</h1>
        <VideoPlayer />
      </header>
    </div>
  );
}

export default App;
