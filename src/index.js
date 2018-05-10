import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HijriDatePicker from './HijriDatePicker';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HijriDatePicker inputName="hijri_date" className="sdfs" />, document.getElementById('root'));
registerServiceWorker();
