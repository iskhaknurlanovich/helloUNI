import React from "react";
import scss from "./Card.module.scss";
import PlayLessonOutlinedIcon from "@mui/icons-material/PlayLessonOutlined";
import PersonIcon from "@mui/icons-material/Person";
import courseLogo from "../../assets/courseLogo.svg";
import stars from "../../assets/stars.svg";
import Button from "../button/Button";

const Card = ({
  card,
  img,
  bool,
  onClick,
  contain,
  title,
  author,
  btnClick,
}) => {
  return contain !== "book" ? (
    <div className={scss[card]} onClick={onClick}>
      <img src={img} alt="" />
      {bool ? (
        <div className={scss.mark}>
          <PersonIcon className={scss.markIcon} />
          <p>15 зарегистрированных</p>
        </div>
      ) : (
        <div className={scss.mark}>
          <PlayLessonOutlinedIcon className={scss.markIcon} />
          <p>6 уроков</p>
        </div>
      )}
      <h4>Подготовка к ОРТ. Русский язык</h4>
      <div className={scss.logoIcon}>
        <img src={courseLogo} className={scss.courseLogo} alt="" />
        <span>Hello Admin</span>
      </div>
      <div className={scss.stars} style={{ display: "none" }}>
        <img src={stars} className={scss.star} alt="" />
        <p>2500c</p>
      </div>
      <div className={scss.btn} onClick={btnClick}>
        <Button text="Начать тест" contain="variant1" />
      </div>
      {bool ? (
        <div className={scss.price}>
          <p>100 сом</p>
        </div>
      ) : (
        ""
      )}
    </div>
  ) : (
    <div className={scss.bookCard} onClick={onClick}>
      <img src={img} className={scss.bookImg} alt={title || "book"} />
      <div className={scss.bookInfo}>
        <h4 className={scss.bookTitle}>{title || "Название книги"}</h4>
        <p className={scss.bookAuthor}>{author || "Автор неизвестен"}</p>
      </div>
    </div>
  );
};

export default Card;
