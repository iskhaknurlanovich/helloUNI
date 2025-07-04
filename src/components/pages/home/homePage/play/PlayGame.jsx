import React from "react";
import scss from "./PlayGame.module.scss";
import gameImg from "../../../../../assets/game2.svg";
import gameImg2 from "../../../../../assets/game1.svg";

const PlayGame = () => {
  return (
    <div className={scss.playGame}>
      <div className="container">
        <h1>Давай играть</h1>
        <p>Прокачай свой мозг!</p>
        <div className={scss.games}>
          <div className={scss.oneGame}>
            <img src={gameImg} alt="" />
            <h3>Игра с друзьями</h3>
            <p>Докажи кто самый умный в круге!</p>
          </div>
          <div className={scss.oneGame}>
            <img src={gameImg2} alt="" />
            <h3>Лига чемпионов</h3>
            <p>Стань первым и участвуй в лиге чемпионов</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
