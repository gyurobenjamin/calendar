import React, { useState } from 'react';
import moment from 'moment';
import './Calendar.css';

function Week({week, month}) {
  week.startOf('isoWeek');
  const days = [];
  const w = week.clone();

  for(let i = 0; i < 7; i++) {

    console.log(w.format(), month.format());
    
    if(!w.isSame(month, 'month')) {
      days.push(
        <div className="Calendar__Table__Cell" key={i} />
      );
    } else {
      days.push(
        <div className="Calendar__Table__Cell Calendar__Table__Cell--active" key={i}>
          <span className="Calendar__Table__Cell__Circle"></span>
          <span className="Calendar__Table__Cell__Day">{w.format('D')}</span>
        </div>
      );
    }

    w.add(1, 'days');
  }

  return (
    <div className="Calendar__Table__Row">
      {days}
    </div>
  );
}

function Weeks({month}) {
  const m = month.clone();
  m.startOf('month');
  const dim = m.daysInMonth();

  const weeks = [];

  const week = m.startOf('isoWeek').clone();
  for(let i = 1; i <= dim; i = i + 7) {
    weeks.push(
      <Week week={week.clone()} month={month.clone()} />
    );
    week.add(7, 'days');
  }

  return (
    <div className="Calendar__Table__Body">
      {weeks}
    </div>
  );
}

function Calendar() {
  const [activeMonth, setActiveMonth] = useState(moment());

  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const nextMonth = () => {
    activeMonth.add(1, 'months');
    setActiveMonth(activeMonth.clone());
  }

  const prevMonth = () => {
    activeMonth.add(-1, 'months');
    setActiveMonth(activeMonth.clone());
  }

  // TODO: Dynamic days
  return (
    <div className="Calendar">
      <div className="Calendar__Header">
        <div className="Calendar__Header">
          <div
            className="Calendar__Header__Arrow"
            onClick={prevMonth}
          >
          </div>
          <div className="Calendar__Header__Title">
            <span>{activeMonth.format('MMMM YYYY')}</span>
          </div>
          <div
            className="Calendar__Header__Arrow Calendar__Header__Arrow--right"
            onClick={nextMonth}
          ></div>
        </div>
      </div>
      <div className="Calendar__Table">
        <div className="Calendar__Table__Header">
          <div className="Calendar__Table__Row">
            {days.map((day, i) => (
              <div className="Calendar__Table__Cell" key={i}>{day}</div>
            ))}
          </div>
        </div>
        <Weeks month={activeMonth} />
      </div>
    </div>
  );
}

export default Calendar;