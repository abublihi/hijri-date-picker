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
    arabicDayNames: ['احد', 'اثنين', 'ثلاثاء', 'اربعاء', 'خميس', 'جمعة'],
    englishDayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  }

  monthDays = () => {
    return this.state.time.iDaysInMonth()
  }

  subtractMonth = () => {
    this.setState({
      time: this.state.time.subtract(1, 'iMonth')
    })
  }

  addMonth = () => {
    this.setState({
      time: this.state.time.add(1, 'iMonth')
    })
  }

  setSelectedDate = (event) => {
    let time = this.state.time
    time.iDate(parseInt(event.target.value))
    this.setState({
      selectedDate: time.format('iYYYY/iMM/iDD')
    })

    // // m = moment();
    // time.startOf('iMonth');
    // console.log(time.format('ddd'));
  }

  getMonthStartDayName = () => {
    let time = this.state.time
    time.startOf('iMonth')
    return time.format('dd') 

  }

  render() {
    console.log(this.getMonthStartDayName())
    let daysList = []
    for (let i = this.state.englishDayNames.indexOf(this.getMonthStartDayName()); i > 0; i--){
      daysList.push(
        <div className="month-day"></div>
      )
    }
    for (let i = 1; i < this.monthDays() + 1; i++) {
      daysList.push(
        <div className="month-day"><button onClick={this.setSelectedDate} value={i}>{i}</button></div>
      )
    }

    return (
      <div className="hijri-date-picker">
        <input type="text" value={this.state.selectedDate} />
        <div className="hijri-calender">
          <strong className="month-name">{this.state.time.format('iMMMM') + ' ' + this.state.time.format('iYYYY')}</strong>
          <DayNames />
          <button onClick={this.subtractMonth} >></button>
          <button onClick={this.addMonth} > {'<'} </button>
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

class DayNames extends Component {
  state = {
    arabicDayNames: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
    arabicFullDayNames: ['احد', 'اثنين', 'ثلاثاء', 'اربعاء', 'خميس', 'جمعة', 'سبت'],
    englishDayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  }
  
  render() {
    return (
      <div className="day-names">
        {
          this.state.arabicDayNames.map((item, key) =>  <div className="day-name" key={key.toString()}>{item}</div>)
        }
      </div>
    )
  }
}
export default App;
