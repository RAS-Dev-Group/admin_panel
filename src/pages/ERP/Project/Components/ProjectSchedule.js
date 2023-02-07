import React from "react";

import Calendar from "./Calendar/Calendar";
import ScheduleItem from "./ScheduleItem";

export default function ProjectSchedule(props) {
  const schedules = [
    {
      title: "Daily meeting",
      duration: "09:00 am - 10:00 am",
    },
    {
      title: "Daily meeting",
      duration: "09:00 am - 10:00 am",
    },
    {
      title: "Daily meeting",
      duration: "09:00 am - 10:00 am",
    },
    {
      title: "Daily meeting",
      duration: "09:00 am - 10:00 am",
    },
    {
      title: "Daily meeting",
      duration: "09:00 am - 10:00 am",
    },
    {
      title: "Daily meeting",
      duration: "09:00 am - 10:00 am",
    },
  ];

  return (
    <div className="project-schedule">
      <Calendar />
      <div style={{ padding: "20px 0 20px 50px" }}>
        <div style={{marginBottom: '15px'}}>
          <label className="label-date">08 Jan 2023</label>
        </div>
        <div>
          {schedules.map((item, index) => (
            <ScheduleItem
              key={index + 1}
              title={item.title}
              duration={item.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
