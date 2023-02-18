import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AddTask } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const ModalTask = (props) => {
  
  const [title,  setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueTime, setDueTime] = useState(new Date());

  const NewTaskAdd = () => {
    if (title  == '') {
      alert('Title is required.');
      return;
    }
    if (description == '') {
      alert('Description is required');
      return;
    }

    if (dueTime == '') {
      alert('Due Time is required.');
      return;
    }

    const newtask = {
      title: title,
      description: description,
      status: true,
      due_date: dueTime,
    }

    props.addTask(newtask);
    setTitle('');
    setDescription('');
    setDueTime(new Date());
    props.taskModalClose();
  }

  const handleClose = () => {
    setTitle('');
    setDescription('');
    setDueTime(new Date());
    props.taskModalClose();
  }

  return (
    <div className="more-modal" style={{display: props.open? 'block' : 'none'}}>
    <div className="modal-task">
      <label className="block text-center title">ADD NEW TASK</label>
      <input
        className="block text-center w-full mt-8 p-2.5"
        placeholder="input task name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="block w-full p-3 mt-5 text-center"
        placeholder="input description here"
        rows={5}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button className="block w-full p-2 mt-5" onClick={NewTaskAdd}>ADD</button>
      <button className="block w-full p-2 mt-5 cancel" onClick={handleClose}>CANCEL</button>
      {/* <div className="text-center mt-14">
        <FontAwesomeIcon icon={faChevronUp} />
      </div> */}
    </div>
    </div>
  );
};

export default ModalTask;
