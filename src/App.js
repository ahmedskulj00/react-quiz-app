import "./App.css";
import React, { useState, useContext } from "react";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { quizContext } from "./Components/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Ahmed's History Quiz</h1>
      <quizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </quizContext.Provider>
    </div>
  );
}

export default App;
