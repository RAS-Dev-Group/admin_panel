import React from "react";
import { LogOut, Settings } from 'react-feather';

export default function SecondButton({ text, onClick, active, icon }) {
  return (
    <button
      onClick={onClick}
      className={"second-button w-full block text-left p-3 pl-5" + (active ? ' active' : '')}
    >
      {icon === 'logout' ? <LogOut /> : <Settings />}
      {text}
    </button>
  );
}
