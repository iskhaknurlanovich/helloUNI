import React from "react";
import scss from "./Branch.module.scss";
import card1 from "../../../../../assets/card.svg";
import card2 from "../../../../../assets/card-1.svg";
import card3 from "../../../../../assets/card-2.svg";
import card4 from "../../../../../assets/card-3.svg";
import card5 from "../../../../../assets/card-4.svg";
import card6 from "../../../../../assets/card-5.svg";
import card7 from "../../../../../assets/card-6.svg";
import card8 from "../../../../../assets/card-7.svg";

const Branch = () => {
  return (
    <div className={scss.branch}>
      <div className={scss.branchTop}>
        <h1>Направления обучения</h1>
        <p>
          Не откладывайте свое образование на потом - начните свой путь к успеху
          прямо сейчас!
        </p>
      </div>
      <div className={scss.branches}>
        <img src={card1} className={scss.card} alt="" />
        <img src={card2} className={scss.card} alt="" />
        <img src={card3} className={scss.card} alt="" />
        <img src={card4} className={scss.card} alt="" />
        <img src={card5} className={scss.card} alt="" />
        <img src={card6} className={scss.card} alt="" />
        <img src={card7} className={scss.card} alt="" />
        <img src={card8} className={scss.card} alt="" />
      </div>
    </div>
  );
};

export default Branch;
