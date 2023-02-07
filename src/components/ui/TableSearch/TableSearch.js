import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import './TableSearch.scss';

export default function TableSearch() {
  return <div className="pl-2 table-search relative">
    <input className="input-search-warehouse pl-10 !ml-0 !border-none" type="text" />
    <FontAwesomeIcon
      className="absolute top-2 left-4 text-white"
      icon="search"
      size="1x"
    />
  </div>
}