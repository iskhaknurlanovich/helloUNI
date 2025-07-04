import React, { useEffect, useState } from "react";
import scss from "./CardOnlineTest.module.scss";
import Button from "../button/Button";

const CardOnlineTest = ({ data, setModalId }) => {
  const wWidth = window.innerWidth <= 450;
  const [isMobile, setIsMobile] = useState(wWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(wWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  const newData = isMobile ? data.slice(0, 4) : data;

  return newData.map((item, idx) => (
    <div className={scss.card} key={idx}>
      <div className={scss.cardContent}>
        <div className={scss.cardTitle}>
          {item.header} <br /> {item.theme}
        </div>
        <div className={scss.cardInfo}>{item.quantity}</div>
        <div className={scss.cardInfo}>{item.date}</div>
        <div className={scss.cardInfo}>{item.actor}</div>
      </div>
      <Button
        className={scss.startBtn}
        text="Начать тест"
        contain="variant1"
        onClick={() => setModalId(true)}
      />
    </div>
  ));
};

export default CardOnlineTest;
