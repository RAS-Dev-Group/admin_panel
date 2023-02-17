import React, { useContext, useEffect, useState } from "react";
import { TokenContext } from "../../../../../../context/TokenContext";
import { getSchedule } from "../../../../../../utils/api";
import moment from "moment";

//  import default calender
import Calendar from "../Calendar/Calendar";
import ScheduleItem from "./ScheduleItem";

export default function ProjectSchedule({ }) {
  const [dateState, setDateState] = useState(moment());
  const token = useContext(TokenContext);

  const handleDateChange = (date) => {
    setDateState(date);
  };

  useEffect(() => {
    if (token) {
      // get schedule from api
      getSchedule(token, dateState.format('YYYY-MM-DD'))
        .then(res => {

        })
        .catch(err => {

        });
    }
    else {
      // do nothing
    }
  }, [dateState]);

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
      <Calendar value={dateState} handleDateChange={handleDateChange} />
      <div className="mt-10 ml-14">
        <div className="mb-5">
          <label className="label-date">{dateState.format("LL")}</label>
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
