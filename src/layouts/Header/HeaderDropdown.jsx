import React, { useState } from "react";
import Dropdown from "react-dropdown";
import { useNavigate, useLocation } from "react-router-dom";
import "./dropdown.scss";

const options = [
  { value: "erp", label: "ERP" },
  { value: "pos", label: "POS" },
  { value: "crm", label: "CRM" },
];

const HeaderDropdown = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [selValue, setSelValue] = useState(location.pathname.indexOf('erp') >= 0 ? 'erp' : (location.pathname.indexOf('pos') >= 0 ? 'pos' : 'crm'));

  const handleChange = (e) => {
    setSelValue(e.value);
    console.log(e.value);
    navigate('/' + e.value);
  };

  return (
    <Dropdown
      options={options}
      onChange={handleChange}
      value={selValue}
    />
  );
};

export default HeaderDropdown;
