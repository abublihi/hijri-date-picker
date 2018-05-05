import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment-hijri';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HijriDatePicker />
      </div>
    );
  }
}

class HijriDatePicker extends Component {
  state = {
    time: moment(),
    monthDays: moment().iDaysInMonth(),
    selectedDate: '',
  }
  monthDays = () => {
    return this.state.time.iDaysInMonth()
  }

  subtractMonth = () => {
    this.setState({
      time: this.state.time.subtract(1, 'iMonth')
    })
    console.log(this.state.time.format('iYYYY/iM/iD'))
  }

  setSelectedDate = (event) => {
    let time = this.state.time
    time.iDate(parseInt(event.target.value))
    this.setState({
      selectedDate: time.format('iYYYY/iMM/iDD')
    })
  }
  render() {
    let daysList = []
    for (let i = 1; i < this.monthDays() + 1; i++) {
      daysList.push(
        <li><button onClick={this.setSelectedDate} value={i}>{i}</button></li>
      )
    }
    return (
      <div className="hijri-date-picker">
        <input type="text" value={this.state.selectedDate} />
        <div className="hijri-calender">
          <h4 className="month-name">شعبان</h4>
          <button onClick={this.subtractMonth} >></button>
          <div className="month-days">
            {
              daysList
            }
          </div>
        </div>
      </div>
    )
  }
}
export default App;
