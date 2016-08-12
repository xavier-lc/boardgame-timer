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
  const newState = _.cloneDeep(state);

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
  const activeId = _.findKey(state.data, function (value) {
    return value.isActive;
  });

  if (_.isUndefined(activeId)) {
    return null;
  }

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
  /** @type {null|PlayerId} */
  const activeId = getActivePlayerId(state);
  const turnNumber = activeId ?
    newState.turns[activeId].length - 1 :
    0;

  switch (action.type) {
    case NAME_INPUT_CHANGE:
      newState.data[action.id].name = action.value;

      return newState;

    case ADD_PLAYER:
      return addPlayerToState(state);

    case PLAY:

      // set a new turn for the first player
      newState.data[1].isActive = true;
      newState.offsets[1] = action.time;
      newState.turns[1].push(0);

      return newState;

    case PAUSE:

      // update the elapsed turn time
      newState.turns[activeId][turnNumber] = action.time - newState.offsets[activeId];

      return newState;

    case RESUME:

      // update the turn's offset
      newState.offsets[activeId] = action.time - newState.turns[activeId][turnNumber];

      return newState;

    case TICK:

      // update the elapsed turn time
      newState.turns[activeId][turnNumber] = action.time - newState.offsets[activeId];

      return newState;

    case NEXT:

      // update the elapsed turn time
      newState.turns[activeId][turnNumber] = action.time - newState.offsets[activeId];

      // end current player's turn
      newState.data[activeId].isActive = false;

      // set the next player as active, checking if the active player's id is the last one
      const nextId = activeId === state.ids.length ? 1 : activeId + 1;

      newState.data[nextId].isActive = true;

      // set the next player's offset
      newState.offsets[nextId] = action.time;

      // set a new turn for next player
      newState.turns[nextId].push(0);

      return newState;

    default:
      return state;
  }
}

export { initialState };
export default players;
