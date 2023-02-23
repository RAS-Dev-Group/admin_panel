import React, { useContext, useEffect, useState } from "react";

import TableSearch from "../../../TableSearch/TableSearch";
import ItemModal from './ItemModal';

import Swal from "sweetalert2";
import { getInventories } from "../../../../../utils/api";
import { TokenContext } from "../../../../../context/TokenContext";
import { useNavigate } from "react-router-dom";
import InventoryItem from "./InventoryItem";

export default function InventoryTable({ showNewItemModal }) {
  const [inventories, setInventories] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [filter, setFilter] = useState({});

  const emptyItem = {
    id: '',
    name: '',
    category: '',
    quantity: '',
    tax_rate: '',
    amount: '',
  };

  const [modalState, setModalState] = useState({
    show: false, item: emptyItem
  });
  const token = useContext(TokenContext);

  const navigate = useNavigate();

  // load inventories
  useEffect(() => {
    // loadInventories();

    // fake inventories
    let fakeInventories = [];
    for (let i = 0; i < 10; i += 1) {
      fakeInventories.push({
        id: i + 1,
        name: 'Item ' + i,
        tag: 'Tag ' + i,
        description: 'This is iventory item',
        sku: '1267',
        vendor: 'Vendor ' + Math.round(Math.random() * 4),
        category: 'Category ' + Math.round(Math.random() * 3),
        quantity: Math.round(Math.random() * 30 + 5),
        tax_rate: Math.round(Math.random() * 12 + 3),
        amount: Math.round(Math.random() * 12)
      });
    }
    setInventories(fakeInventories);
  }, []);

  function loadInventories() {
    if (!token) return;
    setLoadingState(true);
    getInventories(token)
      .then(res => {
        setInventories(JSON.parse(res.data));
        setLoadingState(false);
      })
      .catch(err => {
        setLoadingState(false);
      });
  }

  // showing modal
  useEffect(() => {
    if (showNewItemModal)
      setModalState({ show: true, item: emptyItem });
  }, [showNewItemModal]);

  const options = [
    { value: "", label: "none" },
    { value: "input details", label: "input details" },
  ];

  function handleFilterChange(e) {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  }

  function handleItemDelete(itemId) {
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
        setInventories(inventories.filter(inventory => inventory.id !== itemId));
        return;
        // dont do api
        deleteInventory(token, itemId)
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

  function handleSubmit(data) {
    // res ; response from server
    if (data.id) {
      // update inventory
      setInventories(inventories.map(inventory => data.id == inventory.id ? data : inventory));
      setModalState({ show: false, item: emptyItem });
    }
    else {
      // add new
      setInventories([...inventories, data]);
    }
  }

  return (
    <>
      <div className="flex table-filter">
        <TableSearch />
        <select className="ml-auto mr-2 filter" placeholder="Date" onChange={handleFilterChange}>
          <option>Date</option>
        </select>
        <select className="mr-2 filter" placeholder="Product Category" onChange={handleFilterChange}>
          <option>Product Category</option>
        </select>
        <select className="mr-2 filter" placeholder="Status Delivery" onChange={handleFilterChange}>
          <option>Status Devlivery</option>
        </select>
        <select className="mr-2 filter" placeholder="More Filters" onChange={handleFilterChange}>
          <option>More Filters</option>
        </select>
      </div>
      <div className="pl-2 mt-3">
        {loadingState ?
          <div className="text-center">Loading Inventories ...</div> :
          <table className="table w-full text-center inventory-table">
            <thead>
              <tr>
                <th className="text-left">Item Name</th>
                <th>Category</th>
                <th>Image</th>
                <th>Tags</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>SKU</th>
                <th>Vendor</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventories.map((row) => (
                <InventoryItem key={row.id}
                  item={row}
                  handleDelete={handleItemDelete}
                  handleEdit={(item) => setModalState({ show: true, item })}
                />
              ))}
            </tbody>
          </table>}

      </div>
      <ItemModal
        open={modalState.show}
        initialData={modalState.item}
        handleClose={() => { setModalState({ show: false, item: emptyItem }) }}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
