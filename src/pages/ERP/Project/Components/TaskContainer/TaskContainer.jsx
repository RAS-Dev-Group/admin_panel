import React from "react";
import TaskItem from './TaskItem';

export default function TaskContainer() {
  const tasks=[
    { name: 'Task1' },
    { name: 'Task2' },
    { name: 'Task3' },
    { name: 'Task4' },
    { name: 'Task7' },
    { name: 'Task9' },
    { name: 'Task11' },
    { name: 'Task13' },
    { name: 'Task15' },
    { name: 'Task10' },
    { name: 'Task8' },
  ];
  return (
    <>
      <label className="page-title">Ongoing Task</label>
      <div className="flex mt-6">
        <div className="w-full pt-5 bg-white task-list-container">
          {tasks.map(task => (<TaskItem name={task.name} />))}
        </div>
      </div>
    </>
  );
}
