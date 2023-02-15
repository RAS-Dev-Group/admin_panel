import React, { useState, useEffect, useContext } from "react";

import WarehouseItem from "./WarehouseItem";
import WarehouseModal from './WarehouseModal';
import TableSearch from "../../../ui/TableSearch/TableSearch";
import { TokenContext } from "../../../../context/TokenContext";

import "./warehouse.scss";

import { createWarehouse, deleteWarehouse, getWarehouses, updateWarehouse } from "../../../../utils/api";

export default function Warehouse(props) {
  const [loadingState, setLoadingState] = useState(false);
  const [warehouseList, setWarehouseList] = useState([]);
  const [modalState, setModalState] = useState({ item: {}, show: false });

  const token = useContext(TokenContext);
  
  // load warehouses
  useEffect(() => {
    getWarehouses(token)
      .then(res => {
        setWarehouseList(res.data.data);
      })
      .catch(err => {

      });
  }, []);

  function handleSubmit(data) {
    setLoadingState(true);
    if (data.id) { // update
      updateWarehouse(token, data.id, data)
        .then(res => {
          setLoadingState(false);
        })
        .catch(err => {
          setLoadingState(false);
        });
    }
    else {
      createWarehouse(token, data.id, data)
      .then(res => {
        setLoadingState(false);
      })
      .catch(err => {
        setLoadingState(false);
      });
    }
    setModalState({ ...modalState, show: false });
  }

  function handleDelete(itemId) {
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
        deleteWarehouse(token, itemId)
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

  return (
    <>
      <label className="page-title">Warehousing</label>
      <div className="warehouse-container">
        <div className="flex">
          <TableSearch />
          <button
            className="px-4 py-1.5 ml-auto btn-add-warehouse"
            onClick={() => setModalState({ item: {}, show: true })}>
            + Add Warehouse
          </button>
        </div>
        <ul className="items">
          <li className="flex flex-wrap warehouse-item">
            <div className="name-container">
              <label className="title">Name</label>
            </div>
            <div className="location-container">
              <label className="title">Location</label>
            </div>
            <div className="action-container">
              <label className="title">Action</label>
            </div>
          </li>
          {warehouseList.map(item => {
            <WarehouseItem
              item={item}
              handleEdit={() => setModalState({ item, show: true })}
              handleDelete={handleDelete}
            />
          })}
        </ul>
      </div>
      <WarehouseModal
        open={modalState.show}
        data={modalState.item}
        submitFunc={handleSubmit}
        closeFunc={() => setModalState({ ...modalState, show: false })}
      />
    </>
  );
}
