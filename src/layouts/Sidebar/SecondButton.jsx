import React from "react";
import { LogOut, Settings } from 'react-feather';

export default function SecondButton({ text, onClick, active, icon }) {
  return (
    <button
      onClick={onClick}
      className={"second-button " + (active ? 'active' : '')}
    >
      {icon === 'logout' ? <LogOut /> : <Settings />}
      {text}
    </button>
  );
}
