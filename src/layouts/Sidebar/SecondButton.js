import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SecondButton({ text, onClick, active, icon }) {
  return (
    <button
      onClick={onClick}
      className={"second-button " + (active ? 'active' : '')}
    >
      <FontAwesomeIcon icon={icon} />
      {text}
    </button>
  );
}
