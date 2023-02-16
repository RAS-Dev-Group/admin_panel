import React, { useState } from "react";

//  import default calender
import ScheduleItem from "./ScheduleItem";

import Calendar from "react-calendar";
import "./calendar.css";

export default function ProjectSchedule({}) {
  const [dateState, setDateState] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const changeDate = (e) => {
    setDateState(e);
    setSelectedYear(e.getFullYear());
    setSelectedMonth(e.getMonth());
    console.log(dateState);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);

    let date = dateState;
    date.setFullYear(e.target.value);
    changeDate(date);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);

    let date = dateState;
    date.setMonth(e.target.value);
    changeDate(date);
  };

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
      <div className="text-right" style={{ marginBottom: '15px', marginTop: '-2px' }}>
        <select
          className="calendar-select"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          <option value={1}>January</option>
          <option value={2}>Febrary</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>
        <select
          className="calendar-select"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value={selectedYear - 10}>{selectedYear - 10}</option>
          <option value={selectedYear - 9}>{selectedYear - 9}</option>
          <option value={selectedYear - 8}>{selectedYear - 8}</option>
          <option value={selectedYear - 7}>{selectedYear - 7}</option>
          <option value={selectedYear - 6}>{selectedYear - 6}</option>
          <option value={selectedYear - 5}>{selectedYear - 5}</option>
          <option value={selectedYear - 4}>{selectedYear - 4}</option>
          <option value={selectedYear - 3}>{selectedYear - 3}</option>
          <option value={selectedYear - 2}>{selectedYear - 2}</option>
          <option value={selectedYear - 1}>{selectedYear - 1}</option>
          <option value={selectedYear}>{selectedYear}</option>
          <option value={selectedYear * 1 + 1}>{selectedYear * 1 + 1}</option>
          <option value={selectedYear * 1 + 2}>{selectedYear * 1 + 2}</option>
          <option value={selectedYear * 1 + 3}>{selectedYear * 1 + 3}</option>
          <option value={selectedYear * 1 + 4}>{selectedYear * 1 + 4}</option>
          <option value={selectedYear * 1 + 5}>{selectedYear * 1 + 5}</option>
          <option value={selectedYear * 1 + 6}>{selectedYear * 1 + 6}</option>
          <option value={selectedYear * 1 + 7}>{selectedYear * 1 + 7}</option>
          <option value={selectedYear * 1 + 8}>{selectedYear * 1 + 8}</option>
          <option value={selectedYear * 1 + 9}>{selectedYear * 1 + 9}</option>
          <option value={selectedYear * 1 + 10}>{selectedYear * 1 + 10}</option>
        </select>
      </div>
      <Calendar value={dateState} onChange={changeDate} />
      <div className="mt-10 ml-14">
        <div className="mb-5">
          <label className="label-date">08 Jan 2023</label>
        </div>
        <div className="schedule-items">
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
