const actions = require('./../constants/actionTypes');

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
  };

  const newState = Object.assign({}, state);

  newState.ids.push(id);
  newState.data[id] = data;
  newState.time[id] = time;

  return newState;
}

initialState = addPlayerToState(initialState);

function players(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_PLAYER:
      return addPlayerToState(state);

    default:
      return state;
  }
}

module.exports = players;
