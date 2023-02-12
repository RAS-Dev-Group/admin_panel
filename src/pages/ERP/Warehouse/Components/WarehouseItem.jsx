import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WarehouseItem(props) {
  return (
    <li className="flex flex-wrap warehouse-item">
      <div className="name-container">
        <img className="mr-3 avatar" src="/images/warehouse.png" alt="avatar" />
        <div className="my-auto info-container">
          <label className="name">Ware House1</label>
          <label className="email opacity-30">kakashitake@uihut.com</label>
        </div>
      </div>
      <div className="my-auto location-container">
        <label className="location">Location</label>
      </div>
      <div className="my-auto action-container">
        <button className="ml-auto btn-edit-warehouse font-icon-wrapper" onClick={props.editmodal}>
          <FontAwesomeIcon className="pr-1 fa-icon opacity-20" icon="trash" />
          edit
        </button>
      </div>
    </li>
  );
}
