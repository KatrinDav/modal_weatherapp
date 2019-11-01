import React from "react";
import styles from "./Result.module.scss";

const Result = props => {
  const {
    city,
    icon,
    temp,
    sunrise,
    sunset,
    pressure,
    wind,
    humidity,
    clouds,
    date,
    description,
    tempMin,
    tempMax
  } = props.weather;

  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

  const today = new Date();
  const day = today.getDay();
  const daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return (
    <>
      <div className={styles.content}>
        <p className={styles.intro}>
          Weather condition in {city} today, on {daylist[day]} {date}
        </p>
        <div className={styles.mainInfo}>
          <p className={styles.description}>{description}</p>

          <p className={styles.temp}> {temp}&#176;c </p>
          <p className={styles.tempMinMax}>
            {tempMin} &#176;/{tempMax} &#176;
          </p>
          {/* <p>
            <img
              className={styles.icon}
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt="ikonka"
            />
          </p> */}
        </div>

        <div className={styles.secondaryInfo}>
          <div className={styles.first}>
            <p>Cloudiness: {clouds} %</p>
            <p>Pressure: {pressure} hPa </p>
            <p>Sunrise: {sunriseTime}</p>
          </div>
          <div className={styles.second}>
            <p>Wind: {wind} m/s</p>
            <p>Humidity: {humidity} % </p>
            <p>Sunset: {sunsetTime}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
