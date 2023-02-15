import React, { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";

import TableSearch from "../../../ui/TableSearch/TableSearch";
import SupplierRow from "./SupplierRow";
import SupplierModal from "./SupplierModal";

import { TokenContext } from "../../../../context/TokenContext";
import { getSuppliers, createSupplier, updateSupplier, deleteSupplier } from "../../../../utils/api";

export default function SupplierTable({  }) {
  const token = useContext(TokenContext);
  const [loadingState, setLoadingState] = useState(false);
  const [modalState, setModalState] = useState({ item: {}, show: false });
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    getSuppliers(token)
      .then(res => {
        setSuppliers(res.data.data);
        setLoadingState(false);
      })
      .catch(err => {
        setLoadingState(false);
      });
  }, []);


  function handleSubmit(supplier) {
    if (supplier.id) {
      updateSupplier(token, supplier.id, supplier)
        .then(res => {
          setLoadingState(false);
        })
        .catch(err => {
          setLoadingState(false);
        });
    }
    else {
      createSupplier(token, supplier)
        .then(res => {
          setLoadingState(false);
        })
        .catch(err => {
          setLoadingState(false);
        });
    }
  }

  function handleItemDelete(supplierId) {
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
        deleteSupplier(token, supplierId)
          .then(res => {
            if (res.status === 'success') {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              setSuppliers(suppliers.filter(item => item.id !== supplierId)); // remove from list
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
        {loadingState ?
          'Loading ...' :
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
        }
      </div>
      <SupplierModal
        open={modalState.show}
        data={modalState.item}
        submitFunc={handleSubmit}
        closeFunc={() => setModalState({ ...modalState, show: false })}
      />
    </>
  );
}
