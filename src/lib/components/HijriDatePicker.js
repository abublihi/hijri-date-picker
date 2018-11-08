import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment-hijri'
import { Manager, Reference, Popper } from 'react-popper'
import onClickOutside from 'react-onclickoutside'
import DayNames from './DayNames.js'
import MonthList from './MonthsList'
import YearsList from './YearsList'
import MonthDaysView from './MonthDaysView'

const HijriCalender = styled.div`
  width: 266px;
  direction: rtl;
  background: #ffffff;
  padding: 15px;
  border: 1px solid #ddd;
  margin-top: 2px;
  font-family: serif;
  box-sizing: unset;
  -webkit-box-sizing: unset;
  font-size: 14px;
  border-radius: 4px;
`

const HijriCalenderControls = styled.div`
  direction: rtl;
  text-align: center;
`

const ControlButton = styled.button`
  position: absolute;
  border: 0px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  background-color: #fff;
  :hover {
    color: #888888
  }
  :focus {
    outline: unset
  }
`
const PreviousButton = styled(ControlButton)`
  right: 15px;
`

const NextButton = styled(ControlButton)`
  left: 15px;
`
const MonthName = styled.strong`
`

const YearAndMonthList = styled.div`
  margin-top: 10px;
`

const ClearFix = styled.div`
  &:after {
    display: table;
    content: "";
    clear: both;
  }
`

class HijriDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: this.props.selectedDate || '',
      dateFormat: this.props.dateFormat || 'iYYYY/iMM/iDD',
      currentTime: this.props.selectedDate? moment(this.props.selectedDate, this.props.dateFormat || 'iYYYY/iMM/iDD') : moment(),
      calenderShown: false
    };
  }

  handleClickOutside = evt => {
    this.setState({
      calenderShown: false
    })
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
      selectedDate: time.format(this.state.dateFormat),
      calenderShown: false
    })
  }

  getMonthStartDayName = () => {
    let time = this.state.currentTime
    time.startOf('iMonth')
    return time.format('dd') 
  }

  showCalender = () => {
    this.setState({
      calenderShown: true
    })
  }

  handelMonthChange = (event) => {
    let time = this.state.currentTime
    time.iMonth(parseInt(event.target.value, 10))
    this.setState({
      currentTime: time
    })
  }
  handelYearChange = (event) => {
    let time = this.state.currentTime
    time.iYear(parseInt(event.target.value, 10))
    this.setState({
      currentTime: time
    })
  }

  handelOnChange = (event) => {
   // 
  }

  renderYearAndMonthList()
  {
    
  }

  render() {
    return (
      <div className="hijri-date-picker">
        <Manager>
          <Reference>
            {({ ref }) => (
              <input type="text" autoComplete="off" name={this.props.inputName} className={this.props.className} value={this.state.selectedDate} ref={ref} onFocus={this.showCalender} readOnly/>
            )}
          </Reference>
          {this.state.calenderShown && 
            <Popper 
              placement="bottom" 
              modifiers={{ 
                hide: { enabled: true},
                preventOverflow: { enabled: true, boundariesElement: 'viewport'}, 
              }}
            >
              {({ ref, style, placement, arrowProps }) => (
                <div>
                  <HijriCalender ref={ref} style={style} data-placement={placement}>
                    <HijriCalenderControls>
                      <PreviousButton onClick={this.subtractMonth} type="button" >{'<'}</PreviousButton>
                      <MonthName>{this.state.currentTime.format('iMMMM') + ' ('+this.state.currentTime.format('iMM')+') ' + ' ' + this.state.currentTime.format('iYYYY')}</MonthName>
                      <NextButton onClick={this.addMonth} type="button" > {'>'} </NextButton>
                      {this.props.quickSelect &&
                        <YearAndMonthList>
                          <YearsList currentTime={this.state.currentTime} onChange={this.handelYearChange}/>
                          <MonthList currentTime={this.state.currentTime} onChange={this.handelMonthChange}/>
                        </YearAndMonthList>
                      }
                      
                    </HijriCalenderControls>
                    <DayNames />
                    <MonthDaysView currentTime={this.state.currentTime} dateFormat={this.state.dateFormat} selectedDate={this.state.selectedDate} setSelectedDate={this.setSelectedDate}/>
                    <div ref={arrowProps.ref} style={arrowProps.style} />
                  </HijriCalender>
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
