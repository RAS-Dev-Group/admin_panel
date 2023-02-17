import React, { useState } from "react";
import moment from "moment";
import './Calendar.scss';

export default function Calendar({ handleDateChange }) {
  const weekdayshort = moment.weekdaysShort();

  const today = moment();
  const [calendarState, setCalendarState] = useState({
    year: today.format("Y") * 1, // selected year
    month: today.format("M") * 1, // selected month
    selectedDate: today, // selected date
  });

  const temp = moment(calendarState.year + "-" + calendarState.month + '-1'); // month's first date
  const daysInMonth = temp.daysInMonth(); // days in this month
  const firstDayOfMonth = temp.startOf("month").format("d");

  let years = [];
  const curYear = moment().format('Y') * 1;
  const curMonth = moment().format('M') * 1;
  for (let i = -7; i < 2; i += 1) {
    years.push(curYear + i);
  }

  function handleSelectDate(d) {
    const date = moment(calendarState.year + '-' + calendarState.month + '-' + d);
    setCalendarState({
      ...calendarState,
      selectedDate: date
    });
    handleDateChange(date);
  };

  let blanks = [];
  let prevMonth = moment(calendarState.year + '-' + calendarState.month + '-1').add(-1 * firstDayOfMonth - 1, 'day');
  for (let i = 0; i < firstDayOfMonth; i++) {
    blanks.push(
      <div key={i + 100} className="calendar-day empty"><span>{prevMonth.add(1, 'day').format('D')}</span></div>
    );
  }

  let days = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = (calendarState.year === curYear && calendarState.month === curMonth && d === today.format('D') * 1 ? "today" : "");
    const isSelected = (calendarState.year === calendarState.selectedDate.format('Y') * 1 && calendarState.month === calendarState.selectedDate.format('M') * 1 && d === calendarState.selectedDate.format("D") * 1);
    days.push(
      <div key={d} className={'calendar-day' + (isToday ? ' today' : '') + (isSelected ? ' active' : '')}>
        <span onClick={() => handleSelectDate(d)}>{d}</span>
      </div>
    );
  }

  let d = daysInMonth;
  do {
    d += 1;
    days.push(<div key={d} className='calendar-day empty'><span>{d - daysInMonth}</span></div>);
  } while (d % 7 != 0);

  let rows = [];
  let cells = [];

  [...blanks, ...days].forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      if (cells.length > 0) rows.push(cells);
      cells = [];
      cells.push(row);
    }
  });

  return (
    <div className="elvis-calendar">
      <div className="text-right" style={{ marginBottom: '15px', marginTop: '-6px' }}>
        <select
          className="calendar-select"
          value={calendarState.month}
          onChange={(e) => setCalendarState({
            ...calendarState,
            month: e.target.value * 1,
          })}
        >
          {['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(
            (monthName, index) => <option key={index} value={index + 1}>{monthName}</option>)}
        </select>
        <select
          className="calendar-select"
          value={calendarState.year}
          onChange={(e) =>
            setCalendarState({
              ...calendarState,
              year: e.target.value * 1
            })}
        >
          {years.map(year => <option key={year} value={year}>{year}</option>)}
        </select>
      </div>
      <div className="calendar-body">
        <div className="flex calendar-row">
          {weekdayshort.map((day) => (<div className="weekday" key={day}><span>{day}</span></div>))}
        </div>
        {rows.map((row, i) => <div key={i} className="flex calendar-row">{row}</div>)}
      </div>
    </div>
  );
}
