import React, { useState, useEffect, useRef } from "react";
import scss from "./BhtTest.module.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Button from "../../../../../../../ui/button/Button";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "Морфология - это?",
    options: [
      "Отдел грамматики, изучающий формы слов, а также сама совокупность форм слов какого-нибудь языка",
      "Раздел лингвистики, изучающий синтаксис предложений",
      "Наука о происхождении слов",
      "Изучение фонетики языка",
    ],
    correct: 0,
  },
  {
    question: "Синтаксис изучает...",
    options: [
      "Звуки речи",
      "Строение слов",
      "Строение предложений и их части",
      "Происхождение слов",
    ],
    correct: 2,
  },
];

const letters = ["А", "Б", "В", "Г"];

const BhtTest = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const [selected, setSelected] = useState(null);

  const [time, setTime] = useState(60 * 60);
  const timerRef = useRef();
  const [showResult, setShowResult] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (showResult) return;
    timerRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setShowResult(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [showResult]);

  const formatTime = (t) => {
    const min = String(Math.floor(t / 60)).padStart(2, "0");
    const sec = String(t % 60).padStart(2, "0");
    return `${min} : ${sec}`;
  };
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
      // } else {
      //   setShowResult(true);
    }
  };

  return (
    <div className={scss.bhtTest}>
      <div className={scss.header}>
        <h2>Пробный БЧТ</h2>
        <div className={scss.headerBottom}>
          <div className={scss.progressBarWrapper}>
            <div className={scss.progressBar}>
              <div
                className={scss.progress}
                style={{
                  width: `${((current + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>
            <span>
              {current + 1} из {questions.length}
            </span>
          </div>
          <div className={scss.timer}>
            <span>Оставшееся время :</span>
            <span className={scss.time}>{formatTime(time)}</span>
          </div>
        </div>
      </div>
      {showResult ? (
        <div className={scss.resultBlock}>
          <h3>
            Ваш результат: {score} из {questions.length} баллов
          </h3>
          <Button
            className={scss.nextBtn}
            onClick={() => navigate("/bht")}
            text="Выйти"
            contain="variant1"
          />
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
  );
};

export default BhtTest;
