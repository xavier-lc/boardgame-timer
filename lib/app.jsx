import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import stopwatch from './reducers/stopwatch';
import players from './reducers/players';

import TotalTimerContainer from './containers/TotalTimerContainer.jsx';
import PlayerTimersContainer from './containers/PlayerTimersContainer.jsx';

const store = createStore(
  combineReducers({ stopwatch, players })
);

render(
  <Provider store={store}>
    <div>
      <PlayerTimersContainer />
      <TotalTimerContainer />
    </div>
  </Provider>,
  document.getElementById('example')
);
