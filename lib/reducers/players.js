import cloneDeep from 'lodash/cloneDeep';
import findKey from 'lodash/findKey';
import isUndefined from 'lodash/isUndefined';

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
   * Initial state for the Timer's offset on Player, it's the reference used to
   * calculate the elapsed time
   *
   * @typedef {?number} TimerOffset
   */
  const offset = null;

  // clone the current state and add the new player's info to it
  const newState = cloneDeep(state);

  newState.ids.push(id);
  newState.data[id] = data;
  newState.offsets[id] = offset;
  newState.turns[id] = [];

  return newState;
}

/**
 * Get the id of the currently active player (there con be only one active player at a time)
 *
 * @param {PlayersState} state
 * @returns {null|PlayerId}
 */
function getActivePlayerId(state) {
  const activeId = findKey(state.data, function (value) {
    return value.isActive;
  });

  // before the stopwatch starts, there's no active player
  if (isUndefined(activeId)) {
    return null;
  }

  return parseInt(activeId, 10);
}

/**
 * Get the turn number of the currently active player
 *
 * @param {PlayersState} state
 * @param {null|PlayerId} activePlayerId
 * @returns {null|number}
 */
function getTurnNumber(state, activePlayerId) {
  if (!activePlayerId) {
    return null;
  }

  return state.turns[activePlayerId].length - 1;
}

/**
 * Update the elapsed time value of the current active player's turn
 *
 * @param {PlayersState} state
 * @param {number} time
 * @returns {PlayersState}
 */
function elapseTurnTime(state, time) {
  const activeId = getActivePlayerId(state);
  const turnNumber = getTurnNumber(state, activeId);

  state.turns[activeId][turnNumber] = time - state.offsets[activeId];

  return state;
}

/**
 * Set up a new turn for nextPlayerId; if previousPlayerId is provided, set it as false
 *
 * @param {PlayersState} state
 * @param {PlayerId} nextPlayerId
 * @param {number} time
 * @param {?PlayerId} [previousPlayerId]
 * @returns {PlayersState}
 */
function setNewTurn(state, nextPlayerId, time, previousPlayerId = null) {
  if (previousPlayerId) {
    state.data[previousPlayerId].isActive = false;
  }

  state.data[nextPlayerId].isActive = true;
  state.offsets[nextPlayerId] = time;
  state.turns[nextPlayerId].push(0);

  return state;
}

/**
 * The time elapsed during a player's turn, in milliseconds
 *
 * @typedef {number} PlayerTurn
 */

/**
 * Initial state for PlayerTimersContainer
 *
 * See {@link http://redux.js.org/docs/basics/Reducers.html Reducers} to understand why state is as
 * normalized as possible
 *
 * @typedef {object} PlayersState
 * @property {PlayerId[]} ids
 * @property {object.<PlayerId, PlayerData>} data
 * @property {object.<PlayerId, TimerOffset>} offsets
 * @property {object.<PlayerId, PlayerTurn[]>} turns
 */
let initialState = {
  ids: [],
  data: {},
  offsets: {},
  turns: {},
};

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
  let newState = cloneDeep(state);
  /** @type {null|PlayerId} */
  const activeId = getActivePlayerId(state);

  switch (action.type) {
    case NAME_INPUT_CHANGE:
      newState.data[action.id].name = action.value;

      return newState;

    case ADD_PLAYER:
      return addPlayerToState(state);

    case PLAY:
      return setNewTurn(newState, 1, action.time);

    case TICK:
    case PAUSE:
      return elapseTurnTime(newState, action.time);

    // update the turn's offset
    case RESUME:
      const turnNumber = getTurnNumber(newState, activeId);

      newState.offsets[activeId] = action.time - newState.turns[activeId][turnNumber];

      return newState;

    case NEXT:
      newState = elapseTurnTime(newState, action.time);

      // set the next player as active, checking if the active player's id is the last one
      const nextId = activeId === state.ids.length ? 1 : activeId + 1;

      return setNewTurn(newState, nextId, action.time, activeId);

    default:
      return state;
  }
}

export { initialState };
export default players;
