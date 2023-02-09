import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ModalProjectDetail(
    {
      name,
      description,
      members,
      tasks,
      open,
      modalCloseFunc,
    }) {
  return (
    <div className="modal" style={{display: open? 'block' : 'none'}}>    
    <div className="px-8 py-6 bg-white modal-project-detail">
      <div className="flex pr-1 schedule">
        <label className="ml-auto">
          <FontAwesomeIcon icon={faCalendarCheck} />
          10/20
        </label>
        <img src="/images/calendar-icon.png" className="inline ml-20" alt="" />
        <label>10 Jan 2023</label>
      </div>
      <div className="flex">
        {members.map((member) => (
          <img
            className="member-avatar"
            src={"/images/" + member.avatar}
            alt={member.name}
          />
        ))}
      </div>
      <label className="block mt-8 mb-4 text-lg font-semibold text-center black">
        {name}
      </label>
      <div className="mx-16 mb-6 description-wrapper">
        <div className="mt-6 mb-2 text-sm description font-sm mx-14">
          {description}
        </div>
        <div className="text-right">
          <button className="px-8 py-2 mx-6 mb-4 btn-edit white">Edit</button>
        </div>
      </div>
      <div className="progress-wrapper mb-7">
        <div className="progress" style={{ width: "60%" }} />
      </div>
      <div className="ml-7">
        <div className="mb-6">
          <label className="text-sm sub-title">Recent tasks</label>
        </div>
        {tasks.map((task) => (
          <div className="flex task-item">
            <label className="my-auto text-base font-semibold black">
              {task.name}
            </label>
            <input
              className="px-3 mx-auto text-center input-task"
              placeholder="input task here"
            />
            <button className="px-3 my-auto btn-finish-task">Done</button>
          </div>
        ))}
        <button className="btn-show-all">View all tasks</button>
      </div>
      <div className="mt-5 text-center">
        <button className="btn-up" onClick={modalCloseFunc}>
          <FontAwesomeIcon icon={faChevronUp} className="fa-lg" />
        </button>
      </div>
    </div>
    </div>
  );
}
