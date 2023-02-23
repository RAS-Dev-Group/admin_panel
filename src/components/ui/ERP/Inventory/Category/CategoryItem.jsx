import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CategoryItem({ category, handleEdit, handleDelete }) {
  return (
    <div className="flex py-5 pl-10 bg-white pr-14 gray category-item">
      <label>{category.name}</label>
      <button className="ml-auto" onClick={() => { handleDelete(category.id) }}>
        <FontAwesomeIcon
          className="pr-1 color-delete fa-icon opacity-20"
          icon="trash"
        />
      </button>
      <button className="ml-1" onClick={() => { handleEdit(category) }}>
        Edit
      </button>
    </div>
  )
}
