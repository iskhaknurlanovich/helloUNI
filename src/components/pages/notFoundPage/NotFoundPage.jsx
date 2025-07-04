import React from "react";
import scss from "./NotFoundPage.module.scss";
import img404 from "../../../assets/404.svg";
import Button from "../../../ui/button/Button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={scss.notFoundPage}>
      <div className="container">
        <div className={scss.notFoundPage}>
          <img src={img404} alt="" />
          <p>
            Кажется что-то пошло не так! Страница, которую вы запрашиваете, не
            существует. Возможно она устарела, была удалена, или был введен
            неверный адрес в адресной строке.
          </p>
          <Button
            onClick={() => navigate("/")}
            contain="variant1"
            text="Вернуться на главную страницу"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
