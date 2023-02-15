import { useState } from "react"

export default function TaskItem({ task, deleteFunc }) {
  const [description, setDescription] = useState(task.description);

  return (
    <div className="flex task-item">
      <label className="my-auto">{task.title}</label>
      <input className="ml-auto input-task" placeholder="input task here" value={task.description} onChange={e => { setDescription(e.target.value); }} />
      <button className="delete" onClick={() => deleteFunc(task.id)}>Delete</button>
    </div>
  )
}