import React from "react";
import scss from "./Otzyv.module.scss";
import itemImg1 from "../../../../../assets/Frame 356.svg";
import itemImg2 from "../../../../../assets/Frame 356-1.svg";

const Otzyv = ({ color }) => {
  return (
    <div className={scss.otzyv}>
      <div className={scss.otzyvTop}>
        <h1>Отзывы наших студентов</h1>
        <p>
          Узнайте, что говорят те, кто уже прошёл путь обучения с нами. Вот что
          некоторые из наших учеников говорят о своем опыте:
        </p>
      </div>
      <div className={scss.otzyvMain}>
        <div
          className={scss.otzyvMain_item}
          style={{ background: color ? "white" : "none" }}
        >
          <img src={itemImg1} alt="" />
          <p>
            "Обучение в вашей школе стало для меня настоящим открытием.
            Профессиональные преподаватели, интересные задания и практический
            подход к обучению помогли мне значительно улучшить свои навыки
            программирования. Рекомендую!"
          </p>
        </div>
        <div
          className={scss.otzyvMain_item}
          style={{ background: color ? "white" : "none" }}
        >
          <img src={itemImg2} alt="" />
          <p>
            "Обучение в вашей школе стало для меня настоящим открытием.
            Профессиональные преподаватели, интересные задания и практический
            подход к обучению помогли мне значительно улучшить свои навыки
            программирования. Рекомендую!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Otzyv;
