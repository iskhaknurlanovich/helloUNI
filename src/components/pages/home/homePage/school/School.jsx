import React from "react";
import scss from "./School.module.scss";
import img1 from "../../../../../assets/image 51.svg";
import img2 from "../../../../../assets/school1 (1).svg";
import img3 from "../../../../../assets/school1 (2).svg";
import img4 from "../../../../../assets/school1 (3).svg";
import img5 from "../../../../../assets/school1 (4).svg";
import img6 from "../../../../../assets/school1 (5).svg";
import { useNavigate } from "react-router-dom";

const School = () => {
  const navigate = useNavigate();

  const cities = [
    { city: "Город Бишкек", img: img1 },
    { city: "Область Чуй", img: img1 },
    { city: "Город Ош", img: img2 },
    { city: "Область Ош", img: img1 },
    { city: "Область Ысык - Кол", img: img3 },
    { city: "Область Баткен", img: img5 },
    { city: "Область Жалал - Абад", img: img1 },
    { city: "Область Нарын", img: img4 },
    { city: "Область Талас", img: img6 },
  ];

  return (
    <div className={scss.cities}>
      <div className="container">
        <div className={scss.citiesBlock}>
          <h2>Школы</h2>
          <div className={scss.list}>
            {cities.map((item, idx) => (
              <div
                className={scss.city}
                key={idx}
                onClick={() => navigate("/schools/select-school")}
              >
                <img src={item.img} alt="" />
                <p>{item.city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
