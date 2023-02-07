import React, { useState } from "react";

import ProjectItem from "./ProjectItem";
import ModalProject from "./ModalProject";
// import ModalTask from "./ModalTask";

export default function ProjectsContainer(props) {
  let key = 0;

  const [showProjectModal, setShowProjectModal] = useState(false);

  return (
    <div className="w-full project-container">
      <div className="flex">
        <label className="container-title">Ongoing Projects</label>
        <div></div>
        <button
          className="ml-auto btn-add-project"
          onClick={() => setShowProjectModal(true)}
        >
          + Add a Project
        </button>
      </div>
      <div className="flex flex-wrap items">
        <ProjectItem key={key++} title="Project1" progress={60} />
        <ProjectItem key={key++} title="Project1" progress={60} />
        <ProjectItem key={key++} title="Project1" progress={60} />

        <ProjectItem key={key++} title="Project1" progress={60} />
        <ProjectItem key={key++} title="Project1" progress={60} />
        <ProjectItem key={key++} title="Project1" progress={60} />

        <ProjectItem key={key++} title="Project1" progress={60} />
        <ProjectItem key={key++} title="Project1" progress={60} />
        <ProjectItem key={key++} title="Project1" progress={60} />
      </div>
    </div>
  );
}
