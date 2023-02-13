import React from "react";
import CategoryItem from "./CategoryItem";
import TableSearch from "../../../../components/ui/TableSearch/TableSearch";

export default function CategoryList({ showCategoryModal }) {
  const categories = [
    { name: 'Category1', tax_rate: 10 },
    { name: 'Category2', tax_rate: 10 },
    { name: 'Category3', tax_rate: 10 },
    { name: 'Category4', tax_rate: 10 },
    { name: 'Category5', tax_rate: 10 },
    { name: 'Category6', tax_rate: 10 },
    { name: 'Category7', tax_rate: 10 },
    { name: 'Category8', tax_rate: 10 },
    { name: 'Category9', tax_rate: 10 },
    { name: 'Category10', tax_rate: 10 },
  ];
  
  return (
    <div className="category-list">
      <div className="flex table-filter">
        <TableSearch />
        <select className="ml-auto mr-2 filter" placeholder="Date">
          <option>Date</option>
        </select>
        <select className="mr-2 filter" placeholder="Product Category">
          <option>Product Category</option>
        </select>
        <select className="mr-2 filter" placeholder="Status Delivery">
          <option>Status Devlivery</option>
        </select>
        <select className="mr-2 filter" placeholder="More Filters">
          <option>More Filters</option>
        </select>
      </div>
      <div className="pl-2 mt-3">
        {categories.map(category => (
          <CategoryItem category={category} showCategoryModal={showCategoryModal} />
        ))
        }
      </div>
    </div>
  )
}