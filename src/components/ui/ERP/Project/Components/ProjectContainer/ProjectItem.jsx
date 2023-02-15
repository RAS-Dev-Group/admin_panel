import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectItem({ project, showdetail }) {
  const createdAt = new Date(project.created_at.$date);
  return (
    <div className="project-item">
      <div className="flex" style={{ marginBottom: "27px" }}>
        <button className="btn-edit" onClick={showdetail}>Edit</button>
        <label className="flex my-auto ml-auto label-check">
          Mark as complete
          <input type="checkbox" />
        </label>
      </div>
      <div className="flex users-container">
        <img className="avatar" src="/images/avatar1.png" alt="avatar" />
        <img className="avatar" src="/images/avatar2.png" alt="avatar" />
        <img className="avatar" src="/images/avatar1.png" alt="avatar" />
        <img className="avatar" src="/images/avatar2.png" alt="avatar" />
      </div>
      <div className="progress">
        <label className="title">{project.title}</label>
        <div className="flex w-full progress-container">
          <div
            className="progress-fill"
            style={{ width: project.progress + "%" }}
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
          <label className="label-date">{createdAt.toLocaleDateString()}</label>
        </div>
      </div>
      <div className="flex" style={{ marginTop: "8px", marginBottom: "10px" }}>
        <img className="mx-auto" src="/down-arrow.svg" alt="" />
      </div>
    </div>
  );
}
