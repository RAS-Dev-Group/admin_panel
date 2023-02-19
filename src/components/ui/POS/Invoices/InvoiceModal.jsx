import { useEffect } from 'react';
import { useState } from 'react';

import Modal from '../../Modal/Modal';

export default function InvoiceModal({ show, initialData, handleClose, handleSubmit }) {
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
        <label className='modal-title'>{data.id ? 'Update Invoice' : 'Add New Invoice'}</label>
      </div>
      <div className='modal-item'>
        <select options={itemOptions} placeholder="Select Item" className='item'
          value={data.item} name="item" onChange={handleChange} />
      </div>
      <div className='modal-item'>
        <select options={discountOptions} placeholder="Discount Percentage" className='item'
          value={data.discount} name="discount" onChange={handleChange} />
      </div>
      <div className='modal-item'>
        <input type="text" placeholder="Coupon Code" className='item'
          value={data.coupon} name="coupon" onChange={handleChange} />
      </div>
      <div className='modal-item'>
        <input type="text" placeholder="Email Address" className='item'
          value={data.email} name="coupon" onChange={handleChange} />
      </div>
      <div className='modal-item'>
        <input type="text" placeholder="Email Address" className='item'
          value={data.address} name="address" onChange={handleChange} />
      </div>
      <div className='modal-item'>
        <input type="number" placeholder="Amount" className='item'
          value={data.amount} name="amount" onChange={handleChange} />
      </div>
      <div className='modal-item'>
        <input type="number" placeholder="Tax" className='item'
          value={data.tax} name="tax" onChange={handleChange} />
      </div>
      <div className='modal-item'>
        <select options={statusOptions} placeholder="Status" className='item'
          value={data.status} name="status" onChange={handleChange} />
      </div>
      <div className='modal-item'>
        <button className='button item' onClick={() => handleSubmit(data)}>
          {data.id ? 'UPDATE' : 'CREATE'}
        </button>
      </div>
    </Modal>
  );
}
