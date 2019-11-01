import React from "react";
import styles from "./ErrorResult.module.scss";

const ErrorResult = ({ city, code }) => {
  return (
    <>
      <p className={styles.errorInfo}>
        There is no {city} in {code}
      </p>
    </>
  );
};

export default ErrorResult;
