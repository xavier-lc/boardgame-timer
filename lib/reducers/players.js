const _ = require('underscore');

const actions = require('./../constants/actionTypes');
const diff = require('./../utils/date').diff;

let initialState = {
  ids: [],
  data: {},
  time: {},
};

function addPlayerToState(state) {
  const playerCount = state.ids.length;

  const id = playerCount ? state.ids[playerCount - 1] + 1 : 1;

  const data = {
    name: 'Player #' + id,
    isActive: false,
  };

  const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    offset: null,
    elapsed: 0,
  };

  const newState = Object.assign({}, state);

  newState.ids.push(id);
  newState.data[id] = data;
  newState.time[id] = time;

  return newState;
}

function getActivePlayerId(state) {
  const activeId = _.findKey(state.data, function (value) {
    return value.isActive;
  });

  return parseInt(activeId, 10);
}

// default to 2 players
initialState = addPlayerToState(initialState);
initialState = addPlayerToState(initialState);

function players(state = initialState, action) {
  const newState = Object.assign({}, state);
  const activeId = getActivePlayerId(state);

  switch (action.type) {
    case actions.ADD_PLAYER:
      return addPlayerToState(state);

    case actions.PLAY:
      newState.data[1].isActive = true;
      newState.time[1].offset = action.time;

      return newState;

    case actions.TICK:
      const time = newState.time[activeId];

      Object.assign(
        time,
        diff(time.offset - time.elapsed, action.time)
      );

      return newState;

    case actions.NEXT:
      newState.data[activeId].isActive = false;

      // check if the active player's id is the last one
      const nextId = activeId === state.ids.length ? 1 : activeId + 1;

      newState.data[nextId].isActive = true;

      return newState;

    default:
      return state;
  }
}

module.exports = players;
