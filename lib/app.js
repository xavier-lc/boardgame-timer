const React = require('react');
const ReactDOM = require('react-dom');

const TotalTimer = require('./components/TotalTimer');

ReactDOM.render(
  React.createElement(TotalTimer),
  document.getElementById('example')
);
