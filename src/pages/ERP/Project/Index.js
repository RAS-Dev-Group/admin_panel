import React from "react";
import ProjectSchedule from "./Components/ProjectSchedule";
import ProjectsContainer from "./Components/ProjectsContainer";
import "./project.scss";

export default function Project() {
  return (
    <div className="content-wrapper">
      <div className="float-right">
        <ProjectSchedule />
      </div>
      <div className="mr-400">
        <label className="page-title">Project Management</label>
        <div className="flex">
          <ProjectsContainer />
        </div>
      </div>
    </div>
  );
}
