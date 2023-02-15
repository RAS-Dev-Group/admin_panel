import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Modal from "../../../../../../ui/Modal/Modal";

export default function ModalProjectDetail({
  name,
  description,
  members,
  tasks,
  open,
  modalCloseFunc,
}) {
  return (
    <Modal
      contentClassName="modal-project-detail px-8 py-6 bg-white"
      show={open}
      onClose={modalCloseFunc}
      hasCloseBtn={false}>
      <div className="flex pr-1 schedule">
        <label className="ml-auto">
          <FontAwesomeIcon icon={faCalendarCheck} />
          10/20
        </label>
        <img src="/images/calendar-icon.png" className="inline ml-20" alt="" />
        <label>10 Jan 2023</label>
      </div>
      <div className="flex">
        {members.map((member) => (
          <img
            key={Math.random()}
            className="member-avatar"
            src={"/images/" + member.avatar}
            alt={member.name}
          />
        ))}
      </div>
      <label className="block mt-8 mb-4 text-lg font-semibold text-center black">
        {name}
      </label>
      <div className="mx-16 mb-6 description-wrapper">
        <textarea className="mt-6 mb-2 text-sm description font-sm mx-14" cols="66" defaultValue={description} rows={10} />
        <div className="text-right">
          <button className="px-8 py-2 mx-6 mb-4 btn-edit white">Edit</button>
        </div>
      </div>
      <div className="progress-wrapper mb-7">
        <div className="progress" style={{ width: "60%" }} />
      </div>
      <div className="mb-3 ml-7">
        <div className="mb-6">
          <label className="text-sm sub-title">Recent tasks</label>
        </div>
        {tasks.map((task) => (
          <div className="flex task-item" key={Math.random()}>
            <label className="my-auto text-base font-semibold black">
              {task.name}
            </label>
            <input
              className="px-3 mx-auto input-task"
              placeholder="input task here"
              defaultValue={task.description}
            />
            <div className="flex">
              <label className="my-auto ml-auto check-label"  >
                Mark as complete
              </label>
              <input type="checkbox" />
            </div>
            {/* <button className="px-3 my-auto btn-finish-task">Done</button> */}
          </div>
        ))}
        {/* <button className="btn-show-all">View all tasks</button> */}
      </div>
      <hr />
      <div className="mt-5 text-center">
        <button className="button-edit" onClick={modalCloseFunc}>Update</button>
      </div>
    </Modal>
    );
}
