import React, { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";

import TableSearch from "../../../ui/TableSearch/TableSearch";
import SupplierRow from "./SupplierRow";
import SupplierModal from "./SupplierModal";

import { TokenContext } from "../../../../context/TokenContext";
import { getSuppliers, createSupplier, updateSupplier, deleteSupplier } from "../../../../utils/api";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function SupplierTable({ }) {
  const emptySupplier = {
    id: 0,
    name: '',
    supplier: '',
    image: '',
    quantity: '',
    status: false
  };

  const token = useContext(TokenContext);
  const [loadingState, setLoadingState] = useState(false);
  const [modalState, setModalState] = useState({ show: false, supplier: emptySupplier });
  const [suppliers, setSuppliers] = useState([]);

  // this is temporary
  let nextId = useRef(1);

  const navigate = useNavigate();

  useEffect(() => {
    // if (token) {
    loadSuppliers();
    // }
    // else {
    //   navigate('/login');
    // }
  }, []);

  function loadSuppliers() {
    let fakeSuppliers = [];
    for (let i = 0; i < 10; i += 1) {
      fakeSuppliers.push({
        id: nextId.current,
        name: 'Supplier' + (i + 1),
        date: 'Jan 03, 2023',
        supplier: 'Supplier ' + i,
        quantity: Math.round(Math.random() * 12),
        status: true
      });
      nextId.current += 1;
    }
    setSuppliers(fakeSuppliers);
    return;
    if (!token) return;

    setLoadingState(true);
    getSuppliers(token)
      .then(res => {
        // for debug
        setSuppliers(JSON.parse(res.data));
        setLoadingState(false);
      })
      .catch(err => {
        console.log('get suppliers error', err);
        setLoadingState(false);
      });
  }


  function handleSubmit(supplier) {
    if (supplier.id) {
      setSuppliers(suppliers.map(_supplier => _supplier.id != supplier.id ? _supplier : supplier));
      setModalState({ show: false, supplier: emptySupplier });
      Swal.fire(
        'Saved',
        'Item successfully updated',
        'success'
      );
      return;
      updateSupplier(token, supplier.id, supplier)
        .then(res => {
          loadSuppliers();
        })
        .catch(err => {
        });
    }
    else {
      supplier.id = nextId.current;
      nextId.current += 1;

      setSuppliers([...suppliers, supplier]);
      setModalState({ show: false, supplier: emptySupplier });
      Swal.firea(
        'Saved',
        'Item successfully added',
        'success'
      );
      return;
      createSupplier(token, supplier)
        .then(res => {
          loadSuppliers();
        })
        .catch(err => {
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
        Swal.fire(
          'Deleted',
          'Item successfully deleted',
          'success'
        );
        setSuppliers(suppliers.filter(supplier => supplier.id !== supplierId));
        return;
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
          <div className="text-center">Loading Suppliers ...</div> :
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
              {suppliers.map((supplier) =>
                <SupplierRow
                  key={supplier.id}
                  supplier={supplier}
                  handleEdit={() => setModalState({ show: true, supplier })}
                  handleDelete={handleItemDelete}
                />)}
            </tbody>
          </table>
        }
      </div>
      <SupplierModal
        open={modalState.show}
        initialData={modalState.supplier}
        handleSubmit={handleSubmit}
        handleClose={() => setModalState({ ...modalState, show: false })}
      />
    </>
  );
}
