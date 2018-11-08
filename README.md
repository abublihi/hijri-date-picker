# React Hijri DatePicker
A simple and reusble react component for hijir date pickre.


# Installation
The package can be installed using npm, this package requires you to install *moment-hijri*, *react-popper*, *react-onclickoutside* and *styled_components*
```
npm i hijri-date-picker
```
Or with script tag
```html
<script src="dist/hijir-date-picker.js"></script>
```
# Usage
### Example 1: npm installation
```javascript
import React from  'react';
import ReactDOM from  'react-dom';
import HijriDatePicker from 'hijri-date-picker';

ReactDOM.render(<HijriDatePicker inputName="hijri_date" className="form-control" selectedDate="1439/08/02" dateFormat="iYYYY/iMM/iDD" />, document.getElementById('root'));

```
### Example 2: script tag
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>React Hijri DatePicker</title>
  </head>
  <body>
    <hijri-date-picker input-name="hijri_date" class-name="form-control" selected-date="1439/08/02" date-format="iYYYY/iMM/iDD"></hijri-date-picker>
  </body>
  <script src="dist/hijir-date-picker.js"></script>
</html>
```
 
![without quick](https://image.ibb.co/nmvSAA/hijri-date-picker-no-Quick-Select.png "without quick")

### The `prop`  quickSelect
this adds a quick select for year and month only add to the props `quickSelect`

```Html
<HijriDatePicker inputName="hijri_date" className="form-control" selectedDate="1439/08/02" dateFormat="iYYYY/iMM/iDD" quickSelect/>
```

for the tag example will be `quick-select="true"`
```Html
<hijri-date-picker input-name="hijri_date" class-name="form-control" selected-date="1439/08/02" date-format="iYYYY/iMM/iDD" quick-select="true"></hijri-date-picker>
```

![without quick](https://image.ibb.co/m9tEqA/hijri-date-picker-with-Quick-Select.png "with quick")


### Date Format 'Default is `iYYYY/iMM/iDD`'
we are using moment and exactly moment hijri so any format for [moment-hijri](https://github.com/xsoh/moment-hijri) package will work fine, so any format must have the letter `i` before it e.g. (`YYYY-MM-DD` -> `iYYYY-iMM-iDD`).

Thank You @xsoh for the awesome package *moment-hijri* 
