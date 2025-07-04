import React from "react";
import scss from "./Button.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Button = ({ contain, text, onClick, img, img2, style }) => {
  return (
    <button
      onClick={onClick}
      className={scss[contain]}
      style={style}
      type="submit"
    >
      {img}
      {text}
      {img2 ? <ArrowDropDownIcon /> : null}
    </button>
  );
};

export default Button;
