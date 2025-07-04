import React from "react";
import scss from "./BHT.module.scss";
import Card from "../../../../../ui/card/Card";
import img1 from "../../../../../assets/Rectangle 2481-1.svg";
import img2 from "../../../../../assets/Rectangle 2481-2.svg";
import img3 from "../../../../../assets/Rectangle 2481-3.svg";
import img4 from "../../../../../assets/Rectangle 2481.svg";
import img5 from "../../../../../assets/Rectangle 2481-5.svg";
import { useNavigate } from "react-router-dom";

const BHT = () => {
  const navigate = useNavigate();
  return (
    <div className={scss.bht}>
      <div className="container">
        <div className={scss.bht}>
          <h2>БЧТ</h2>
          <div className={scss.bhtMain}>
            <div className={scss.list}>
              <Card
                card="card2"
                img={img1}
                bool={true}
                onClick={() => navigate("/bht-test")}
              />
              <Card
                card="card2"
                img={img2}
                bool={true}
                onClick={() => navigate("/bht-test")}
              />
              <Card
                card="card2"
                img={img3}
                bool={true}
                onClick={() => navigate("/bht-test")}
              />
              <Card
                card="card2"
                img={img4}
                bool={true}
                onClick={() => navigate("/bht-test")}
              />
              <Card
                card="card2"
                img={img5}
                bool={true}
                onClick={() => navigate("/bht-test")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BHT;
