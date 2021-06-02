import React, { useContext } from "react";
import { quizContext } from "./Contexts";
import "../App.css";
function MainMenu() {
  const { gameState, setGameState } = useContext(quizContext);

  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start
      </button>
    </div>
  );
}

export default MainMenu;
