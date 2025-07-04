import React from "react";
import scss from "./Specialists.module.scss";
import spesialist1 from "../../../../../assets/Rectangle 2461.svg";
import spesialist2 from "../../../../../assets/Rectangle 2461-1.svg";
import spesialist3 from "../../../../../assets/Rectangle 2461-2.svg";

const Specialists = () => {
  return (
    <div className={scss.specialists}>
      <div className="container">
        <div className={scss.specialistsTop}>
          <h1>Наши эксперты</h1>
          <p>
            Наши курсы разрабатывают и ведут опытные эксперты в своих областях.
            Вы получите доступ к знаниям и опыту лучших специалистов, что даст
            вам преимущество на пути к достижению ваших профессиональных целей.
          </p>
        </div>
      </div>
      <div className={scss.specialistsMain}>
        <div className={scss.specialistsCard}>
          <img src={spesialist3} alt="" />
          <h2>Имя Фамилия</h2>
          <p>Специальность</p>
          <a href="#">Подробнее о преподавателе</a>
        </div>
        <div className={scss.specialistsCard}>
          <img src={spesialist1} alt="" />
          <h2>Имя Фамилия</h2>
          <p>Специальность</p>
          <a href="#">Подробнее о преподавателе</a>
        </div>
        <div className={scss.specialistsCard}>
          <img src={spesialist2} alt="" />
          <h2>Имя Фамилия</h2>
          <p>Специальность</p>
          <a href="#">Подробнее о преподавателе</a>
        </div>
        <div className={scss.specialistsCard}>
          <img src={spesialist3} alt="" />
          <h2>Имя Фамилия</h2>
          <p>Специальность</p>
          <a href="#">Подробнее о преподавателе</a>
        </div>
        <div className={scss.specialistsCard}>
          <img src={spesialist1} alt="" />
          <h2>Имя Фамилия</h2>
          <p>Специальность</p>
          <a href="#">Подробнее о преподавателе</a>
        </div>
        <div className={scss.specialistsCard}>
          <img src={spesialist2} alt="" />
          <h2>Имя Фамилия</h2>
          <p>Специальность</p>
          <a href="#">Подробнее о преподавателе</a>
        </div>
      </div>
      <p className={scss.p}>Посмотреть всех</p>
    </div>
  );
};

export default Specialists;
