import React from "react";
import scss from "./PopularCourses.module.scss";
import item1 from "../../../../../assets/item1.svg";
import item2 from "../../../../../assets/item2.svg";
import item3 from "../../../../../assets/item3.svg";
import Card from "../../../../../ui/card/Card";

const PopularCourses = () => {
  return (
    <div className={scss.courses}>
      <div className={scss.courseTop}>
        <h2>Популярные курсы</h2>
        <p>
          Наши курсы предоставляют уникальные знания, необходимые в современном
          мире, и помогут вам раскрыть свой потенциал. Присоединяйтесь к
          сообществу обучения и станьте лучшей версией себя с нашими популярными
          курсами!
        </p>
      </div>
      <div className={scss.course}>
        <Card img={item1} card="card1" />
        <Card img={item2} card="card1" />
        <Card img={item3} card="card1" />
      </div>
      <p className={scss.allCourses}>Посмотреть все курсы</p>
    </div>
  );
};

export default PopularCourses;
