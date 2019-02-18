import React, { Component } from 'react';
import HijirDatePicker from '../lib';
import './ExampleStyle.css';

class App extends Component {
  state = {}

  onChange = (value) => {
    console.log('OnChange -> Value is: ', value)
    this.setState({ selectedDate: value })
  }

  onFocus = (value) => {
    console.log('OnFocus -> Value is: ', value)
  }

  render() {
    return (
      <div id="app">
        <HijirDatePicker
          name="hijri_date"
          className="input-style"
          placeholder="Hijri Date"
          selectedDate={this.state.selectedDate} //not required if it is uncontrolled component
          dateFormat="iMM/iYYYY/iDD"
          onChange={this.onChange}
          onFocus={this.onFocus}
          quickSelect
        />
      </div>
    );
  }
}

export default App;
