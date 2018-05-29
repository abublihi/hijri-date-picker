import React from 'react';
import ReactDOM from 'react-dom';
import HijriDatePicker from './HijriDatePicker';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HijriDatePicker inputName="hijri_date" className="form-control" selectedDate="1439/09/02" />, document.getElementById('root'));
registerServiceWorker();
