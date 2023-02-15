import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectItem(props) {

  return (
    <div className="project-item">
      <div className="flex" style={{ marginBottom: "27px" }}>
        <button className="btn-edit">Edit</button>
        <label className="my-auto ml-auto label-check"  onClick={props.showdetail}>
          Mark as complete
        </label>
        <input type="checkbox"/>
      </div>
      <div className="flex users-container">
        {
          props.data.users? 
          props.data.users.map((user, index) => (
            <img key={index} className="member-avatar" src="/images/avatar1.png" alt="avatar" />
          )):
          <img className="member-avatar" src="/images/avatar1.png" alt="avatar" />
        }

      </div>
      <div className="progress">
        <label className="title">{props.data.title}</label>
        <div className="flex w-full progress-container">
          <div
            className="progress-fill"
            style={{ width: props.data.progress + "%" }}
          ></div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 text-left">
          <FontAwesomeIcon icon="fa-regular fa-calendar-check" className="my-gray" />
          <label className="label-date">10/20</label>
        </div>
        <div className="w-1/2 text-right">
          <img
            className="inline cal-icon"
            src="/images/calendar-icon.png"
            alt=""
          />
          <label className="label-date">10 Jan 2023</label>
        </div>
      </div>
      <div className="flex" style={{ marginTop: "8px", marginBottom: "10px" }}>
        <img className="mx-auto" src="/down-arrow.svg" alt="" />
      </div>
    </div>
  );
}
