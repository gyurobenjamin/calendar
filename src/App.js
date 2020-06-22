import React from 'react';
import CalendarInput from './CalendarInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Rectangle">
        <div className="Rectangle-Left Rectangle-Col">
          <h4 className="Rectangle-Title">Have you sold subject to contract?</h4>
          <p className="Rectangle-Subtitle">Enter your exchange date to unlock the tools you need for the next stage of your sale.</p>
        </div>
        <div className="Rectangle-Right Rectangle-Col">
          <CalendarInput />
        </div>
      </div>
    </div>
  );
}

export default App;
