const React = require('react');
const ReactDOM = require('react-dom');

const TwoTimingDigits = require('./components/js/two-timing-digits');

ReactDOM.render(
  React.createElement(TwoTimingDigits),
  document.getElementById('example')
);
