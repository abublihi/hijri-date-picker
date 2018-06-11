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
      currentTime: moment(),
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
    return this.state.currentTime.iDaysInMonth()
  }

  subtractMonth = () => {
    this.setState((prevState) => ({
      currentTime: prevState.currentTime.subtract(1, 'iMonth')
    }));
  }

  addMonth = () => {
    this.setState((prevState) => ({
      currentTime: prevState.currentTime.add(1, 'iMonth')
    }));
  }

  setSelectedDate = (event) => {
    let time = this.state.currentTime
    time.iDate(parseInt(event.target.value, 10))
    this.setState({
      selectedDate: time.format('iYYYY/iMM/iDD'),
      calenderShown: false
    })
  }

  getMonthStartDayName = () => {
    let time = this.state.currentTime
    time.startOf('iMonth')
    return time.format('dd') 

  }

  isSelectedDate = (i) => {
    let time = this.state.currentTime
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
          <button onClick={this.setSelectedDate} value={i} key={i.toString()} type="button">{i}</button>
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
                      <button className="previous-month" onClick={this.subtractMonth} type="button" >{'<'}</button>
                      <strong className="month-name">{this.state.currentTime.format('iMMMM') + '('+this.state.currentTime.format('iMM')+')' + ' ' + this.state.currentTime.format('iYYYY')}</strong>
                      <button className="next-month" onClick={this.addMonth} type="button" > {'>'} </button>
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
