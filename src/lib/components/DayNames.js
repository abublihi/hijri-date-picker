import React, { Component } from 'react'
import styled from 'styled-components'

const DayNamesList = styled.div`
  text-align: right;
  border-bottom: 1px solid #ddd;
`

const DayName = styled.div`
  display: inline-block;
  margin: 2px;
  width: 30px;
  height: 25px;
  padding: 1px;
  border: 1px solid #fff;
  text-align: center;
  -webkit-box-sizing: unset !important;
  box-sizing: unset;
`

class DayNames extends Component {
    state = {
      arabicDayNames: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
      arabicFullDayNames: ['احد', 'اثنين', 'ثلاثاء', 'اربعاء', 'خميس', 'جمعة', 'سبت'],
      englishDayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    }
    
    render() {
      return (
        <DayNamesList>
          {
            this.state.arabicDayNames.map((item, key) =>  <DayName key={key.toString()}>{item}</DayName>)
          }
        </DayNamesList>
      )
    }
  }
  export default DayNames;