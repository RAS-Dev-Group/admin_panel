import React, { useContext, useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import TableSearch from "../../../../ui/TableSearch/TableSearch";
import CategoryModal from './CategoryModal';
import { TokenContext } from "../../../../../context/TokenContext";
import Swal from "sweetalert2";
import { getCategories } from "../../../../../utils/api";

export default function CategoryList({ }) {
  const [categories, setCategories] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [modalState, setModalState] = useState({ category: {}, show: false });
  const token = useContext(TokenContext);

  useEffect(() => {
    // get categories from api server
    loadCategories();
  }, []);

  function loadCategories() {
    if (!token) return;

    setCategories([
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
    ]);
    return;
    // this is loading from server
    setLoadingState(true);
    getCategories(token)
      .then(res => {
        setLoadingState(false);
      })
      .catch(err => {
        setLoadingState(false);
      });
  }

  function handleNewCategory() {
    setModalState({ category: {}, show: true });
  }

  function handleDelete(catId) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteInventory(token, catId)
          .then(res => {
            if (res.status === 'success') {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              // TODO; remove from table
            }
          })
          .catch(err => {
            // alert error
            Swal.fire(
              'Error!',
              err,
              'error'
            );
          });
      }
    })
  }

  function handleSubmit(category) {
    // update or add
  }

  return (
    <>
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
          {loadingState ?
            <div className="text-center">Loading Categories ...</div> :
            categories.map(category => (
              <CategoryItem
                key={category.name}
                category={category}
                handleEdit={(category) => { setModalState({ category, show: true }) }}
                handleDelete={handleDelete}
              />
            ))
          }
        </div>
      </div>
      <CategoryModal
        open={modalState.show}
        category={modalState.category}
        submitFunc={handleSubmit}
        closeFunc={() => { setModalState({ show: false }) }}
      />
    </>
  )
}