const React = require('react');
const ReactDOM = require('react-dom');
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;

const stopwatch = require('./reducers/stopwatch');

const TotalTimerContainer = require('./containers/TotalTimerContainer');

const store = createStore(stopwatch);

ReactDOM.render(
  <Provider store={store}>
    <TotalTimerContainer />
  </Provider>,
  document.getElementById('example')
);
