import React from "react";
import Input from "../../../../../ui/input/Input";
import Button from "../../../../../ui/button/Button";
import scss from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={scss.contact}>
      <div className={scss.title}>
        <h1>Поможем в выборе</h1>
        <p>
          Если у вас возникли вопросы или вам нужна наша помощь, оставьте свой
          номер — мы свяжемся с вами, чтобы ответить на все ваши вопросы.
        </p>
      </div>
      <div className={scss.inputs}>
        <Input placeholder="Имя" input="input" />
        <Input placeholder="Номер телефона" input="input" />
        <Input placeholder="Комментарий" input="input2" />
        <Button text="Отправить заявку" contain="variant1" w="100%" />
      </div>
    </div>
  );
};

export default Contact;
