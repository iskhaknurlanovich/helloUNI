import React from "react";
import scss from "./Hero.module.scss";
import Button from "../../../../../ui/button/Button";
import hero2 from "../../../../../assets/hero2.svg";

const Hero = () => {
  return (
    <div className={scss.hero}>
      <div className="container">
        <div className={scss.heroMain}>
          <div className={scss.title}>
            <h1>Присоединяйтесь к нам</h1>
            <p>
              Наши курсы разрабатывают и ведут опытные эксперты в своих
              областях. Вы получите доступ к знаниям и опыту лучших
              специалистов, что даст вам преимущество на пути к достижению ваших
              профессиональных целей.
            </p>
            <Button text="Отправить заявку" contain="variant1" w="100%" />
          </div>
          <img src={hero2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
