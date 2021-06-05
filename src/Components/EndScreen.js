import React, { useContext, useEffect } from "react";
import { quizContext } from "./Contexts";
import { Questions } from "./Questions";
import "./EndScreen.css";
import AOS from "aos";
import "aos/dist/aos.css";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(quizContext);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="EndScreen" data-aos="fade-right">
      {" "}
      <h1>Quiz Finished!</h1>
      <h3>
        {score} / {Questions.length}
      </h3>
      <button onClick={restartQuiz} className="restart-quiz">
        Restart Quiz
      </button>
    </div>
  );
}

export default EndScreen;
