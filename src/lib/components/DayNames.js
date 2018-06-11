import React, { Component } from 'react';

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
  export default DayNames;