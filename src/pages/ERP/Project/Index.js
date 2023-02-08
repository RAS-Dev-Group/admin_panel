import React, { useState } from "react";
import ProjectSchedule from "./Components/ProjectSchedule/ProjectSchedule";
import ProjectsContainer from "./Components/ProjectContainer/ProjectsContainer";
import TaskContainer from "./Components/TaskContainer/TaskContainer";
import "./project.scss";

export default function Project() {
  let [page, setPage] = useState("project");

  return (
    <>
      <div className="float-right">
        <ProjectSchedule />
      </div>
      <div className="mr-400">
        {page === "project" ? <ProjectsContainer /> : <TaskContainer />}
      </div>
    </>
  );
}
