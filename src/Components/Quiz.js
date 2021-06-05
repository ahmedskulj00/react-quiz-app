import React, { useState, useContext, useEffect } from "react";
import { quizContext } from "./Contexts";
import { Questions } from "./Questions";
import "./Quiz.css";
import "./MainMenu.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const { score, setScore, setGameState } = useContext(quizContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
    <div className="Quiz" data-aos="fade-right">
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
        <button onClick={finishQuiz} className="finish-button">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} className="next-button">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
