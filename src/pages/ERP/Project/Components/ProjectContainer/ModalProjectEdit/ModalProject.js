import React, { useEffect, useState } from "react";

//  Task modal import
import ModalTask from './ModalTask';

import './modal.css'

const ModalProjectEdit = (props) => {
  let tasks = [{}, {}, {}];

  const [taskOpen, setTaskOpen] = useState(false);
  const handleTaskOpen = () => setTaskOpen(true);
  const handleTaskClose = () => setTaskOpen(false);

  return (
    <>
      <div className="modal" style={{display: props.open? 'block' : 'none'}}>
        <div className="relative modal-project">
          <button className="close-button" onClick={props.modalCloseFunc}>X</button>
          <div className="mb-3 text-center">
            <label className="modal-title">ADD A PROJECT</label>
          </div>
          <div>
            <div className="flex mb-2.5">
              <div className="mx-auto">
                <img
                  className="inline member-avatar"
                  src="/images/avatar1.png"
                  alt="avatar"
                />
                <img
                  className="inline member-avatar"
                  src="/images/avatar2.png"
                  alt="avatar"
                />
                <img
                  className="inline member-avatar"
                  src="/images/avatar1.png"
                  alt="avatar"
                />
                <img
                  className="inline member-avatar"
                  src="/images/avatar2.png"
                  alt="avatar"
                />
              </div>
            </div>
            <div className="text-center">
              <label className="label-members">Team members</label>
            </div>
          </div>
          <div className="mb-3 mt-7">
            <select className="text-center sel-project-title" placeholder="Input project title" />
            <button className="ml-2 admin-primary-button">Add</button>
          </div>
          <div className="mb-9">
            <textarea
              className="w-full"
              placeholder="Type your project details here"
            ></textarea>
          </div>
          <div>
            <label className="sub-title">Tasks</label>
            {tasks.map((task, index) => (
              <div className="flex task-item" key={index + 1}>
                <label className="my-auto">Task1</label>
                <button className="ml-auto">input task here</button>
              </div>
            ))}
            <div>
              <button className="btn-add-task" onClick={handleTaskOpen}>add more tasks</button>
            </div>
          </div>
          <div className="mt-4">
            <label className="sub-title">Assign Team Members</label>
            <div className="flex mt-3">
              <select className="sel-member" placeholder="Add team member here" />
              <button className="ml-auto admin-secondary-button" onClick={props.modalCloseFunc}>Back</button>
              <button className="ml-7 admin-primary-button">Create</button>
            </div>
          </div>
        </div>
      </div>
        <ModalTask open={taskOpen} taskModalClose={handleTaskClose}/>
    </>
  );
};

export default ModalProjectEdit;
