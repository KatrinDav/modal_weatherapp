import React from "react";
import styles from "./Form.module.scss";


const Form = ({ submit, change }) => {
  return (
    <>
      <form className={styles.form} onSubmit={submit}>
        <input
          type="text"
          name="city"
          className={styles.input}
          placeholder="Enter city name..."
          onChange={change}
          autoComplete="off"
        />
        <br />
        <input
          type="text"
          name="code"
          className={styles.input}
          onChange={change}
          placeholder="Enter country code..."
          autoComplete="off"
        />

        <button className={styles.button}>Get weather</button>
      </form>
    </>
  );
};

export default Form;
