import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
import loginImg from "../../assets/login.jpg";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { passwordValidator, emailValidator } from "../../utils/fomValidators.";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
  });

  const validateEmail = (value) => {
    if (!emailValidator(value)) {
      setError((pre) => ({ ...pre, emailError: true }));
    } else {
      setError((pre) => ({ ...pre, emailError: false }));
    }
  };

  const validatePassword = (value) => {
    if (!passwordValidator(value)) {
      setError((pre) => ({ ...pre, passwordError: true }));
    } else {
      setError((pre) => ({ ...pre, passwordError: false }));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let tempErr = {
      fullNameError: false,
      emailError: false,
      contactError: false,
      addressError: false,
    };
    let errCnt = 0;

    if (!emailValidator(email)) {
      tempErr.emailError = true;
      errCnt++;
    }

    if (!passwordValidator(password)) {
      tempErr.passwordError = true;
      errCnt++;
    }

    setError({ ...tempErr });
  };
  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.loginLogo}>
          {/* <div className={styles.loginText}>Login</div> */}
          <div className={styles.loginImg}>
            <img src={loginImg} alt="loginImg" />
          </div>
        </div>

        <div className={styles.loginForm}>
          <form className={styles.formlayout}>
            <h1>FORM</h1>
            <Input
              label="Email"
              name="Email"
              type="email"
              placeholder="Enter Email"
              setValue={setEmail}
              validateInput={validateEmail}
              error={error.emailError}
              value={email}
              errorMsg="please enter a valid email."
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter Password"
              setValue={setPassword}
              validateInput={validatePassword}
              error={error.passwordError}
              value={password}
              errorMsg="please enter a valid Password."
            />
            <p>Forgot Password ?</p>
            <Button type="submit" onClick={(e) => submitHandler(e)}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
