// Hijri year (1356 to 1500)
import React, { Component } from 'react'
import styled from 'styled-components'

const YearListContainer = styled.span`
  padding: 5px;
`

const YearSelect = styled.select`
  width: 100px;
  -webkit-appearance: menulist-button;
  background: transparent;
  height: 25px;
  border-radius: 4px;
  font-family: sans-serif;
  font-size: 12px;
`
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
      <YearListContainer>
        <YearSelect onChange={this.props.onChange}>
          {yearsList} 
        </YearSelect>
      </YearListContainer>
    )
  }
}

export default YearsList