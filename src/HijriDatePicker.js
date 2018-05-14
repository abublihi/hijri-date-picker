import React, { Component } from 'react';
import moment from 'moment-hijri';
import { Manager, Reference, Popper } from 'react-popper';
import onClickOutside from 'react-onclickoutside';
import DayNames from './DayNames.js'

import './HijriDatePicker.css';

class HijriDatePicker extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      time: moment(),
      monthDays: moment().iDaysInMonth(),
      selectedDate: this.props.selectedDate,
      englishDayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      calenderShown: false
    };
  }

  handleClickOutside = evt => {
    this.setState({
      calenderShown: false
    })
  }

  monthDays = () => {
    return this.state.time.iDaysInMonth()
  }

  subtractMonth = () => {
    let time = this.state.time.subtract(1, 'iMonth')
    this.setState({
      time: time
    })
  }

  addMonth = () => {
    this.setState({
      time: this.state.time.add(1, 'iMonth')
    })
  }

  setSelectedDate = (event) => {
    let time = this.state.time
    time.iDate(parseInt(event.target.value, 10))
    this.setState({
      selectedDate: time.format('iYYYY/iMM/iDD')
    })
  }

  getMonthStartDayName = () => {
    let time = this.state.time
    time.startOf('iMonth')
    return time.format('dd') 

  }

  isSelectedDate = (i) => {
    let time = this.state.time
    time.iDate(parseInt(i, 10))
    return this.state.selectedDate === time.format('iYYYY/iMM/iDD')
  }

  showCalender = () => {
    this.setState({
      calenderShown: true
    })
  }

  render() {
    let daysList = []
    for (let i = this.state.englishDayNames.indexOf(this.getMonthStartDayName()); i > 0; i--){
      daysList.push(
        <div className="month-day" key={i.toString()}></div>
      )
    }
    for (let i = 1; i < this.monthDays() + 1; i++) {
      daysList.push(
        <div className={this.isSelectedDate(i) ? 'month-day selected-date' : 'month-day'}>
          <button onClick={this.setSelectedDate} value={i} key={i.toString()}>{i}</button>
        </div>
      )
    }

    return (
      <div className="hijri-date-picker">
        <Manager>
          <Reference>
            {({ ref }) => (
              <input type="text" name={this.props.inputName} className={this.props.className} value={this.state.selectedDate} ref={ref} onFocus={this.showCalender} />
            )}
          </Reference>
          {this.state.calenderShown && 
            <Popper placement="bottom">
              {({ ref, style, placement, arrowProps }) => (
                <div>
                  <div className="hijri-calender" ref={ref} style={style} data-placement={placement}>
                    <div className="hijri-calender-controls">
                      <button className="previous-month" onClick={this.subtractMonth} >{'<'}</button>
                      <strong className="month-name">{this.state.time.format('iMMMM') + ' ' + this.state.time.format('iYYYY')}</strong>
                      <button className="next-month" onClick={this.addMonth} > > </button>
                    </div>
                    <DayNames />
                    <div className="month-days">
                      {
                        daysList
                      }
                    </div>
                    <div ref={arrowProps.ref} style={arrowProps.style} />
                  </div>
                </div>
              )}
            </Popper>
          }
        </Manager>
      </div>
    )
  }
}

export default onClickOutside(HijriDatePicker);
