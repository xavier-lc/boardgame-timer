const React = require('react');
const ReactDOM = require('react-dom');

const TwoTimingDigits = require('./components/js/TwoTimingDigits');

ReactDOM.render(
  React.createElement(TwoTimingDigits),
  document.getElementById('example')
);
