import React, { useState } from 'react';
// import moment from 'moment';

import './Input.css';

function Input({value, onFocus, onBlur}) {
  return (
    <div className="CalendarInput-Input">
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        value={value && value.format('DD/MM/YYYY')}
      />
    </div>
  );
}

export default Input;
