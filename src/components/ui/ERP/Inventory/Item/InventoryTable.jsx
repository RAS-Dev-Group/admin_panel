import React, { useContext, useEffect, useState } from "react";

import TableSearch from "../../../TableSearch/TableSearch";
import ItemModal from './ItemModal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Swal from "sweetalert2";
import { getInventories } from "../../../../../utils/api";
import { TokenContext } from "../../../../../context/TokenContext";
import { useNavigate } from "react-router-dom";

export default function InventoryTable({ description }) {
  const [inventories, setInventories] = useState([]);
  const [modalState, setModalState] = useState({
    item: {},
    show: false
  });
  const token = useContext(TokenContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      getInventories(token)
      .then(res => {
        setInventories(res.data);
      })
      .catch(err => {

      });
    }
    else {
      navigate('/login');
    }
  }, []);

  const options = [
    { value: "", label: "none" },
    { value: "input details", label: "input details" },
  ];

  function handleNewEdit() {
    setModalState({
      item: {}, show: true
    });
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

  function handleSubmit(res) {
    // res ; response from server
    if (res.is_update) {
      // setInventories(inventories);
    }
    else if (res.is_add) {
      setInventories([...inventories, res.data]);
    }
  }

  return (
    <>
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
            {inventories.map((row, index) => (
              <tr className="my-2" key={index}>
                <td className="font-bold text-left">{row.name}</td>
                <td>{row.category}</td>
                <td>
                  <img className="mx-auto mt-2" src={row.image} alt="img" />
                </td>
                <td className="color1">{row.tag}</td>
                <td>
                  <select
                    className="filter"
                    options={options}
                    placeholder="input details"
                    value={description}
                  />
                </td>
                <td className="color1">{row.quantity}</td>
                <td className="color1">{row.sku}</td>
                <td>{row.vendor}</td>
                <td className="color1">
                  <button className="ml-auto font-icon-wrapper"
                    onClick={() => { handleItemDelete(row.id) }}>
                    <FontAwesomeIcon
                      className="pr-1 fa-icon opacity-20"
                      icon="trash"
                    />
                  </button>
                  <button onClick={() => { setModalState({ item: row, show: true }) }}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ItemModal
        open={modalState.show}
        item={modalState.item}
        handleClose={() => { setModalState({ show: false }) }}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
