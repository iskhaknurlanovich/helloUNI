import React, { useState } from "react";
import scss from "./OnlineTestList.module.scss";
import CardOnlineTest from "../../../../../ui/cardOnlineTest/CardOnlineTest.";
import Input from "../../../../../ui/input/Input";
import Button from "../../../../../ui/button/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";

const OnlineTestList = () => {
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
  const [modalId, setModalId] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function checkID() {
    if (value) {
      value === "api00" ? navigate("/test") : alert("ID не найден");
    }
  }
  return (
    <div className={scss.onlineTestList}>
      <div className="container">
        <h1 className={scss.title}>Онлайн тест</h1>
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
                onChange={(e) => setValue(e.target.value)}
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
    </div>
  );
};

export default OnlineTestList;
