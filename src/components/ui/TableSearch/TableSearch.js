import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import './TableSearch.scss';

export default function TableSearch(props) {
  return <div className="relative pl-2 table-search">
    <input className="input-search-warehouse pl-10 !ml-0" type="text" />
    <FontAwesomeIcon
      className="absolute text-white top-2 left-4"
      icon="search"
      size="1x"
    />
  </div>
}