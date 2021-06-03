import React, { useContext } from "react";
import { quizContext } from "./Contexts";
import { Questions } from "./Questions";
import "../App.css";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(quizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="EndScreen">
      {" "}
      <h1>Quiz Finished!</h1>
      <h3>
        {score} / {Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
