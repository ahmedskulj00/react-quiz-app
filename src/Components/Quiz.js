import React, { useState, useContext } from "react";
import { quizContext } from "./Contexts";
import { Questions } from "./Questions";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { score, setScore, setGameState } = useContext(quizContext);

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChosen("optionA")}>
          {Questions[currentQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("optionB")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("optionC")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("optionD")}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
