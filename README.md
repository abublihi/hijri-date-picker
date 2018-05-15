# React Hijri DatePicker
A simple and reusble react component for hijir date pickre.


# Installation
The package can be installed using npm, this package requires you to install *react-popper*, *react-onclickoutside* and *moment-hijri*
```
npm install hijri-date-picker --save
```
Or with script tag
```html
<script src="https://unpkg.com/"></script>
```
# Usage
Example 1: npm installation
```javascript
import React from  'react';
import ReactDOM from  'react-dom';
import HijriDatePicker from  './HijriDatePicker';

ReactDOM.render(<HijriDatePicker inputName="hijri_date" className="form-control" selectedDate="1439/08/02" />, document.getElementById('root'));

```
Example 2: script tag
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>React Hijri DatePicker</title>
    <link rel="stylesheet" href="dist/hijir-date-picker.css">
  </head>
  <body>
    <hijri-date-picker input-name="hijri_date" class-name="form-control" selected-date="1439/08/02"></hijri-date-picker>
  </body>
  <script src="dist/hijir-date-picker.js"></script>
</html>

```

Thank You @xsoh for the awesome package *moment-hijri* 
