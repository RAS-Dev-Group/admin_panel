export default function TaskItem({ id, name, description, completed, handleComplete }) {
  return (
    <div className="flex task-item">
      <label className="my-auto text-base font-semibold black">
        {name}
      </label>
      <input
        className="px-3 mx-auto input-task"
        placeholder="input task here"
        defaultValue={description}
      />
      <div className="flex">
        <label className="my-auto ml-auto check-label"  >
          Mark as complete
          <input type="checkbox" onChange={() => { handleComplete(id) }} checked={completed} />
        </label>
      </div>
      {/* <button className="px-3 my-auto btn-finish-task">Done</button> */}
    </div>
  )
}