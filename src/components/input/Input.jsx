import React from "react";
import "./input.css";

function Input({ label, ...rest }) {
  return (
    <>
      <div className="inputBox">
        <input className="effect-input" type="text" {...rest} placeholder="" />
        <label>{label}</label>
        <span className="focus-border">
          <i />
        </span>
      </div>
    </>
  );
}

export default Input;
