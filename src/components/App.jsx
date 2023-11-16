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

import { useState } from 'react'
import '../styles/App.css'
import DifficultyScreen from './DifficultyScreen';


export default function App() {

    const [difficulty, setDifficulty] = useState('');

    return (
        <div className='page'>
            <DifficultyScreen />
        </div>
    )
}
