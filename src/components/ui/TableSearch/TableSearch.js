import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import './TableSearch.scss';

export default function TableSearch(props) {
  return <div className="pl-2 table-search">
    <FontAwesomeIcon icon="search" className="my-gray" />
    <input />
  </div>
}