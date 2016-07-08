const types = require('./../constants/actionTypes');
const date = require('./../utils/date');

const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  start: null,
};

function stopwatch(state = initialState, action) {
  switch (action.type) {
    case types.PLAY:
      return Object.assign(
        {},
        state,
        { start: action.time }
      );

    case types.TICK:
      return Object.assign(
        {},
        state,
        date.diff(state.start, action.time)
      );

    default:
      return state;
  }
}

module.exports = stopwatch;
