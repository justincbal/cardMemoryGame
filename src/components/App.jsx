/*
PSEUDOCODE HOW APP RUNS:

    1. Opening screen, user selects difficulty:
        - Easy: 5 cards
        - Medium: 10 cards
        - Hard: 15 cards
    
    2. X amount of cards populate the screen of various pokemon
    3. GOAL: X rounds, user mustn't click the same card twice
        WIN: Get through all rounds without clicking same card
        LOSE: streak displayed as highscore, round and current score reset back to 0
    
    COMPONENTS:
        OpeningScreen
        GameBoard


*/

import { useState, useRef } from "react";
import "../styles/App.css";
import DifficultyScreen from "./DifficultyScreen";

export default function App() {
  const [difficulty, setDifficulty] = useState("");
  const [image, setImage] = useState("/src/assets/mute.svg");
  // Audio
  const audioClick = () => {
    const music = document.getElementById('audio');
    music.volume = 0.1;
    
    if (image == "/src/assets/mute.svg") {
      setImage("/src/assets/play.svg");
      music.play();
    } else {
      music.pause();
      setImage("/src/assets/mute.svg");
    }
  };

  return (
    
    <div className="page">
      <audio loop id="audio"> <source src="/src/assets/pokeLofi.mp3" type="audio/mp3"/></audio>
      <div className="playBorder" onClick={audioClick}>
        <img src={image} alt="" className="play" />
      </div>

      <DifficultyScreen difficulty={difficulty} setDifficulty={setDifficulty} />
      {console.log(difficulty)}
    </div>
  );
}
