import { createStore, combineReducers } from 'redux';
import config from 'state/reducers/config';
import players from 'state/reducers/players';
import stopwatch from 'state/reducers/stopwatch';
import { tick } from 'state/actions/actions';

const store = createStore(
    combineReducers({
        config,
        players,
        stopwatch
    })
);

// keep track of the interval id being used to by the stopwatch's tick action
let intervalId = null;

store.subscribe(() => {
    const state = store.getState();

    if (state.stopwatch.isOn && !intervalId) {
        return (intervalId = setInterval(() => store.dispatch(tick()), 100));
    }

    if (!state.stopwatch.isOn && intervalId) {
        clearInterval(intervalId);

        return (intervalId = null);
    }
});

export default store;
