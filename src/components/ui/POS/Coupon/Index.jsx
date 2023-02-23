import React, { useEffect, useRef, useState } from "react";
import CouponTable from "./CouponTable";

import "./coupon.scss";
import CouponModal from "./CouponModal";

const emptyCoupon = {
  id: 0,
};

export default function Coupon() {
  const [coupons, setCoupons] = useState([]);
  const [modalState, setModalState] = useState({ show: false, data: emptyCoupon });
  const nextId = useRef(1);

  useEffect(() => {
    loadCoupons();
  }, []);

  function loadCoupons() {
    // this is fake
    let fakeList = [];
    for (let i = 0; i < 15; i += 1) {
      let coupon = 'SKU-';
      for (let j = 0; j < 4; j += 1)
        coupon += Math.round(Math.random() * 10) % 10;
      fakeList.push({
        id: nextId.current,
        coupon,
        total_num: Math.round(Math.random() * 100) + 100,
        valid_from: 'Jan 03 2023',
        valid_to: 'Feb 27 2023',
        discount: Math.round(Math.random() * 40 + 10),
      });
      nextId.current += 1;
    }
    setCoupons(fakeList);
    // will get coupons from api server
  }

  function handleSubmit(submitData) {
    if (submitData.id) {
      setCoupons(coupons.map(item => item.id === submitData.id ? submitData : item));

      Swal.fire(
        'Saved',
        'You category has been updated.',
        'success'
      );
    }
    else {
      submitData.id = nextId.current;
      nextId.current += 1;

      setCoupons([...coupons, submitData]);

      Swal.fire(
        'Saved',
        'You category has been submitted.',
        'success'
      );
    }
    setModalState({ show: false, data: emptyCoupon });
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
        setCoupons(coupons.filter(item => item.id !== delId));
        // hide modal
        Swal.fire(
          'Deleted',
          'Selected Item has been deleted',
          'success'
        );
      }
    })
  }

  return (
    <div className="pr-24">
      <div className="flex mb-10">
        <label className="page-title">Coupon management</label>
        <div className="ml-auto">
          <button className="common-button"
            onClick={() => setModalState({ show: true, data: emptyCoupon })}>
            Add New Coupon</button>
        </div>
      </div>
      <CouponTable
        coupons={coupons}
        handleDelete={handleDelete}
        handleEdit={coupon => setModalState({ show: true, data: coupon })}
      />
      <CouponModal
        show={modalState.show}
        initialData={modalState.data}
        handleClose={() => setModalState({ show: false, data: emptyCoupon })}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
