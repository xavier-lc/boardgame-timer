import _ from 'lodash';

import {
  ADD_PLAYER,
  PLAY,
  PAUSE,
  RESUME,
  TICK,
  NEXT,
  NAME_INPUT_CHANGE
} from './../constants/actionTypes';

/**
 * Initial state for PlayerTimersContainer
 *
 * See {@link http://redux.js.org/docs/basics/Reducers.html Reducers} to understand why state is as
 * normalized as possible
 *
 * @typedef {object} PlayersState
 * @property {PlayerId[]} ids
 * @property {object.<PlayerId, PlayerData>} data
 * @property {object.<PlayerId, PlayerTimer>} time
 */
let initialState = {
  ids: [],
  data: {},
  time: {},
};

/**
 * Deep clone the provided state and add a player to it
 *
 * @param {PlayersState} state
 * @returns {PlayersState}
 */
function addPlayerToState(state) {
  const playerCount = state.ids.length;

  /**
   * Use 1 as the first id if the ids array is empty, and keep incrementing from there
   *
   * @typedef {number} PlayerId
   * @type {PlayerId}
   */
  const id = playerCount ? state.ids[playerCount - 1] + 1 : 1;

  /**
   * Initial state for the data on Player
   *
   * @typedef {object} PlayerData
   * @property {string} name
   * @property {boolean} isActive
   */
  const data = {
    name: 'Player #' + id,
    isActive: false,
  };

  /**
   * Initial state for the Timer on Player
   *
   * @typedef {object} PlayerTimer
   * @property {number} elapsed
   * @property {?number} offset
   */
  const time = {
    elapsed: 0,
    offset: null,
  };

  // clone the current state and add the new player's info to it
  const newState = _.cloneDeep(state);

  newState.ids.push(id);
  newState.data[id] = data;
  newState.time[id] = time;

  return newState;
}

/**
 * Get the id of the currently active player (there con be only one active player at a time)
 *
 * @param {PlayersState} state
 * @returns {PlayerId}
 */
function getActivePlayerId(state) {
  const activeId = _.findKey(state.data, function (value) {
    return value.isActive;
  });

  return parseInt(activeId, 10);
}

// default to 2 players
initialState = addPlayerToState(initialState);
initialState = addPlayerToState(initialState);

/**
 * Reducer for PlayerTimers
 *
 * @param {PlayersState} state
 * @param {TimerAction|InputAction} action
 * @returns {PlayersState}
 */
function players(state = initialState, action) {
  const newState = _.cloneDeep(state);
  /** @type {PlayerId} */
  const activeId = getActivePlayerId(state);
  /** @type {PlayerTimer} */
  const activeUserTime = newState.time[activeId];

  switch (action.type) {
    case NAME_INPUT_CHANGE:
      newState.data[action.id].name = action.value;

      return newState;

    case ADD_PLAYER:
      return addPlayerToState(state);

    case PLAY:
      // set a new turn for the first player
      newState.data[1].isActive = true;
      newState.time[1].offset = action.time;

      return newState;

    case PAUSE:
      Object.assign(
        activeUserTime,
        { elapsed: action.time - activeUserTime.offset }
      );

      return newState;

    case RESUME:
      Object.assign(
        activeUserTime,
        { offset: action.time - activeUserTime.elapsed }
      );

      return newState;

    case TICK:
      Object.assign(
        activeUserTime,
        { elapsed: action.time - activeUserTime.offset }
      );

      return newState;

    case NEXT:
      Object.assign(
        activeUserTime,
        { elapsed: action.time - activeUserTime.offset }
      );

      // end current player's turn
      newState.data[activeId].isActive = false;

      // set the next player as active, checking if the active player's id is the last one
      const nextId = activeId === state.ids.length ? 1 : activeId + 1;

      newState.data[nextId].isActive = true;

      // set the next player's offset
      newState.time[nextId].offset = action.time - state.time[nextId].elapsed;

      return newState;

    default:
      return state;
  }
}

export { initialState };
export default players;
