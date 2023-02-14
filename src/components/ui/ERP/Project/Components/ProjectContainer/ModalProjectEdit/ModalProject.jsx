import React, { useEffect, useState } from "react";

import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Modal from "../../../../../../ui/Modal/Modal";

//  Task modal import

import './modal.css'
import axios from "axios";

const ModalProjectEdit = ({
  open,
  modalCloseFunc,
  taskModalOpen,
  taskModalClose,
  currenttasks,
  currentmembers,
  memberlist,
  addMember,
}) => {

  const [dueDate, setDueDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);


  //  handle Add Project
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();

    //  title check
    if (title != '') {
      formdata.append('title', title);
    } else {
      return;
    }

    //  description check
    if (description != '') {
      formdata.append('description', description);
    } else {
      return;
    }

    formdata.append('status', true);

    //  tasks check
    if (tasks == []) {
      alert('Tasks is nothing!');
      return;
    } else {
      formdata.append('tasks', tasks);
    }

    if (users == []) {
      alert('Members is nothing!');
      return;
    } else {
      formdata.append('users', users);
    }

    formdata.append('created_at', new Date());

    axios({
      url: 'https://furniture-dusky.vercel.app/project/',
      header: {
        Authorization: '',
      },
      method: 'POST',
      data: formdata,
    })
      .then((res) => res.json());
  };

  const handleAddMember = (e) => {
    addMember(memberlist[e.target.value - 1]);
  };

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
              <img key={index} className="inline member-avatar" src={'/images/avatar1.png'} alt='avatar' />
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
          value={title}
          onChange={(e) => { setTitle(e.target.value) }} />
        <button className="ml-2 admin-primary-button">Add</button>
      </div>
      <div className="mb-9">
        <textarea
          className="w-full"
          placeholder="Type your project details here"
          onChange={(e) => { setDescription(e.target.value) }}
        >{description}</textarea>
      </div>
      <div className="mb-9">
        <div className="flex task-item">
          <label className="my-auto">DeadLine</label>
          <div className="input-with-icon">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DatePicker
                  value={dueDate}
                  onChange={(newValue) => {
                    setDueDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>
        </div>
      </div>
      <div>
        <label className="sub-title">Tasks</label>
        {currenttasks.map((task, index) => (
          <div key={index} className="flex task-item">
            <label className="my-auto">{task.title}</label>
            <input className="ml-auto input-task" placeholder="input task here" value={task.description} />
            <button className="delete">Delete</button>
          </div>
        ))}
        <div>
          <button className="btn-add-task" onClick={taskModalOpen}>add more tasks</button>
        </div>
      </div>
      <div className="mt-4">
        <label className="sub-title">Assign Team Members</label>
        <div className="flex mt-3">
          <select className="sel-member" placeholder="Add team member here" onChange={handleAddMember}>
            {memberlist.map((member, index) => (
              <option key={member.id} value={member.id}>{member.full_name}</option>
            ))}
          </select>
          <button className="ml-auto admin-secondary-button" onClick={modalCloseFunc}>Back</button>
          <button className="ml-7 admin-primary-button" onClick={handleSubmit}>Create</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalProjectEdit;
