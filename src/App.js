import React, { Component, useEffect, useState } from "react";
import "./Components/App.css";
import Card from "./Components/Card";
import Form from "./Components/Form";
import axios from "axios";
import Header from "./Components/Header";
// import Grid from "@material-ui/core/Grid";

/*
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledNotFound = styled.div`
  display: flex;
  margin-top: 25%;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const StyledSearchBarContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.top ? "row" : "column")};
  margin-top: ${(props) => (props.top ? "1em" : "5em")};
`;
*/

const App = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    setCity(city);
    try {
      setIsLoading(true);
      setError(false);
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=5ef9734d08145dde0c0fe889ea01b21d`;
      const response = await axios.get(url);
      if (response.data !== 200) {
        setIsLoading(false);
      }

      setData(response.data.list);
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setData(null);
      setIsLoading(false);
      setError(true);
    }
  };

  var moment = require("moment");
  // var date = moment.unix(weather.dt).format("dddd");
  // console.log("date", date);
  // const weatherDate = ({ reading }) => {
  //   let newDate = new Date();
  //   const weekday = reading.dt * 1000;
  //   newDate.setTime(weekday);
  //   console.log("weekday", weekday);
  // };

  // const ms = data.weather.dt * 1000;
  // const weekday = new Date(ms);
  // const date = weekday.toLocaleString("en-US", { weekday: "long" });

  // var date = new Date(data.dt * 1000).toLocaleString("en-US", {
  //   weekday: "long",
  // });
  // console.log("date", weatherDate);

  console.log("data", data);
  return (
    <div className="app">
      <div className="headerContainer">
        <Header />
      </div>
      <div className="formContainer">
        <Form loadWeather={getWeather} />
      </div>

      <div className="container">
        {/* <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}> */}
        {data !== null &&
          data
            .filter((_, i) => i % 8 == 0)
            // .slice(0, 5)
            .map((weather) => {
              console.log(weather.weather[0].main);
              return (
                <Card
                  day={moment.unix(weather.dt).format("dddd")}
                  icons={weather.weather[0].main}
                  description={weather.weather[0].main}
                  min={weather.main.temp_min}
                  max={weather.main.temp_max}
                  key={weather.dt_txt}
                />
              );
            })}

        {/* </Grid>
          </Grid> */}

        {/* <Card
            day={"Monday"}
            icons={"Sunny"}
            description={"Sunny"}
            min={0}
            max={0}
          />
          <Card
            day={"Tuesday"}
            icons={"Rainy"}
            description={"Rainy"}
            min={40}
            max={40}
          />
          <Card
            day={"Wednesday"}
            icons={"Snowing"}
            description={"Snowing"}
            min={40}
            max={40}
          />
          <Card
            day={"Thursday"}
            icons={"Thunder"}
            description={"Thunder"}
            min={40}
            max={40}
          />
          <Card
            day={"Friday"}
            icons={"Cloudy"}
            description={"Cloudy"}
            min={40}
            max={40}
          /> */}
      </div>
    </div>
  );
};

/* In 5 day / 3 hour forecast API, Hourly forecast API and Current weather API 
  - temp_min and temp_max are optional parameters mean min / max temperature in the city at the current moment just for your reference. 
  For large cities and megalopolises geographically expanded it might be applicable. 
  In most cases both temp_min and temp_max parameters have the same volume as 'temp'. 
  Please, use temp_min and temp_max parameters in current weather API optionally. */
/*
  const API_key = "5ef9734d08145dde0c0fe889ea01b21d ";
  const base_url = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}"
  

  const App = () => {
    const api_call = async() => {
      const link = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={5ef9734d08145dde0c0fe889ea01b21d }"
      const request = axios.get(link)
      const response = await request
      console.log(response)
    }
    useEffect(() => {
      api_call()
    }, [])
  }
  */

/*
const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Card
          day={"Monday"}
          icons={"Sunny"}
          description={"Sunny"}
          min={0}
          max={0}
        />
        <Card
          day={"Tuesday"}
          icons={"Rainy"}
          description={"Rainy"}
          min={40}
          max={40}
        />
        <Card
          day={"Wednesday"}
          icons={"Snowing"}
          description={"Snowing"}
          min={40}
          max={40}
        />
        <Card
          day={"Thursday"}
          icons={"Thunder"}
          description={"Thunder"}
          min={40}
          max={40}
        />
        <Card
          day={"Friday"}
          icons={"Cloudy"}
          description={"Cloudy"}
          min={40}
          max={40}
        />
      </div>
    </div>
  );
};
*/
export default App;
