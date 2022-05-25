import React from "react";
import styles from "./ButtonStyle.module.scss";

const Button = ({ children, type, onClick, green }) => {
  return (
    <div>
      <button
        type={type ? type : "submit"}
        className={green ? styles.green : styles.orange}
        onClickCapture={onClick}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
