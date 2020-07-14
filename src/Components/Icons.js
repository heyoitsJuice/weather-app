import React from "react";
import "./App.css";
import Cloudy from "../Images/Cloudy.svg";
import Rainy from "../Images/Rainy.svg";
import Sunny from "../Images/Sunny.svg";
import Snowing from "../Images/Snowing.svg";
import Thunder from "../Images/Thunder.svg";
import Universal from "../Images/Universal.svg";

const Icons = (props) => {
  console.log("icons", props);
  switch (props.icons) {
    case "Clouds":
      return <img className="icon" src={Cloudy} alt={Cloudy} />;
      break;
    case "Rain":
      return <img className="icon" src={Rainy} alt={Rainy} />;
      break;
    case "Clear":
      return <img className="icon" src={Sunny} alt={Sunny} />;
      break;
    case "Snow":
      return <img className="icon" src={Snowing} alt={Snowing} />;
      break;
    case "Thunder":
      return <img className="icon" src={Thunder} alt={Thunder} />;
      break;
    default:
      return <img className="icon" src={Universal} alt={Universal} />;
  }
};

export default Icons;
