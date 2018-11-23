import React, { Component } from 'react'
import styled from 'styled-components'

const MonthListContainer = styled.span`
  padding: 5px;
`

const MonthSelect = styled.select`
  width: 100px;
  -webkit-appearance: menulist-button;
  background: transparent;
  height: 25px;
  border-radius: 4px;
  font-family: sans-serif;
  font-size: 14px;
`

class MonthsList extends Component {
  state = {
    months: [
      {number: 0, name: 'محرم'},
      {number: 1, name: 'صفر'},
      {number: 2, name: 'ربيع 1'},
      {number: 3, name: 'ربيع 2'},
      {number: 4, name: 'جمادي 1'},
      {number: 5, name: 'جمادي 2'},
      {number: 6, name: 'رجب'},
      {number: 7, name: 'شعبان'},
      {number: 8, name: 'رمضان'},
      {number: 9, name: 'شوال'},
      {number: 10, name: 'ذو القعدة'},
      {number: 11, name: 'ذو الحجة'},
    ]
  }

  render() {
    return (
      <MonthListContainer>
        <MonthSelect onChange={this.props.onChange} value={this.props.currentTime.iMonth()}>
          {
            this.state.months.map((item, key) => <option key={item.number} value={item.number}>{item.name}</option>)
          }
        </MonthSelect>
      </MonthListContainer>
    )
  }
}

export default MonthsList