const React = require('react');
const ReactDOM = require('react-dom');
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;

const stopwatch = require('./reducers/stopwatch');

const TotalTimerContainer = require('./containers/TotalTimerContainer');
const PlayerTimersContainer = require('./containers/PlayerTimersContainer');

const store = createStore(stopwatch);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <TotalTimerContainer />
      <PlayerTimersContainer />
    </div>
  </Provider>,
  document.getElementById('example')
);
