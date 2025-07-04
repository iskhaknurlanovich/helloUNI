import React, { useState } from "react";
import scss from "./Form.module.scss";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import googleIcon from "../assets/flat-color-icons_google.svg";
import faceBookIcon from "../assets/logos_facebook.svg";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Form = ({ isRegister }) => {
  const [see, setSee] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const { signInWithGoogle, signInWithFacebook, signUp, register, user } =
    useAuth();
  console.log(user);

  const handleSignUp = () => {
    try {
      signUp(email, password);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };
  return (
    <form className={scss.registerForm}>
      {isRegister ? <h2>Регистрация</h2> : <h2>Вход</h2>}
      <div className={scss.socialButtons}>
        <Button
          className={scss.socialBtn}
          text="Google"
          contain="iconBtn"
          img={<img src={googleIcon} alt="" />}
          onClick={() => signInWithGoogle()}
        />
        <Button
          className={scss.socialBtn}
          text="Facebook"
          contain="iconBtn"
          img={<img src={faceBookIcon} alt="" />}
          onClick={() => signInWithFacebook()}
        />
      </div>
      <div className={scss.divider}>
        <span>Или</span>
      </div>
      {isRegister ? (
        <>
          <Input
            input="input"
            type="text"
            placeholder="Введите имя"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            input="input"
            type="text"
            placeholder="Введите фамилия"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            input="input"
            type="email"
            placeholder="Введите электронную почту"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={scss.passwordField}>
            <Input
              type={see ? "text" : "password"}
              placeholder="Введите пароль"
              input="input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className={scss.eyeIcon}
              onClick={() => setSee((see) => !see)}
              style={{ cursor: "pointer" }}
            >
              {see ? (
                <RemoveRedEyeOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </span>
          </div>
        </>
      ) : (
        <>
          <Input
            type="email"
            input="input"
            placeholder="Введите электронную почту"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={scss.passwordField}>
            <Input
              type={see ? "text" : "password"}
              placeholder="Введите пароль"
              input="input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className={scss.eyeIcon}
              onClick={() => setSee((see) => !see)}
              style={{ cursor: "pointer" }}
            >
              {see ? (
                <RemoveRedEyeOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </span>
          </div>
        </>
      )}
      <div className={scss.forgotRow}>
        <a href="" className={scss.forgotLink}>
          Забыли пароль?
        </a>
      </div>
      {!isRegister ? (
        <Button
          text="Войти"
          w="100%"
          contain="variant1"
          type="submit"
          onClick={handleSignUp}
        />
      ) : (
        <Button
          text="Зарегистрироваться"
          w="100%"
          contain="variant1"
          onClick={() => register(name, lastName, email, password)}
        />
      )}
      <div className={scss.registerRow}>
        {isRegister ? (
          <>
            <span>Уже есть аккаунт?</span>
            <a href="/login" className={scss.registerLink}>
              Войти
            </a>
          </>
        ) : (
          <>
            <span>У вас нет аккаунта?</span>
            <a href="/register" className={scss.registerLink}>
              Зарегистрироваться
            </a>
          </>
        )}
      </div>
    </form>
  );
};

export default Form;
