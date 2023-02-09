import React, { useState } from "react";

import ProjectItem from "./ProjectItem";
// import ModalProject Component
import ModalProject from './ModalProjectEdit/ModalProject';

//  import ModalDetailProejct Component
import ModalProjectDetail from './ModalProjectDetail/ModalProjectDetail';

export default function ProjectsContainer(props) {
  let key = 0;

  // const [showProjectModal, setShowProjectModal] = useState(false);

  const description =
    "Lorem ipsum dolor sit amet consectetur. In nunc nunc donec bibendum risus. Amet amet est viverra condimentum sed praesent. Velit quis lectus pulvinar elementum nulla. Et rhoncus id habitant augue neque. Elementum tempor amet bibendum consectetur sem mattis est elementum sed. Odio velit egestas elit nulla nunc consequat diam morbi nec. \
  Nec arcu sagittis orci fames gravida sed etiam. Feugiat maecenas pellentesque massa tempor. Fermentum placerat dictum vivamus et accumsan consequat mauris lorem feugiat. Nisi lorem pellentesque proin lacus convallis at. Luctus massa vitae diam volutpat ipsum eget.";
  const members = [
    {
      avatar: "avatar1.png",
      name: "member1",
    },
    {
      avatar: "avatar2.png",
      name: "member2",
    },
    {
      avatar: "avatar1.png",
      name: "member3",
    },
    {
      avatar: "avatar2.png",
      name: "member4",
    },
  ];
  const tasks = [
    { name: "Task 1", description: 'This is the first Task' },
    { name: "Task 2", description: 'This is the seconde Task'  },
    { name: "Task 3", description: 'This is the three Task'  },
  ];
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [openDetailModal, setOpenDetailModal ] = useState(false);

  //  Project Modal Handles
  const handleProjectModalOpen = () => setOpenProjectModal(true);
  const handleProjectModalClose = () => setOpenProjectModal(false);

  //  Project Detail Modal Handles
  const handleProjectDetailModalOpen = () => setOpenDetailModal(true);
  const handleProjectDetailModalClose = () => setOpenDetailModal(false);

  return (
    <>
      <label className="page-title">Project Management</label>
      <div className="flex">
        <div className="w-full project-container">
          <div className="flex">
            <label className="container-title">Ongoing Projects</label>
            <div></div>
            <button className="px-4 py-2 ml-auto btn-add-project" onClick={handleProjectModalOpen}>
              + Add a Project
            </button>
          </div>
          <div className="flex flex-wrap justify-evenly items">
            <ProjectItem key={key++} title="Project1" progress={60} showdetail={handleProjectDetailModalOpen} />
            <ProjectItem key={key++} title="Project1" progress={60} showdetail={handleProjectDetailModalOpen} />
            <ProjectItem key={key++} title="Project1" progress={60} showdetail={handleProjectDetailModalOpen} />

            <ProjectItem key={key++} title="Project1" progress={60} showdetail={handleProjectDetailModalOpen} />
            <ProjectItem key={key++} title="Project1" progress={60} showdetail={handleProjectDetailModalOpen} />
            <ProjectItem key={key++} title="Project1" progress={60} showdetail={handleProjectDetailModalOpen} />

            <ProjectItem key={key++} title="Project1" progress={60} showdetail={handleProjectDetailModalOpen} />
            <ProjectItem key={key++} title="Project1" progress={60} showdetail={handleProjectDetailModalOpen} />
            <ProjectItem key={key++} title="Project1" progress={60} showdetail={handleProjectDetailModalOpen} />
          </div>
          <ModalProject open={openProjectModal} modalCloseFunc={handleProjectModalClose}/>
          <ModalProjectDetail 
          name="Sample Project"
          description={description}
          members={members}
          tasks={tasks}
          open={openDetailModal} modalCloseFunc={handleProjectDetailModalClose} />
        </div>
      </div>
    </>
  );
}

