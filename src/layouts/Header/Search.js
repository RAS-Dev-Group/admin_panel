import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search(props) {
  return <div className="flex h-full mx-5 search-bar">
    <FontAwesomeIcon icon="search" className="my-auto my-gray" />
    <input className="w-full my-auto header-search" placeholder="Search for people, products .." />
  </div>
}
