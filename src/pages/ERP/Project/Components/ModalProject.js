import React from "react";
import ReactDropdown from "react-dropdown";

const ModalProject = (props) => {
  let tasks = [];

  return (
    <div>
      <div className="mb-3">
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
        <ReactDropdown className="sel-project-title" />
        <button className="pl-2 admin-primary-button">Add</button>
      </div>
      <div className="mb-9">
        <textarea
          className="w-full"
          placeholder="Type your project details here"
        ></textarea>
      </div>
      <div>
        <label className="modal-title">Tasks</label>
        {tasks.map((task, index) => (
          <div>
            <label>Task1</label>
            <button>input task here</button>
          </div>
        ))}
        <div>
          <button>add more tasks</button>
        </div>
      </div>
      <div>
        <label className="modal-title">Assign Team Members</label>
        <div>
          <ReactDropdown placeholder="Add team member here" />
          <button className="admin-secondary-button">Back</button>
          <button className="admin-primary-button">Create</button>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
