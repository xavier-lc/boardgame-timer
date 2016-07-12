const actions = require('./../constants/actionTypes');
const diff = require('./../utils/date').diff;

const initialState = {
  isOn: false,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
  start: null,
  finish: null,
  offset: null,
  elapsed: 0,
  intervalId: null,
};

function stopwatch(state = initialState, action) {
  switch (action.type) {
    case actions.PLAY:
      return Object.assign(
        {},
        state,
        {
          isOn: true,
          start: action.time,
          offset: action.time,
        }
      );

    case actions.PAUSE:
      return Object.assign(
        {},
        state,
        diff(state.offset - state.elapsed, action.time),
        {
          isOn: false,
          elapsed: action.time - state.offset + state.elapsed,
          intervalId: null,
        }
      );

    case actions.RESUME:
      return Object.assign(
        {},
        state,
        {
          isOn: true,
          offset: action.time,
        }
      );

    case actions.STOP:
      return Object.assign(
        {},
        state,
        { finish: action.time }
      );

    case actions.TICK:
      return Object.assign(
        {},
        state,
        diff(state.offset - state.elapsed, action.time),
        { intervalId: action.intervalId }
      );

    default:
      return state;
  }
}

module.exports = stopwatch;
