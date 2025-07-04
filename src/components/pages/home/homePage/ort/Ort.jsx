import React, { useState } from "react";
import Card from "../../../../../ui/card/Card";
import scss from "./Ort.module.scss";
import img from "../../../../../assets/item1.svg";
import img2 from "../../../../../assets/Rectangle 2481-3.svg";
import img3 from "../../../../../assets/Rectangle 2481-4.svg";
import img4 from "../../../../../assets/Rectangle 2481.svg";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../ui/button/Button";
import CloseIcon from "@mui/icons-material/Close";

const Ort = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className={scss.ort}>
      <div className="container">
        <div className={scss.ortMain}>
          <h1>OPT</h1>
          <div className={scss.list}>
            <Card card="card1" img={img} btnClick={() => setModal(true)} />
            <Card card="card1" img={img4} btnClick={() => setModal(true)} />
            <Card card="card1" img={img3} btnClick={() => setModal(true)} />
            <Card card="cardTime" img={img2} btnClick={() => setModal(true)} />
            <Card card="cardTime" img={img} btnClick={() => setModal(true)} />
            <Card card="cardTime" img={img4} btnClick={() => setModal(true)} />
          </div>
          {modal ? (
            <div className={scss.modal}>
              <div className={scss.modalMain}>
                <div className={scss.modalTop}>
                  <h3>Результаты</h3>
                  <CloseIcon onClick={() => setModal(false)} />
                </div>
                <p>
                  Математика 1 <span>8 / 30</span>
                </p>
                <p>
                  Математика 2 <span>0 / 30</span>
                </p>
                <p>
                  Аналогия <span>0 / 30</span>
                </p>
                <p>
                  Чтение - понимание <span>0 / 30</span>
                </p>
                <p>
                  Грамматика <span>9 / 30</span>
                </p>
                <p style={{ fontWeight: "600" }}>
                  Итоговый балл: <span>17</span>
                </p>
                <Button
                  text="Список тестов"
                  contain="variant1"
                  onClick={() => setModal(false)}
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Ort;
