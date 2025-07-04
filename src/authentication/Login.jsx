import React from "react";
import Form from "../form/Form";
import scss from "./Register.module.scss";

const Login = () => {
  return (
    <div className={scss.login}>
      <Form isRegister={false} />
    </div>
  );
};

export default Login;
