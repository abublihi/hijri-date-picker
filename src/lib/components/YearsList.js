// Hijri year (1356 to 1500)
import React, { Component } from 'react'

class YearsList extends Component {
  
  state = {
      minYear: 1356,
      maxYear: 1500
  }

  isSelected = (year) => {
    return this.props.currentTime.iYear() === year
  }

  render() {
    let yearsList = []
    // Generate a select options of all supported years
    for(let i = this.state.minYear; i <= this.state.maxYear; i = i + 1){
      yearsList.push(
        <option key={i} value={i} selected={this.isSelected(i)}>{i}</option>
      )
    }
    return (
      <div>
        <select onChange={this.props.onChange}>
          {yearsList} 
        </select>
      </div>
    )
  }
}

export default YearsList