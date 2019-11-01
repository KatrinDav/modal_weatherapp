import React, { Component } from "react";
import Header from "../src/components/Header/Header";
import Form from "../src/components/Form/Form";
import Modal from "../src/components/Modal/Modal";
import styles from "./App.module.scss";

const APIKey = "eab6b315ed8fbf920adad64416450b78";

class App extends Component {
  state = {
    isModalOpetn: false,
    icon: "",
    city: "",
    code: "",
    date: "",
    sunrise: "",
    sunset: "",
    temp: "",
    description: "",
    pressure: "",
    wind: "",
    humidity: "",
    clouds: "",
    tempMin: "",
    tempMax: "",
    err: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value.toUpperCase()
    });
  };

  handleCloseModal = e => {
    this.setState({
      isModalOpen: false
    });
  };

  handleCitySubmit = e => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.code}&units=metric&appid=${APIKey}`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("nie udało się!");
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString();
        console.log(time);
        console.log(data);

        this.setState(prevState => ({
          err: false,
          icon: data.weather[0].icon,
          date: time,
          description: data.weather[0].description,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
          wind: data.wind.speed,
          humidity: data.main.humidity,
          clouds: data.clouds.all,
          city: prevState.city,
          code: prevState.code,
          isModalOpen: true
        }));
      })
      .catch(err => {
        this.setState(prevState => ({
          err: true,
          city: prevState.city,
          code: prevState.code,
          isModalOpen: true
        }));
      });
    e.target.reset();
  };
  render() {
    const { err, city, code } = this.state;
    return (
      <>
        <div className={styles.wrapper}>
          <Header />
          <Form change={this.handleChange} submit={this.handleCitySubmit} />
          {this.state.isModalOpen ? (
            <Modal
              closeModalFn={this.handleCloseModal}
              weather={this.state}
              err={err}
              city={city}
              code={code}
            />
          ) : null}
        </div>
      </>
    );
  }
}

export default App;
