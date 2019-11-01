import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h1>Weather App</h1>
        <h3>
          This simple app let you check meteo condition in any city. Just enter
          the city name and country code. All data are provided by Open Weather
          Map.
        </h3>
      </div>
    </>
  );
};

export default Header;
