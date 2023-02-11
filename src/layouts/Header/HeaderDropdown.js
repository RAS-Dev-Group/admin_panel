import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "./dropdown.scss";

const options = [
  { value: "ERP", label: "ERP" },
  { value: "POS", label: "POS" },
  { value: "CRM", label: "CRM" },
];

const HeaderDropdown = () => {
  const [selValue, setSelValue] = useState("ERP");
  const handleChange = (e) => {
    setSelValue(e.value);
  };

  return (
    <Dropdown
      options={options}
      onChange={handleChange}
      value={"ERP"}
      placeholder="Select an option"
    />
  );
};

export default HeaderDropdown;
