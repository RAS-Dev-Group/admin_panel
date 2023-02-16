import React, { useEffect, useState } from "react";

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Modal from "../../../../../../ui/Modal/Modal";

//  Task modal import

import './modal.css'
import axios from "axios";
import TaskItem from "./TaskItem";
import { createProject } from "../../../../../../../utils/api";

const ModalProjectEdit = ({
  open,
  modalCloseFunc,
  taskModalOpen,
  taskModalClose,
  currenttasks,
  currentmembers,
  memberlist,
  addMember,
  project,
}) => {
  const [projectData, setProjectData] = useState({
    ...project,
    due_date: new Date,
  });
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  function handleChange(e) {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  }

  //  handle Add Project
  function handleSubmit(e) {
    e.preventDefault();

    // check inputs
    let emptyField = Object.keys(projectData).find(key => !projectData[key]);
    if (emptyField) {
      alert('Please input ' + emptyField);
      return;
    }

    if (!tasks || tasks.length == 0) {
      alert('Tasks is nothing!');
      return;
    }

    if (!users || users.length == 0) {
      alert('Members is nothing!');
      return;
    }

    createProject(token, {
      ...projectData,
      tasks, users,
      created_at: new Date,
      status: true
    }).then(res => {
      console.log('createProject - resp : ', res);
    })
      .catch(err => {
        console.log('createProject - err : ', err);
      });
  };

  function handleAddMember(e) {
    addMember(memberlist[e.target.value - 1]);
  };

  function handleDeleteTask(taskId) { // remove task
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <Modal
      show={open}
      onClose={modalCloseFunc}
      contentClassName="modal-project"
    >
      <div className="mb-3 text-center">
        <label className="modal-title">ADD A PROJECT</label>
      </div>
      <div>
        <div className="flex mb-2.5">
          <div className="mx-auto">
            {currentmembers.map((member, index) => (
              <img key={index} className="inline member-avatar" src={'/images/' + member.avatar} alt='avatar' />
            ))}
          </div>
        </div>
        <div className="text-center">
          <label className="label-members">Team members</label>
        </div>
      </div>
      <div className="mb-3 mt-7">
        <input
          className="sel-project-title"
          placeholder="Input project title"
          value={projectData.title}
          required={true}
          name="title"
          onChange={handleChange} />
        <button className="ml-2 admin-primary-button">Add</button>
      </div>
      <div className="mb-9">
        <textarea
          className="w-full"
          placeholder="Type your project details here"
          required={true}
          name="description"
          value={projectData.description}
          onChange={handleChange}
        />
      </div>
      <div className="mb-9">
        <div className="flex task-item">
          <label className="my-auto">DeadLine</label>
          <div className="input-with-icon">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DatePicker
                  value={projectData.due_date}
                  onChange={(newVal) => setProjectData({ ...projectData, due_date: newVal })}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>
        </div>
      </div>
      <div>
        <label className="sub-title">Tasks</label>
        {currenttasks.map((task) => <TaskItem key={task.id} task={task} deleteFunc={handleDeleteTask} />)}
        <div>
          <button className="btn-add-task" onClick={taskModalOpen}>Add more tasks</button>
        </div>
      </div>
      <div className="mt-4">
        <label className="sub-title">Assign Team Members</label>
        <div className="flex mt-3">
          <select className="p-1 sel-member" placeholder="Add team member here" onChange={handleAddMember}>
            {memberlist.map((member) => <option key={member.id} value={member.id}>{member.full_name}</option>)}
          </select>
          <button className="ml-auto admin-secondary-button" onClick={modalCloseFunc}>Back</button>
          <button className="ml-7 admin-primary-button" onClick={handleSubmit}>Create</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalProjectEdit;
