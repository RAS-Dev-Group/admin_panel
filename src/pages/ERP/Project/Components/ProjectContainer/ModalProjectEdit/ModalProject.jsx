import React, { useEffect, useState, useMemo } from "react";

import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Modal from "../../../../../../components/ui/Modal/Modal";

//  Task modal import

import './modal.css'
import axios from "axios";

const ModalProject = React.memo(({ 
  open, 
  modalCloseFunc, 
  taskModalOpen, 
  taskModalClose, 
  currenttasks,
  currentmembers, 
  memberlist,
  addMember,
  setTasks,
}) => {
  useEffect(()=> {
    console.log('updated');
  }, [currentmembers])
  const [dueDate, setDueDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  //  handle Add Project
  const handleSubmit = (e) =>  {
    const data = new FormData();
    
    //  title check
    if(title == ''){

      alert('Proejct Title is required.');
      return;
    }

    //  description check
    if(description == ''){
      alert('Proejct Description is required.');
      return;
    }

    alert('aaaaaaa');
    //  tasks check
    if(currenttasks == []) {
      alert('Tasks is nothing!');
      return;
    } 

    if(currentmembers == []){
      alert('Members is nothing!');
      return;
    }


    let formdata = {
      'title': title,
      'description': description,
      'ststus': true,
      'users': currentmembers,
      'tasks': currenttasks,
      'created_at': new Date(),
    }

    console.log(formdata);

    axios({
        url: 'https://furniture-dusky.vercel.app/project/',
        header: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiaXBpbiIsImV4cCI6MTY3NjM3MjA0MX0.L2HqPs1Zp3Ls562ZogPVYseRbVJJNMj6ff3Lh_PmhwA',
        },
        method: 'POST',
        data: formdata,
    })
      // Handle the response from backend here
      .then((res) => { 
        console.log(res);
      })
  
      // Catch errors if any
      .catch((err) => { 
        console.log(err);
      });
  };

  const handleDelTask = (index) => {
    let tasks = currenttasks;
    setTasks(tasks.splice(index, 1));
  }

  // const handleAddMember = (e) => {
  //   console.log(e.target.value - 1);
  //   addMember(memberlist[e.target.value-1]);
  //   console.log(currentmembers);
  // };

  return (
    <Modal
      show={open}
      onClose={modalCloseFunc}
      contentClassName="modal-project"
      content={(
        <>
          <div className="mb-3 text-center">
            <label className="modal-title">ADD A PROJECT</label>
          </div>
          <div>
            <div className="flex mb-2.5">
              <div className="mx-auto">
                {currentmembers.map((member, index) => (
                  <span key={index}>{member.id}</span>
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
            onChange={e => {setTitle(e.target.value)}} />
            <button className="ml-2 admin-primary-button">Add</button>
          </div>
          <div className="mb-9">
            <textarea
              className="w-full"
              placeholder="Type your project details here"
              value={description}
              onChange={e => {setDescription(e.target.value)}}
            ></textarea>
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
              {/* <div className="input-with-icon">
                <input className="ml-auto input-deadline" placeholder="input task here" />
                <span className="input-deadline-icon"><FontAwesomeIcon icon={faCalendarDays} /></span>
              </div> */}
            </div>
          </div>
          <div>
            <label className="sub-title">Tasks</label>
            {currenttasks.map((task, index) => (
              <div key={index}  className="flex task-item">
                <label className="my-auto">{task.title}</label>
                <input className="ml-auto input-task" placeholder="input task here" value={task.description} />
                <button className="delete" onClick={(e) => {
                  handleDelTask(index);
                }}>Delete</button>
              </div>
            ))}
            <div>
              <button className="btn-add-task" onClick={taskModalOpen}>add more tasks</button>
            </div>
          </div>
          <div className="mt-4">
            <label className="sub-title">Assign Team Members</label>
            <div className="flex mt-3">
              <select className="sel-member" placeholder="Add team member here" onChange={addMember}>
              {memberlist.map((member, index) => (
                <option key={index} value={member.id}>{member.full_name}</option>
              ))}
              </select>
              <button className="ml-auto admin-secondary-button" onClick={modalCloseFunc}>Back</button>
              <button className="ml-7 admin-primary-button" onClick={handleSubmit}>Create</button>
            </div>
          </div>
        </>
      )}
    />
  );
});

export default ModalProject;
