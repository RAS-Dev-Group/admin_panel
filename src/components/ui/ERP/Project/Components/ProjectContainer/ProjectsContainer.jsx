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


export default function ProjectsContainer({}) {
  const token = useContext(TokenContext);
  const dispatch = useContext(TokenDispatchContext)
  const [appState, setAppState] = useState({
    loading: false,
    repos: null
  });
  const [editModalState, setEditModalState] = useState({
    show: false, data: {}
  });
  const [detailModalState, setDetailModalState] = useState({
    show: false, data: {}
  });
  const [taskModalState, setTaskModalState] = useState({
    show: false, data: {}
  });

  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

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

  const [currentTasks, setCurrentTask] = useState([]);
  const [currentMembers, setCurrentMembers] = useState([]);

  const handleAddMember = (member) => {
    let memberlist = currentMembers;

    if (JSON.stringify(memberlist[0]) === '{}') {
      memberlist = [member];
    } else {
      memberlist.push(member);
    }
    setCurrentMembers(memberlist)
  }

  useEffect(() => {
    // load users(members)
    // load projects on mount
    console.log('projectContainer-effect -> token', token);

    if (token) {
      setAppState({ loading: true }); // show spinner
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

  return (
    <>
      <label className="page-title">Project Management</label>
      <div className="flex">
        <div className="w-full project-container">
          <div className="flex">
            <label className="container-title">Ongoing Projects</label>
            <div></div>
            <button className="px-4 py-2 ml-auto mr-4 btn-add-project" onClick={() => setEditModalState({ show: true, data: {} })}>
              + Add a Project
            </button>
            <button className="px-4 py-2 text-gray-500 btn-view-all bg-gray-50">View All</button>
          </div>
          <div className="flex flex-wrap justify-evenly items">
            {
              projects.map(project => (
                <ProjectItem
                  key={project._id.$oid}
                  project={project}
                  showdetail={() => setDetailModalState({ show: true, data: project })}
                />
              ))
            }
          </div>
          <ModalProject
            currentTasks={currentTasks}
            currentMembers={currentMembers}
            handleTaskModal={(task) => setTaskModalState({ show: true, data: task })}
            addMember={handleAddMember}
            memberlist={members}
            project={editModalState.data}
            open={editModalState.show}
            handleClose={() => setEditModalState({ show: false, data: {} })}
          />
          <ModalProjectDetail
            members={members}
            initialTasks={currentTasks}
            open={detailModalState.show}
            project={detailModalState.data}
            modalCloseFunc={() => setDetailModalState({ show: false, data: {} })} />
          <ModalTask
            open={taskModalState.show}
            taskModalClose={() => setTaskModalState({ show: false, data: {} })}
            addTask={(task) => setCurrentTask([...currentTasks, task])}
          />
        </div>
      </div>
    </>
  );
}
