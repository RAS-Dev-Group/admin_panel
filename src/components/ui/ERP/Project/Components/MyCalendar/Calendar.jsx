import React from "react";
import moment, { weekdays } from "moment";
// import { range } from "moment-range";
import DropDown from "react-dropdown";

import "./Calendar.scss";

export default function Calendar1() {
  let weekdayshort = moment.weekdaysShort();
  let years = [2020, 2021, 2022, 2023];

  // i calculate start day and end day, and ...

  return (
    <>
      <div className="flex mb-5">
        <select
          className="ml-auto sel-calendar month"
          name="month"
          value={moment().format("MMMM")}
        >
          {moment.months().map((month) => (
            <option>{month}</option>
          ))}
        </select>
        <select className="ml-1 sel-calendar year" name="year" value={"2023"}>
          {years.map((year) => (
            <option>{year}</option>
          ))}
        </select>
      </div>
      <div className="calendar-wrapper">
        <div className="row">
          {weekdayshort.map(weekday => (
            <div className="cell">{weekday}</div>
          ))}
        </div>
      </div>
    </>
  );
}
