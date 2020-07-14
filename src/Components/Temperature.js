import React from "react";
import "./App.css";

const Temperature = (props) => {
  return (
    // Span used instead of div to annotate degree
    <div className="temperature">
      <span className="max"> {props.max}&deg;F</span>
      <span className="min"> {props.min}&deg;F</span>
    </div>
  );
};
export default Temperature;
