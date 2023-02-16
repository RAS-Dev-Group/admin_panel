import React from "react";

export default function MainButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={"main-button text-left pl-14 py-3.5 " + (props.active ? " active" : "")}
    >
      {props.name}
    </button>
  );
}
