import React from "react";
import scss from "./Input.module.scss";

const Input = ({ type, placeholder, value, onChange, input }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={scss[input]}
    />
  );
};

export default Input;
