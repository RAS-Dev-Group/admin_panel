import React from "react";
import ProjectSchedule from "./Components/ProjectSchedule";
import ProjectsContainer from "./Components/ProjectsContainer";
import "./project.scss";

export default function Project() {
  return (
    <div className="flex content-wrapper">
      <div>
        <label className="page-title">Project Management</label>
        <ProjectsContainer />
      </div>
      <ProjectSchedule />
    </div>
  );
}
