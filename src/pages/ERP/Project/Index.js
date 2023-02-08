import React from "react";
import ProjectSchedule from "./Components/ProjectSchedule/ProjectSchedule";
import ProjectsContainer from "./Components/ProjectContainer/ProjectsContainer";
import "./project.scss";

export default function Project() {
  return (
    <div className="content-wrapper">
      <div className="float-right">
        <ProjectSchedule />
      </div>
      <div className="mr-400">
        <ProjectsContainer />
      </div>
    </div>
  );
}
