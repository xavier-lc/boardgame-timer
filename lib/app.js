const React = require('react');
const ReactDOM = require('react-dom');

const TotalTimer = require('./components/js/TotalTimer');

ReactDOM.render(
  React.createElement(TotalTimer),
  document.getElementById('example')
);
