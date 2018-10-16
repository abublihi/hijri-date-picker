import React, { Component } from 'react';

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

  isSelected = (monthNumber) => {
    return this.props.currentTime.iMonth() === monthNumber
  }

  render() {
    return (
      <div>
        <select onChange={this.props.onChange}>
          {
            this.state.months.map((item, key) => <option selected={this.isSelected(item.number)} key={item.number} value={item.number}>{item.name}</option>)
          }
        </select>
      </div>
    )
  }
}

export default MonthsList