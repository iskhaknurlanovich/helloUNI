import React, { useState } from "react";
import scss from "./Test.module.scss";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Button } from "@mui/material";

const questions = [
  {
    question: "Решите уравнение 4(x+5)+8x=164",
    options: ["12", "13", "14", "15"],
    correct: 0,
  },
  {
    question: "Решите уравнение 200+12*20-(20+10)",
    options: ["200", "210", "4210", "410"],
    correct: 1,
  },
];

const letters = ["А", "Б", "В", "Г"];

const Test = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const [selected, setSelected] = useState(null);

  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (idx) => {
    setSelected(idx);
    if (idx === questions[current].correct) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 300);
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setSelected(null);
    }
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  return (
    <div className={scss.test}>
      <div className="container">
        {showResult ? (
          <div className={scss.resultBlock}>
            <h3>
              Ваш результат: {score} из {questions.length} баллов
            </h3>
            <button onClick={() => navigate("/online-test")}>Выйти</button>
          </div>
        ) : (
          <>
            <div className={scss.questionBlock}>
              <h3>
                {current + 1}. {questions[current].question}
              </h3>
              <div className={scss.answers}>
                {questions[current].options.map((option, idx) => (
                  <div
                    key={idx}
                    className={
                      selected === idx
                        ? `${scss.answer} ${scss.selected}`
                        : scss.answer
                    }
                    onClick={() => selected === null && handleAnswer(idx)}
                  >
                    <span>{letters[idx]}</span> {option}
                  </div>
                ))}
              </div>
            </div>
            <div className={scss.navigation}>
              <button className={scss.prevBtn} onClick={handlePrev}>
                <ArrowRightAltIcon style={{ transform: "rotate(180deg)" }} />
              </button>
              <button className={scss.nextBtn} onClick={handleNext}>
                <ArrowRightAltIcon />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Test;
