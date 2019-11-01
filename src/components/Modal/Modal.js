import React from "react";
import styles from "./Modal.module.scss";
import Result from "../Result/Result";
import ErrorResult from "../ErrorResult/ErrorResult";

const Modal = ({ weather, err, closeModalFn, city, code }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <button className={styles.closeButton} onClick={closeModalFn}></button>
        {err ? (
          <ErrorResult city={city} code={code} />
        ) : (
          <Result weather={weather} />
        )}
      </div>
    </>
  );
};

export default Modal;
