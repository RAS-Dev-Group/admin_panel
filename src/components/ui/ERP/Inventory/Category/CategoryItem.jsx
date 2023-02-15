import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CategoryItem({ category, showCategoryModal }) {
  return (
    <div className="flex py-5 pl-10 bg-white pr-14 gray category-item">
      <label>{ category.name }</label>
      <button className="ml-auto" onClick={showCategoryModal}>
        <FontAwesomeIcon
          className="pr-1 mr-1 text-red-500 fa-icon opacity-20"
          icon="edit"
        />
        Edit
      </button>
    </div>
  )
}