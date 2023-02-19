import { useEffect } from 'react';
import { useState } from 'react';

import Modal from '../../Modal/Modal';

export default function CouponModal({ show, initialData, handleClose, handleSubmit }) {
  const itemOptions = [
    'item1', 'item2', 'item3', 'item4', 'item5'
  ];
  const discountOptions = [
    { value: '10', label: '10%' },
    { value: '15', label: '15%' },
    { value: '20', label: '20%' },
    { value: '30', label: '30%' },
  ];
  const statusOptions = [
    'PENDING',
    'PAID',
    'DECLINED',
  ];

  const [data, setData] = useState(initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <Modal show={show} onClose={handleClose}>
      <div className='text-center modal-header'>
        <label className='modal-title'>{data.id ? 'Update Coupon' : 'Add New Coupon'}</label>
      </div>
      <div className='modal-item'>
        <input type="text" placeholder="Enter Coupon Code" className='item'
          value={data.coupon} name="coupon" onChange={handleChange} />
      </div>
      <div className='modal-item'>
        <input type="number" placeholder="Total Number" className='item'
          value={data.total_num} name="total_num" onChange={handleChange} />
      </div>
      <div className='modal-item'>
        <select placeholder="Validity" className='item'
          value={data.valid_from} name="valid" onChange={handleChange} />
      </div>
      <div className='modal-item'>
        <input type="number" placeholder="Discount Percentage" className='item'
          value={data.discount} name="discount" onChange={handleChange} />
      </div>
      <div className='modal-item'>
        <button className='button item' onClick={() => handleSubmit(data)}>
          {data.id ? 'UPDATE' : 'CREATE'}
        </button>
      </div>
    </Modal>
  );
}
