import "../styles/DifficultyScreen.css";

// Display instructions on left and select difficulty on right

export default function DifficultyScreen() {
  return (
    <div className="difficultyScreen">
      <div className="gridItem">
        <h1>How to play</h1>
        <ul>
          <li>Select difficulty</li>
          <li>Easy: 5 cards / 5 rounds</li>
          <li>Medium: 10 cards / 10 rounds</li>
          <li>Hard: 15 cards / 15 rounds</li>
          <li>
            Try getting through all rounds without clicking same card twice
          </li>
        </ul>
      </div>
      <div className="gridItem">
        <h1>Select a difficulty</h1>
        <button className="difficultyButton" type="button">Easy</button>
        <button className="difficultyButton" type="button">Medium</button>
        <button className="difficultyButton" type="button">Hard</button>
      </div>
    </div>
  );
}
