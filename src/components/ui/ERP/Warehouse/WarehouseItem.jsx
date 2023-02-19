import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WarehouseItem({ item, editmodal, handleDelete }) {
  return (
    <div className="flex flex-wrap warehouse-item">
      <div className="name-container">
        <img className="mr-3 avatar" src="/images/warehouse.png" alt="avatar" />
        <div className="my-auto info-container">
          <label className="name">{item.name}</label>
          <label className="email opacity-30">{item.email}</label>
        </div>
      </div>
      <div className="my-auto location-container">
        <label className="location">{item.location}</label>
      </div>
      <div className="my-auto action-container">
        <button className="ml-auto font-icon-wrapper"
          onClick={() => handleDelete(item.id)}>
          <FontAwesomeIcon className="pr-1 fa-icon opacity-20" icon="trash" />
        </button>
        <button className="font-icon-wrapper"
          onClick={editmodal}>
          edit
        </button>
      </div>
    </div>
  );
}
