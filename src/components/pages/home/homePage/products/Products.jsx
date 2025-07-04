import React from "react";
import scss from "./Products.module.scss";
import productImg1 from "../../../../../assets/Frame 1.svg";
import productImg2 from "../../../../../assets/Frame 2.svg";
import productImg3 from "../../../../../assets/Frame 4.svg";
import productImg4 from "../../../../../assets/Frame 5.svg";
import productImg5 from "../../../../../assets/Frame 6.svg";
import productImg6 from "../../../../../assets/Frame 7.svg";
import productImg7 from "../../../../../assets/Frame 8.svg";
import productImg8 from "../../../../../assets/Frame 9.svg";
import productImg9 from "../../../../../assets/Frame 10.svg";
import productImg10 from "../../../../../assets/Frame 3.svg";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className={scss.products}>
      <div className={scss.title}>
        <h1>Наши продукты</h1>
        <p>
          Мы предлагаем разнообразные образовательные программы, охватывающие
          широкий спектр тем, от технологий и бизнеса до творчества и личного
          развития.
        </p>
      </div>
      <Link to="/games">
        <img src={productImg1} className={scss.product} alt="" />
      </Link>
      <Link to="/bht">
        <img src={productImg2} className={scss.product} alt="" />
      </Link>
      <Link to="/games">
        <img src={productImg3} className={scss.product} alt="" />
      </Link>
      <Link to="/online-test">
        <img src={productImg4} className={scss.product} alt="" />
      </Link>
      <img src={productImg5} className={scss.product} alt="" />
      <img src={productImg6} className={scss.product} alt="" />
      <Link to="/books">
        <img src={productImg7} className={scss.product} alt="" />
      </Link>
      <Link to="/schools">
        <img src={productImg8} className={scss.product} alt="" />
      </Link>
      <img src={productImg9} className={scss.product} alt="" />
      <Link to="/ort">
        <img src={productImg10} className={scss.product} alt="" />
      </Link>
    </div>
  );
};

export default Products;
