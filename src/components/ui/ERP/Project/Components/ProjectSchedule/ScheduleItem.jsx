import React from "react";

export default function ScheduleItem(props) {
  return (
    <div className="flex schedule-item">
      <div className="my-auto">
        <img src="/images/calendar-icon.png" alt="cal" />
      </div>
      <div style={{marginLeft: '9px'}}>
        <label className="block schedule-title">{props.title}</label>
        <label className="block schedule-duration">{props.duration}</label>
      </div>
    </div>
  );
}
