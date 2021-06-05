import React, { useContext, useEffect } from "react";
import { quizContext } from "./Contexts";
import "./MainMenu.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MainMenu() {
  const { gameState, setGameState } = useContext(quizContext);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="Menu" data-aos="fade-right">
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
