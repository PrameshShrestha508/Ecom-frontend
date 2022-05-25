import React from "react";
import styles from "./Input.module.scss";

const Input = ({
  label,
  name,
  type,
  setValue,
  validateInput,
  placeholder,
  error,
  errorMsg,
  value,
}) => {
  return (
    <div className={styles.main}>
      <label htmlFor={value} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        className={styles.input}
        value={value}
        name={name}
        placeholder={placeholder}
        id={name}
        onBlur={(e) => setValue(e.target.value.trim())}
        onChange={(e) => {
          setValue(e.target.value);
          validateInput(e.target.value);
        }}
      />
      <span className={styles.error}>{error && errorMsg}</span>
    </div>
  );
};

export default Input;
