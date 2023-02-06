import React from "react";

export default function SecondButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={"second-button " + (props.className ? props.className : "")}
    >
      {props.text}
    </button>
  );
}
