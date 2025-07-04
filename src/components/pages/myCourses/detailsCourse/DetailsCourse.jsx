import React, { useState } from "react";
import scss from "./DetailsCourse.module.scss";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import CardOnlineTest from "../../../../ui/cardOnlineTest/CardOnlineTest.";
import Button from "../../../../ui/button/Button";
import Input from "../../../../ui/input/Input";
import ClearIcon from "@mui/icons-material/Clear";
import Otzyv from "../../home/homePage/otzyv/Otzyv";
import { useNavigate } from "react-router-dom";

const DetailsCourse = () => {
  const [modalId, setModalId] = useState(false);
  const [more, setMore] = useState(300);
  const [value, setvalue] = useState("");
  const navigate = useNavigate();

  const test = [
    {
      header: "Тест к занятию 2",
      theme: "“Базовые принципы написания эссе”",
      quantity: "5 вопросов",
      date: "03.11.2023",
      actor: "Максатов Азамат Максатович",
    },
    {
      header: "Тест к занятию 2",
      theme: "“Базовые принципы написания эссе”",
      quantity: "5 вопросов",
      date: "03.11.2023",
      actor: "Максатов Азамат Максатович",
    },
    {
      header: "Тест к занятию 2",
      theme: "“Базовые принципы написания эссе”",
      quantity: "5 вопросов",
      date: "03.11.2023",
      actor: "Максатов Азамат Максатович",
    },

    {
      header: "Тест к занятию 3",
      theme: "“Основы аргументации в эссе”",
      quantity: "6 вопросов",
      date: "05.11.2023",
      actor: "Сулейменова Алия Сериковна",
    },
    {
      header: "Тест к занятию 3",
      theme: "“Основы аргументации в эссе”",
      quantity: "6 вопросов",
      date: "05.11.2023",
      actor: "Сулейменова Алия Сериковна",
    },
    {
      header: "Тест к занятию 3",
      theme: "“Основы аргументации в эссе”",
      quantity: "6 вопросов",
      date: "05.11.2023",
      actor: "Сулейменова Алия Сериковна",
    },
    {
      header: "Тест к занятию 3",
      theme: "“Основы аргументации в эссе”",
      quantity: "6 вопросов",
      date: "05.11.2023",
      actor: "Сулейменова Алия Сериковна",
    },
    {
      header: "Тест к занятию 3",
      theme: "“Основы аргументации в эссе”",
      quantity: "6 вопросов",
      date: "05.11.2023",
      actor: "Сулейменова Алия Сериковна",
    },
  ];

  function checkID() {
    if (value) {
      value === "api00" ? navigate("/test") : alert("ID не найден");
    }
  }
  const title =
    'Хотите изучить русский язык с нуля или улучшить свои навыки до продвинутого уровня? Присоединяйтесь к нашему увлекательному курсу "Погружение в русский", созданному для всех, кто желает овладеть этим прекрасным историческим и культурным языком. На протяжении курса вы познакомитесь с основами русской грамматики, активно развивая навыки говорения, понимания на слух, чтения и письма. Благодаря нашим опытным преподавателям, вы сможете уверенно общаться на русском языке в различных ситуациях, расширить свой словарный запас и понять особенности русской культуры.';
  return (
    <div className={scss.detailsCourse}>
      <div className="container">
        <div className={scss.details}>
          <div className={scss.main}>
            <iframe
              height="360"
              src="https://www.youtube.com/embed/XZrckLYqdys?si=cm65L-pHuVUACLJT"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{
                borderRadius: "10px",
                flex: "1",
              }}
            ></iframe>
            <div className={scss.options}>
              <p>
                <PlayCircleIcon />
                Работа с эпиграфом
              </p>
              <p>
                <PlayCircleIcon />
                Работа с эпиграфом
              </p>
              <p>
                <PlayCircleIcon />
                Работа с эпиграфом
              </p>
              <p>
                <PlayCircleIcon />
                Работа с эпиграфом
              </p>
              <p>
                <PlayCircleIcon />
                Работа с эпиграфом
              </p>
            </div>
          </div>
          <div className={scss.aboutUs}>
            <h1 className={scss.title}>О курсе</h1>
            <p className={scss.text}>
              {title.slice(0, more)}
              {more === 300 ? "..." : ""}
            </p>
            <Button
              onClick={() =>
                more >= title.length ? setMore(300) : setMore(title.length)
              }
              contain="variant2"
              text="Показать больше"
              mw="260px"
              img2={true}
            />
          </div>
          <div className={scss.test}>
            <h1 className={scss.title}>Тест</h1>
            <div className={scss.list}>
              <CardOnlineTest data={test} setModalId={setModalId} />
            </div>
            {modalId ? (
              <div className={scss.modal}>
                <div className={scss.modalContent}>
                  <ClearIcon
                    className={scss.exit}
                    onClick={() => setModalId(false)}
                  />
                  <p>Введите ID теста</p>
                  <Input
                    placeholder="ID теста"
                    input="input"
                    onChange={(e) => setvalue(e.target.value)}
                  />
                  <Button
                    contain="variant1"
                    text="Продолжить"
                    onClick={() => {
                      setModalId(false);
                      checkID();
                    }}
                  />
                </div>
              </div>
            ) : null}
          </div>
          <div className={scss.otzyv}>
            <Otzyv color={true} />
            <Button
              text="Написать отзыв"
              contain="variant1"
              style={{
                marginBlock: "40px 0",
                maxWidth: "400px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCourse;
