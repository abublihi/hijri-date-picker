import React from 'react';
import HijirDatePicker from '../lib';
import './ExampleStyle.css';

const App = () => (
  <div id="app">
    <HijirDatePicker inputName="hijri_date" className="input-style" selectedDate="08/1439/02" dateFormat="iMM/iYYYY/iDD" quickSelect/>
  </div>
);

export default App;
