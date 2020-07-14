import React from "react";
import "./App.css";
import Days from "./Days";
import Description from "./Description";
import Icons from "./Icons";
import Temperature from "./Temperature";

const Card = (props) => {
  return (
    <div className="Card weather-card">
      <Days day={props.day} />
      <Icons icons={props.icons} />
      <Description description={props.description} />
      <Temperature min={props.min} max={props.max} />
    </div>
  );
};

export default Card;
