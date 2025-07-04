import React from "react";
import scss from "./Home.module.scss";
import PopularCourses from "./homePage/popularCourses/PopularCourses";
import Products from "./homePage/products/Products";
import Branch from "./homePage/branch/Branch";
import Main from "./homePage/main/Main";
import Specialists from "./homePage/specialists/Specialists";
import Hero from "./homePage/hero/Hero";
import Contact from "./homePage/contact/Contact";
import Otzyv from "./homePage/otzyv/Otzyv";
import DetailsCourse from "../myCourses/detailsCourse/DetailsCourse";

const Home = () => {
  return (
    <div className={scss.home}>
      <div className="container">
        <Main />
        <PopularCourses />
        <Products />
        <Branch />
      </div>
      <Specialists />
      <Hero />
      <div className="container">
        <div className={scss.homeOtzyv}>
          <Otzyv />
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
