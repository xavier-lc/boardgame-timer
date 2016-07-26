import _ from 'underscore';

import { ADD_PLAYER, PLAY, PAUSE, RESUME, TICK, NEXT } from './../constants/actionTypes';
import { diff } from './../utils/date';

/**
 * Initial state for PlayerTimersContainer
 *
 * See {@link http://redux.js.org/docs/basics/Reducers.html Reducers} to understand why state is as
 * normalized as possible
 *
 * @typedef {object} PlayersState
 * @property {number[]} ids
 * @property {object.<number, PlayerData>} data
 * @property {object.<number, PlayerTimer>} time
 */
let initialState = {
  ids: [],
  data: {},
  time: {},
};

/**
 * Add a player
 *
 * @param {PlayersState} state
 * @returns {PlayersState}
 */
function addPlayerToState(state) {
  const playerCount = state.ids.length;

  // use 1 as the first id if the ids array is empty, and keep incrementing from there
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
   * @property {number} hours
   * @property {number} minutes
   * @property {number} seconds
   * @property {number} milliseconds
   * @property {?number} offset
   * @property {number} elapsed
   */
  const time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    offset: null,
    elapsed: 0,
  };

  // clone the current state and add the new player's info to it
  const newState = Object.assign({}, state);

  newState.ids.push(id);
  newState.data[id] = data;
  newState.time[id] = time;

  return newState;
}

/**
 * Get the id of the currently active player (there con be only one active player at a time)
 *
 * @param {PlayersState} state
 * @returns {Number}
 */
function getActivePlayerId(state) {
  const activeId = _.findKey(state.data, function (value) {
    return value.isActive;
  });

  return parseInt(activeId, 10);
}

/**
 * Upate a player's time when it's paused at a certain moment
 *
 * @param {PlayerTimer} activeUserTime
 * @param {number} now
 * @returns {PlayerTimer}
 */
function pauseActivePlayer(activeUserTime, now) {
  return Object.assign(
    {},
    activeUserTime,
    diff(activeUserTime.offset - activeUserTime.elapsed, now),
    { elapsed: now - activeUserTime.offset + activeUserTime.elapsed }
  );
}

// default to 2 players
initialState = addPlayerToState(initialState);
initialState = addPlayerToState(initialState);

/**
 * Reducer for PlayerTimers
 *
 * @param {PlayersState} state
 * @param {TimerAction} action
 * @returns {PlayersState}
 */
function players(state = initialState, action) {
  const newState = Object.assign({}, state);
  const activeId = getActivePlayerId(state);
  const activeUserTime = newState.time[activeId];

  switch (action.type) {
    case ADD_PLAYER:
      return addPlayerToState(state);

    case PLAY:
      newState.data[1].isActive = true;
      newState.time[1].offset = action.time;

      return newState;

    case PAUSE:
      Object.assign(
        activeUserTime,
        pauseActivePlayer(activeUserTime, action.time)
      );

      return newState;

    case RESUME:
      Object.assign(
        activeUserTime,
        { offset: action.time }
      );

      return newState;

    case TICK:
      Object.assign(
        activeUserTime,
        diff(activeUserTime.offset - activeUserTime.elapsed, action.time)
      );

      return newState;

    case NEXT:
      Object.assign(
        activeUserTime,
        pauseActivePlayer(activeUserTime, action.time)
      );

      // set the next player as active
      newState.data[activeId].isActive = false;

      // check if the active player's id is the last one
      const nextId = activeId === state.ids.length ? 1 : activeId + 1;

      newState.data[nextId].isActive = true;

      // set the next player's offset
      newState.time[nextId].offset = action.time;

      return newState;

    default:
      return state;
  }
}

export { initialState };
export default players;
