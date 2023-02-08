import React from "react";

import ProjectItem from "./ProjectItem";
// import ModalTask from "./ModalTask";

export default function ProjectsContainer(props) {
  let key = 0;

  // const [showProjectModal, setShowProjectModal] = useState(false);

  // const description =
  //   "Lorem ipsum dolor sit amet consectetur. In nunc nunc donec bibendum risus. Amet amet est viverra condimentum sed praesent. Velit quis lectus pulvinar elementum nulla. Et rhoncus id habitant augue neque. Elementum tempor amet bibendum consectetur sem mattis est elementum sed. Odio velit egestas elit nulla nunc consequat diam morbi nec. \
  // Nec arcu sagittis orci fames gravida sed etiam. Feugiat maecenas pellentesque massa tempor. Fermentum placerat dictum vivamus et accumsan consequat mauris lorem feugiat. Nisi lorem pellentesque proin lacus convallis at. Luctus massa vitae diam volutpat ipsum eget.";
  // const members = [
  //   {
  //     avatar: "avatar1.png",
  //     name: "member1",
  //   },
  //   {
  //     avatar: "avatar2.png",
  //     name: "member2",
  //   },
  //   {
  //     avatar: "avatar1.png",
  //     name: "member3",
  //   },
  //   {
  //     avatar: "avatar2.png",
  //     name: "member4",
  //   },
  // ];
  // const tasks = [
  //   { name: "Task 1" },
  //   { name: "Task 4" },
  //   { name: "Task 6" },
  //   { name: "Task 7" },
  //   { name: "Task 8" },
  // ];

  return (
    <>
      <label className="page-title">Project Management</label>
      <div className="flex">
        <div className="w-full project-container">
          <div className="flex">
            <label className="container-title">Ongoing Projects</label>
            <div></div>
            <button className="ml-auto btn-add-project">
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
      </div>
    </>
  );
}

/*
<ModalProjectDetail
  name="Project1"
  description={description}
  members={members}
  tasks={tasks}
/>
*/
