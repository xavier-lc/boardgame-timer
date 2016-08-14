import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import config from './reducers/config';
import players from './reducers/players';
import stopwatch from './reducers/stopwatch';

import ConfigContainer from './containers/ConfigContainer.jsx';
import PlayerTimersContainer from './containers/PlayerTimersContainer.jsx';
import TotalTimerContainer from './containers/TotalTimerContainer.jsx';

const store = createStore(
  combineReducers({ config, players, stopwatch })
);

render(
  <Provider store={store}>
    <div>
      <ConfigContainer />
      <PlayerTimersContainer />
      <TotalTimerContainer />
    </div>
  </Provider>,
  document.getElementById('js-app')
);
