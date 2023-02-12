import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import './TableSearch.scss';

export default function TableSearch(props) {
  return <div className="relative table-search">
    <input className="py-1 pl-8 input-search-warehouse" type="text" />
    <FontAwesomeIcon
      className="text-white icon-search"
      icon="search"
      size="1x"
    />
  </div>
}