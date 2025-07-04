import React, { useState } from "react";
import scss from "./SelectSchool.module.scss";
import Button from "../../../../../../ui/button/Button";
import { ListItem } from "@mui/material";
import image from "../../../../../../assets/unsplash_MZxqc6n9qCw.svg";

const SelectSchool = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const schools = [
    {
      name: "Средняя общеобразовательная школа №47",
      img: image,
      address: "улица Целинная 16, г.Бишкек, Ленинский район",
      date: "12.03.2000",
      email: "example@gmail.com",
      director: "Имя фамилия",
      lang: "Русский/Кыргызский",
      phone: "+996 700 00 00 00",
    },
    {
      name: "Средняя общеобразовательная школа №47",
      img: image,
      address: "улица Целинная 16, г.Бишкек, Ленинский район",
      date: "12.03.2000",
      email: "example@gmail.com",
      director: "Имя фамилия",
      lang: "Русский/Кыргызский",
      phone: "+996 700 00 00 00",
    },
    {
      name: "Средняя общеобразовательная школа №47",
      img: image,
      address: "улица Целинная 16, г.Бишкек, Ленинский район",
      date: "12.03.2000",
      email: "example@gmail.com",
      director: "Имя фамилия",
      lang: "Русский/Кыргызский",
      phone: "+996 700 00 00 00",
    },
    {
      name: "Средняя общеобразовательная школа №47",
      img: image,
      address: "улица Целинная 16, г.Бишкек, Ленинский район",
      date: "12.03.2000",
      email: "example@gmail.com",
      director: "Имя фамилия",
      lang: "Русский/Кыргызский",
      phone: "+996 700 00 00 00",
    },
    {
      name: "Средняя общеобразовательная школа №47",
      img: image,
      address: "улица Целинная 16, г.Бишкек, Ленинский район",
      date: "12.03.2000",
      email: "example@gmail.com",
      director: "Имя фамилия",
      lang: "Русский/Кыргызский",
      phone: "+996 700 00 00 00",
    },
    {
      name: "Средняя общеобразовательная школа №47",
      img: image,
      address: "улица Целинная 16, г.Бишкек, Ленинский район",
      date: "12.03.2000",
      email: "example@gmail.com",
      director: "Имя фамилия",
      lang: "Русский/Кыргызский",
      phone: "+996 700 00 00 00",
    },
  ];

  const [dataSelect, setDataSelect] = useState("Район");

  return (
    <div className={scss.selectSchools}>
      <div className="container">
        <div className={scss.select}>
          <h1>Город Бишкек</h1>
          <div className={scss.top}>
            <select
              value={dataSelect}
              onChange={(e) => setDataSelect(e.target.value)}
            >
              <option disabled>Район</option>
              <option>Первомайский</option>
              <option>Свердловский</option>
              <option>Ленинский</option>
              <option>Октябрский</option>
            </select>
            <Button
              onClick={() => setDataSelect("Район")}
              text="Сбросить"
              contain="variant2"
              style={{
                borderColor: "gray",
                color: "gray",
                maxWidth: "100px",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className={scss.list}>
            <div className={scss.listTop}>
              <h3>Школа</h3>
            </div>
            <div className={scss.variant}>
              {schools.map((item, idx) => (
                <div key={idx}>
                  <div
                    className={scss.choose}
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  >
                    <span>{item.name}</span>
                    <span>{openIdx === idx ? "Свернуть" : "Подробнее"}</span>
                  </div>
                  {openIdx === idx && (
                    <div className={scss.details}>
                      <img src={item.img} alt="" />
                      <div className={scss.info}>
                        <div className={scss.infos}>
                          <p>Адрес: </p>
                          <b>{item.address}</b>
                        </div>
                        <div className={scss.infos}>
                          <p>Дата создания:</p> <b>{item.date}</b>
                        </div>
                        <div className={scss.infos}>
                          <p>Почта: </p>
                          <b>{item.email}</b>
                        </div>
                        <div className={scss.infos}>
                          <p>Директор школы:</p>
                          <b> {item.director}</b>
                        </div>
                        <div className={scss.infos}>
                          <p>Язык обучения:</p>
                          <b> {item.lang}</b>
                        </div>
                        <div className={scss.infos}>
                          <p>Номер телефона:</p>
                          <b> {item.phone}</b>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectSchool;
