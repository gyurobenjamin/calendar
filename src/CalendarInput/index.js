import React, { useState } from 'react';

import Input from './Input';
import Calendar from './Calendar';

function CalendarInput({onSelectDate}) {
  const [activeDay, setActiveDay] = useState();
  const [calendarActive, setCalendarActive] = useState(false);

  const dateChange = (e) => {
    setActiveDay(e);
    onSelectDate(e);

    setCalendarActive(false);
  }

  const onFocus = () => {
    setCalendarActive(true);
  }

  return (
    <div>
      <Input
        value={activeDay}
        onFocus={onFocus}
      />
      {calendarActive && (<Calendar onSelectDate={dateChange} activeDay={activeDay} />)}
    </div>
  );
}

export default CalendarInput;