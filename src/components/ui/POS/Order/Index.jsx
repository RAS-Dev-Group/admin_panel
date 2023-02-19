import React from "react";
import OrderTable from "./OrderTable";

import "./order.scss";
import { useState } from "react";
import EmailConfigureModal from "./ModalConfigure";
import EmailPDFModal from "./ModalSend";
import OrderEditModal from "./ModalEdit";
import { useRef } from "react";
import { useEffect } from "react";

const emptyOrder = {

};

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [confModalState, setConfModalState] = useState({
    show: false, data: emptyOrder
  });
  const [sendModalState, setSendModalState] = useState({
    show: false, data: emptyOrder
  });
  const [editModalState, setEditModalState] = useState({
    show: false, data: emptyOrder
  });

  // temporary
  const nextId = useRef(1);

  useEffect(() => {
    loadOrders();
  }, []);

  function loadOrders() {
    let fakeList = [];
    for (let i = 0; i < 15; i += 1) {
      fakeList.push({
        id: nextId.current,
        name: "Italian Relaxing Chair",
        cate: "Category 1",
        quantity: "45",
        tax_rate: "10%",
        amount: 343000,
        coupon: "Received",
      });
      nextId.current += 1;
    }
    setOrders(fakeList);
  }

  function handleEdit(order) {
    setEditModalState({ show: true, data: order });
  }

  function handleDelete(delId) {
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
        setOrders(orders.filter(order => order.id !== delId));
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
      setOrders(orders.map(order => submitData.id === order.id ? submitData : order));

      Swal.fire(
        'Saved',
        'You category has been updated.',
        'success'
      );
    }
    else {
      submitData.id = nextId.current;
      nextId.current += 1;
      
      setOrders([...orders, submitData]);

      Swal.fire(
        'Saved',
        'You category has been submitted.',
        'success'
      );
    }
  }

  return (
    <>
      <div className="pr-24">
        <div className="flex mb-10">
          <label className="page-title">Order Management</label>
          <div className="ml-auto">
            <button className="common-button"
              onClick={() => setConfModalState({ show: true, data: emptyOrder })}>
              Configure Receipt</button>
            <button className="ml-5 common-button"
              onClick={() => setEditModalState({ show: true, data: emptyOrder })}>
              Create Order</button>
          </div>
        </div>
        <div>
          <div className="">
            <OrderTable orders={orders} handleEdit={handleEdit} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
      <EmailConfigureModal
        show={confModalState.show}
        handleClose={() => setConfModalState({ show: false })}
      />
      <EmailPDFModal
        show={sendModalState.show}
        handleClose={() => setSendModalState({ show: false })}
      />
      <OrderEditModal
        show={editModalState.show}
        handleClose={() => setEditModalState({ show: false, data: emptyOrder })}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
