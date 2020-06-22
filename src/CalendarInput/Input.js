import React, { useState } from 'react';
// import moment from 'moment';

import './Input.css';

function Input() {
  const [date, setDate] = useState('');

  return (
    <div className="CalendarInput-Input">
      <select
        // onFocus={true}
        // onBlur={true}
        value={date}
      ></select>
    </div>
  );
}

export default Input;
