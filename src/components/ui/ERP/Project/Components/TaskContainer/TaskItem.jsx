import React from 'react';

export default function TaskItem({ name }) {
  return (
    <div className='flex px-10 py-3 task-item'>
      <label className='font-semibold task-name'>{ name }</label>
      <label className='mx-auto'>-</label>
      <label className='font-thin task-date'>Due Date 10 January 2023</label>
      <button className='px-1 my-auto font-normal ml-7 btn-edit'>Edit Task</button>
      <input type="checkbox" className='ml-7'></input>
    </div>
  )
}