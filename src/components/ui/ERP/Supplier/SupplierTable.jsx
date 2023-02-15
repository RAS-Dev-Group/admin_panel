import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

import TableSearch from "../../../ui/TableSearch/TableSearch";
import SupplierRow from "./SupplierRow";
import SupplierModal from "./SupplierModal";

import { getSuppliers } from "../../../../utils/api";
import { TokenContext } from "../../../../context/TokenContext";

export default function SupplierTable({ }) {
  const token = useContext(TokenContext);
  const [modalState, setModalState] = useState({ item: {}, show: false });
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getSuppliers(token)
      .then(res => {
        return;
        setSuppliers(res.data.data);
      })
      .catch(err => {

      });
  }, []);

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

  return (
    <>
      <div className="flex table-filter">
        <TableSearch />
        <select className="ml-auto mr-2 filter" placeholder="Date">
          <option>Date</option>
        </select>
        <select
          className="mr-2 filter"
          placeholder="OrderID"
          options={[{ value: "1", label: "OrderID" }]}
        >
          <option>Order ID</option>
        </select>
        <select className="mr-2 filter" placeholder="Status">
          <option>Status</option>
        </select>
        <select className="mr-2 filter" placeholder="More Filters">
          <option>More Filters</option>
        </select>
        <button
          className="px-6 py-1 btn-add"
          onClick={() => setModalState({ item: {}, show: true })}>
          Add</button>
      </div>
      <div className="pl-2 mt-3">
        <table className="table w-full text-center supplier-table">
          <thead>
            <tr>
              <th className="text-left">Product</th>
              <th>Date</th>
              <th>Supplier</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Edit Supplier</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((row, index) => <SupplierRow
              key={index + 1}
              item={row}
              handleEdit={(item) => setModalState({ item: item, show: true })}
              handleDelete={handleItemDelete}
            />)}
          </tbody>
        </table>
      </div>
      <SupplierModal
        open={modalState.show}
        item={modalState.item}
        closeFunc={() => setModalState({ show: false })}
      />
    </>
  );
}
