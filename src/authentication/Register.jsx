import React, { useState } from "react";
import scss from "./Register.module.scss";

import Form from "../form/Form";

const Register = () => {
  return (
    <div className={scss.register}>
      <Form isRegister={true} />
    </div>
  );
};

export default Register;
