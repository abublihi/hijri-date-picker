import React from 'react'
import styled from 'styled-components'

const MonthDays = styled.div`
text-align: right;
`

const MonthDay = styled.div`
  display: inline-block;
  margin: 2px;
  width: 30px;
  height: 25px;
  padding: 1px;
  border: 1px solid #fff;
  text-align: center;
  -webkit-box-sizing: unset !important;
  box-sizing: unset;
  border: ${props => props.selected ? "1px solid #ddd !important;" : ""} 
`

const MonthDayButton = styled.button`
  cursor: pointer;
  border: 0px;
  width: 30px;
  padding: 5px;
  display: contents;
  -webkit-box-sizing: unset !important;
  box-sizing: unset;
  :focus {
    border: 0px;
    outline: unset;
  }
`

class MonthDaysView extends React.Component {
  
  state = {
    englishDayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  }
  
  getMonthStartDayName = () => {
    let time = this.props.currentTime
    time.startOf('iMonth')
    return time.format('dd') 
  }

  monthDays = () => {
    return this.props.currentTime.iDaysInMonth()
  }

  isSelectedDate = (i) => {
    let time = this.props.currentTime
    time.iDate(parseInt(i, 10))
    return this.props.selectedDate === time.format('iYYYY/iMM/iDD')
  }

  render(){
      let daysList = []
      for (let i = this.state.englishDayNames.indexOf(this.getMonthStartDayName()); i > 0; i--){
        daysList.push(
          <MonthDay key={daysList.length + 1}></MonthDay>
        )
      }
      for (let i = 1; i < this.monthDays() + 1; i++) {
        daysList.push(
          <MonthDay selected={this.isSelectedDate(i)}>
            <MonthDayButton onClick={this.props.setSelectedDate} value={i} key={daysList.length + 1} type="button">{i}</MonthDayButton>
          </MonthDay>
        )
      }
      
      return <MonthDays>
      {
        daysList
      }
    </MonthDays>;
  }
}

export default MonthDaysView