import
React,
{
  useState,
  useContext,
  useEffect,
}
  from "react";
import { useNavigate } from "react-router";
import { getProjects } from '../../../../../../utils/api';

import ProjectItem from "./ProjectItem";
// import ModalProject Component
import ModalProject from './ModalProjectEdit/ModalProject';
import ModalTask from './ModalProjectEdit/ModalTask';

//  import ModalDetailProejct Component
import ModalProjectDetail from './ModalProjectDetail/ModalProjectDetail';
import { TokenContext, TokenDispatchContext } from "../../../../../../context/TokenContext";


export default function ProjectsContainer(props) {
  const token = useContext(TokenContext);
  const dispatch = useContext(TokenDispatchContext)
  const [appState, setAppState] = useState({
    loading: false,
    repos: null
  });
  const [projectModalState, setProjectModalState] = useState({
    show: false, project: null
  });
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // load users(members)
    // load projects on mount
    setAppState({ loading: true }); // show spinner
    console.log('token', token);

    if (token) {
      getProjects(token)
        .then(res => {
          setAppState({ loading: false }); // hide spinner, show contents
          // show projects
          if (res.data.error) {
            console.log(res.data.error);
            dispatch({
              type: 'clear'
            });
            navigate('/login');
            if (res.data.error === 'Signature has expired.') {
            }
          }
          else {
            // show projects
            setProjects(res.data.data);
          }
        })
        .catch(err => {
          // error occured
          setAppState({ loading: false }); // hide spinner, show contents
        });
    }
  }, []);

  const description =
    "Lorem ipsum dolor sit amet consectetur. In nunc nunc donec bibendum risus. Amet amet est viverra condimentum sed praesent. Velit quis lectus pulvinar elementum nulla. Et rhoncus id habitant augue neque. Elementum tempor amet bibendum consectetur sem mattis est elementum sed. Odio velit egestas elit nulla nunc consequat diam morbi nec. \
  Nec arcu sagittis orci fames gravida sed etiam. Feugiat maecenas pellentesque massa tempor. Fermentum placerat dictum vivamus et accumsan consequat mauris lorem feugiat. Nisi lorem pellentesque proin lacus convallis at. Luctus massa vitae diam volutpat ipsum eget.";
  const members = [
    {
      id: 1,
      username: "member1",
      full_name: "Member 1",
      role: "string",
      email: "member1@gmail.com",
      password: "password1",
      contact: 0,
      address: "Address 1",
      created_at: new Date(),
      avatar: 'avatar1.png'
    },
    {
      id: 2,
      username: "member2",
      full_name: "Member 2",
      role: "string",
      email: "member2@gmail.com",
      password: "password2",
      contact: 0,
      address: "Address 2",
      created_at: new Date(),
      avatar: 'avatar1.png'
    },
    {
      id: 3,
      username: "member3",
      full_name: "Member 3",
      role: "string",
      email: "member1@gmail.com",
      password: "password3",
      contact: 0,
      address: "Address 3",
      created_at: new Date(),
      avatar: 'avatar1.png'
    },
    {
      id: 4,
      username: "member4",
      full_name: "Member 4",
      role: "string",
      email: "member1@gmail.com",
      password: "password4",
      contact: 0,
      address: "Address 4",
      created_at: new Date(),
      avatar: 'avatar1.png'
    },
  ];
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);

  const [currentTasks, setCurrentTask] = useState([]);

  const [currentMembers, setCurrentMembers] = useState([{}]);

  const handleAddTask = (task) => {
    setCurrentTask([...currentTasks, task]);
  }

  const handleAddMember = (member) => {
    let memberlist = currentMembers;

    if (JSON.stringify(memberlist[0]) === '{}') {
      memberlist = [member];
    } else {
      memberlist.push(member);
    }
    setCurrentMembers(memberlist)
  }

  const handleMembersEmpty = () => setCurrentMembers([{}]);

  //  Project Modal Handles
  const handleProjectModalClose = () => setShowProjectModal(false);

  //  Project Detail Modal Handles
  const handleProjectDetailModalClose = () => setShowDetailModal(false);

  const handleTaskModalOpen = () => setShowTaskModal(true);
  const handleTaskModalClose = () => setShowTaskModal(false);

  return (
    <>
      <label className="page-title">Project Management</label>
      <div className="flex">
        <div className="w-full project-container">
          <div className="flex">
            <label className="container-title">Ongoing Projects</label>
            <div></div>
            <button className="px-4 py-2 ml-auto btn-add-project" onClick={() => setShowProjectModal(true)}>
              + Add a Project
            </button>
          </div>
          <div className="flex flex-wrap justify-evenly items">
            {
              projects.map(project => (
                <ProjectItem
                  key={project._id.$oid}
                  project={project}
                  showdetail={() => setShowDetailModal(true)}
                />
              ))
            }
          </div>
          <ModalProject
            currentTasks={currentTasks}
            currentMembers={currentMembers}
            open={showProjectModal}
            modalCloseFunc={handleProjectModalClose}
            taskModalOpen={handleTaskModalOpen}
            addMember={handleAddMember}
            memberlist={members}
          />
          <ModalProjectDetail
            name="Sample Project"
            description={description}
            members={members}
            tasks={currentTasks}
            open={showDetailModal}
            modalCloseFunc={handleProjectDetailModalClose} />
          <ModalTask
            open={showTaskModal}
            taskModalClose={handleTaskModalClose}
            addTask={handleAddTask}
          />
        </div>
      </div>
    </>
  );
}
