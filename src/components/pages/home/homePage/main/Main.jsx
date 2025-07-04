import React, { useEffect } from "react";
import scss from "./Main.module.scss";
import homeImg from "../../../../../assets/Frame 422.svg";
import Button from "../../../../../ui/button/Button";
import { useMainContext } from "../../../../../context/MainContext";
import { useNavigate } from "react-router-dom";
import mainBoolImage from "../../../../../assets/MainBoolImage.svg";

const Main = () => {
  const { boolHeader, setBoolHeader } = useMainContext();
  const navigate = useNavigate();

  function handleClick() {
    setBoolHeader(true);
    navigate("/");
  }

  useEffect(() => {
    let randomBool = Math.floor(Math.random(2) * 2);
    setBoolHeader(randomBool === 1 ? true : false);
  }, []);
  return (
    <div className={scss.main}>
      <div className="container">
        <div className={scss.mainPage}>
          <div className={scss.title}>
            <h1>Знание - ключ к миру, образование - мост к успеху</h1>
            <p>
              Развивай свой потенциал с нашими образовательными курсами: знания,
              навыки и успех в одном месте!
            </p>
            <Button
              onClick={handleClick}
              contain="variant1"
              w="100%"
              mw="220px"
              text="Начать"
            />
          </div>
          <img src={boolHeader ? homeImg : mainBoolImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
