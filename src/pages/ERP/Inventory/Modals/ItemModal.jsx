import React, { useEffect, useState } from "react";

import './inventory-modal.scss';

const ItemModal = (props) => {

  return (
    <>
      <div className="modal" style={{display: props.open? 'block' : 'none'}}>
        <div className="relative inventory-modal">
        <div className="text-right">
            <button style={{width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#F24E1E', color: 'white' }} onClick={props.closeFunc}>x</button>
            </div>
          <div className="text-center inventory-modal-title">
            <label className="title">{props.type?'New Item':'Edit Item'}</label>
          </div>
          <div className="text-center modal-item">
            <input className="item" type='text' placeholder="Input product name"></input>
          </div>
          <div className="text-center modal-item">
            <input className="item" type='text' placeholder="Category"></input>
          </div>
          <div className="text-center modal-item">
            <input className="item" type='text' placeholder="Quantity"></input>
          </div>
          <div className="text-center modal-item">
            <input className="item" type='number' placeholder="Tax rate" min={0}></input>
          </div>
          <div className="text-center modal-item">
            <input className="item danger" type='number' placeholder="Amount" min={0}></input>
          </div>
          <div className="text-center">
            <button className="item button" onClick={props.closeFunc}>{props.type?'Add Item':'Update Item'}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemModal;