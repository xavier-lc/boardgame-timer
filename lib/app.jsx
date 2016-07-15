const React = require('react');
const ReactDOM = require('react-dom');
const redux = require('redux');
const Provider = require('react-redux').Provider;

const stopwatch = require('./reducers/stopwatch');
const players = require('./reducers/players');

const TotalTimerContainer = require('./containers/TotalTimerContainer');
const PlayerTimersContainer = require('./containers/PlayerTimersContainer');

const store = redux.createStore(
  redux.combineReducers({ stopwatch, players })
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <TotalTimerContainer />
      <PlayerTimersContainer />
    </div>
  </Provider>,
  document.getElementById('example')
);
