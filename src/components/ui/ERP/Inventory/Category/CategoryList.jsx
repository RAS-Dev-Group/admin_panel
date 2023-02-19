import React, { useContext, useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import TableSearch from "../../../../ui/TableSearch/TableSearch";
import CategoryModal from './CategoryModal';
import { TokenContext } from "../../../../../context/TokenContext";
import Swal from "sweetalert2";
import { getCategories } from "../../../../../utils/api";

export default function CategoryList({ showNewCategory }) {
  const emptyCategory = {
    id: '',
    name: '',
    text_rate: '',
  }

  const [categories, setCategories] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [modalState, setModalState] = useState({ show: false, category: emptyCategory });
  const token = useContext(TokenContext);


  useEffect(() => {
    // get categories from api server
    loadCategories();
  }, []);

  useEffect(() => {
    console.log('showNewCategory triggered', showNewCategory);
    if (showNewCategory)
      setModalState({ show: true, category: emptyCategory });
  }, [showNewCategory]);

  function loadCategories() {
    let fakeCategoires = [];
    for (let i = 0; i < 10; i += 1) {
      fakeCategoires.push({
        id: i + 1,
        name: 'Category' + (i + 1),
        tax_rate: Math.round(Math.random() * 12) + 3
      });
    }
    setCategories(fakeCategoires);
    return;
    // this is loading from server
    if (!token) return;
    setLoadingState(true);
    getCategories(token)
      .then(res => {
        setLoadingState(false);
      })
      .catch(err => {
        setLoadingState(false);
      });
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
        setCategories(categories.filter(category => category.id != catId));
        // hide modal
        setModalState({ show: false, category: emptyCategory });
        Swal.fire(
          'Deleted',
          'Selected Item has been deleted',
          'success'
        );
        return;
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
    if (category.id) {
      // update
      setCategories(categories.map(_category => _category.id == category.id ? category : _category));
      Swal.fire(
        'Saved',
        'You category has been updated.',
        'success'
      );
    }
    else {
      category.id = Math.round(Math.random() * 1000);
      setCategories([...categories, category]);
      Swal.fire(
        'Saved',
        'You category has been submitted.',
        'success'
      );
    }
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
                key={category.id}
                category={category}
                handleEdit={(category) => { setModalState({ show: true, category }) }}
                handleDelete={handleDelete}
              />
            ))
          }
        </div>
      </div>
      <CategoryModal
        open={modalState.show}
        initialData={modalState.category}
        handleSubmit={handleSubmit}
        handleClose={() => setModalState({ show: false, category: emptyCategory })}
      />
    </>
  )
}
