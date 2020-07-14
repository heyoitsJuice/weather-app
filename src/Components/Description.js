import React from "react";
import "./App.css";

const Description = (props) => {
  switch (props.description) {
    case "Cloudy":
      return <div className="description"> {props.description} </div>;
      break;
    case "Rainy":
      return <div className="description"> {props.description} </div>;
      break;
    case "Sunny":
      return <div className="description"> {props.description} </div>;
      break;
    case "Snowing":
      return <div className="description"> {props.description} </div>;
      break;
    case "Thunder":
      return <div className="description"> {props.description} </div>;
      break;
    default:
      return <div className="description"> {props.description} </div>;
  }
};

export default Description;
