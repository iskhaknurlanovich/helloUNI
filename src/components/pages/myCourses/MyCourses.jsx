import React from "react";
import scss from "./MyCourses.module.scss";
import item1 from "../../../assets/item1.svg";
import Card from "../../../ui/card/Card";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const navigate = useNavigate();
  return (
    <div className={scss.myCourses}>
      <h1 className={scss.h1}>Мои курсы</h1>
      <div className={scss.courses}>
        <Card
          img={item1}
          card="card2"
          onClick={() => navigate("/detail-course")}
        />
        <Card
          img={item1}
          card="card2"
          onClick={() => navigate("/detail-course")}
        />
        <Card
          img={item1}
          card="card2"
          onClick={() => navigate("/detail-course")}
        />
      </div>
    </div>
  );
};

export default MyCourses;
