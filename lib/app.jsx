import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import hashHistory from 'react-router/lib/hashHistory';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import config from './reducers/config';
import players from './reducers/players';
import stopwatch from './reducers/stopwatch';

import { tick } from './actions/actions';

import HeaderContainer from './components/Header.jsx';
import ConfigContainer from './containers/ConfigContainer.jsx';
import PlayerTimersContainer from './containers/PlayerTimersContainer.jsx';
import TotalTimerContainer from './containers/TotalTimerContainer.jsx';

function Index() {
  return (
    <div>
      <PlayerTimersContainer />
      <TotalTimerContainer />
    </div>
  );
}

const store = createStore(
  combineReducers({
    config,
    players,
    stopwatch,
    routing: routerReducer,
  })
);

// keep track of the interval id being used to by the stopwatch's tick action
let intervalId = null;

store.subscribe(() => {
  const state = store.getState();

  if (state.stopwatch.isOn && !intervalId) {
    return intervalId = setInterval(
      () => store.dispatch(tick()),
      100
    );
  }

  if (!state.stopwatch.isOn && intervalId) {
    clearInterval(intervalId);

    return intervalId = null;
  }
});

const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={HeaderContainer} title="Boardgame timer">
        <IndexRoute component={Index} />
        <Route path="config" component={ConfigContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('js-app')
);
