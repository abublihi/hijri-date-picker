import React from 'react';
import HijirDatePicker from '../lib';
import './ExampleStyle.css';

const App = () => (
  <div id="app">
    <HijirDatePicker inputName="hijri_date" className="input-style" selectedDate="1439/08/02"/>
  </div>
);

export default App;
