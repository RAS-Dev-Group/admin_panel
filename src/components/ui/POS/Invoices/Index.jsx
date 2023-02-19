import React, { useRef } from "react";
import InvoicesTable from "./InvoicesTable";

import "./invoices.scss";
import { useState } from "react";
import { useEffect } from "react";
import InvoiceModal from "./InvoiceModal";
import Swal from "sweetalert2";

const emptyInvoice = {
  id: 0,
};

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [modalState, setModalState] = useState({
    show: false, data: emptyInvoice
  });

  const statusList = [
    'PENDING', 'PAID', 'DECLINED'
  ];

  const nextId = useRef(1);

  useEffect(() => {
    loadInvoices();
  }, []);

  function loadInvoices() {
    let fakeList = [];
    for (let i = 0; i < 10; i += 1) {
      let coupon = 'SKU-';
      for (let j = 0; j < 4; j += 1)
        coupon += Math.round(Math.random() * 10) % 10;
      fakeList.push({
        id: nextId.current,
        item: 'Italian Relaxing Chair',
        discount: 30,
        coupon,
        email: 'user' + Math.round(Math.random() * 9000) + '@gmail.com',
        address: Math.round(Math.random() * 12 + 1) + 'Base Street Texas',
        amount: Math.round(Math.random() * 100000 + 32000),
        tax: Math.round(Math.random() * 10000) / 100,
        status: statusList[Math.round(Math.random() * 10) % statusList.length]
      });
      nextId.current += 1;
    }
    setInvoices(fakeList);
    // get from api
  }

  function handleEdit(invoice) {
    setModalState({ show: true, data: invoice });
  }

  function handleDelete(invoiceId) {
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
        setInvoices(invoices.filter(item => item.id !== invoiceId));
        // hide modal
        Swal.fire(
          'Deleted',
          'Selected Item has been deleted',
          'success'
        );
      }
    })
  }

  function handleSubmit(submitData) {
    if (submitData.id) {
      setInvoices(invoices.map(item => item.id === submitData.id ? submitData : item));

      Swal.fire(
        'Saved',
        'You category has been updated.',
        'success'
      );
    }
    else {
      submitData.id = nextId.current;
      nextId.current += 1;

      setInvoices([...invoices, submitData]);

      Swal.fire(
        'Saved',
        'You category has been submitted.',
        'success'
      );
    }
    setModalState({ show: false, data: emptyInvoice });
  }

  return (
    <div className="pr-24">
      <div className="flex mb-1">
        <label className="page-title">Invoices</label>
        <div className="ml-auto">
          <button className="common-button"
            onClick={() => { setModalState({ show: true, data: emptyInvoice }) }}>
            Add New Invoices
          </button>
        </div>
      </div>
      <InvoicesTable
        invoices={invoices}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <InvoiceModal
        show={modalState.show}
        initialData={modalState.data}
        handleClose={() => setModalState({ show: false, data: emptyInvoice })}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
