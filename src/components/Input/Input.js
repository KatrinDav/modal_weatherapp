import React from "react";
import styles from "./Input.module.scss";

const Input = ({ name, change, label }) => {
  return (
    <>
      <input
        type="text"
        name={name}
        className={styles.input}
        onChange={change}
        placeholder=" "
        autoComplete="off"
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.formItemBar}></div>
    </>
  );
};

export default Input;
