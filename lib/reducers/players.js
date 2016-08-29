import merge from 'lodash/merge';
import findKey from 'lodash/findKey';

import recur from './../utils/recur';

import {
  ADD_PLAYER,
  PLAY,
  PAUSE,
  RESUME,
  TICK,
  NEXT,
  NAME_INPUT_CHANGE
} from './../constants/actionTypes';

const DEFAULT_PLAYER_COUNT = 2;

/**
 * Add a player to the provided state
 *
 * @param {PlayersState} state
 * @returns {PlayersState}
 */
function addPlayer(state) {
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

  // merge the new player's info with the provided state
  return merge({}, state, {
    ids: state.ids.concat(id),
    data: { [id]: data },
    offsets: { [id]: offset },
    turns: { [id]: [] },
  });
}

/**
 * Get the id of the currently active player (there con be only one active player at a time)
 *
 * @param {PlayersState} state
 * @returns {null|PlayerId}
 */
function getActivePlayerId(state) {
  const activeId = findKey(state.data, value => value.isActive);

  // before the stopwatch starts, there's no active player
  if (!activeId) {
    return null;
  }

  return parseInt(activeId, 10);
}

/**
 * Update the elapsed time value of the current active player's turn
 *
 * @param {PlayersState} state
 * @param {PlayerId} id - The id of the active player
 * @param {number} time
 * @returns {PlayersState}
 */
function elapseTurnTime(state, id, time) {
  const previousTurns = state.turns[id].slice(0, -1);

  return merge({}, state, {
    turns: { [id]: previousTurns.concat(time - state.offsets[id]) },
  });
}

/**
 * Set up a new turn for next player; if previousId is provided, set it as false
 *
 * @param {PlayersState} state
 * @param {PlayerId} id - The id of the next player
 * @param {number} time
 * @param {?PlayerId} [previousId] - The id of the previous player
 * @returns {PlayersState}
 */
function setNewTurn(state, id, time, previousId = null) {
  return merge({}, state, {
    data: Object.assign(
      { [id]: { isActive: true } },
      previousId ? { [previousId]: { isActive: false } } : null
    ),
    offsets: { [id]: time },
    turns: { [id]: state.turns[id].concat(0) },
  });
}

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
 * @property {object.<PlayerId, number[]>} turns - The time elapsed during each of the a player's
 * turns, in milliseconds
 */
const initialState = recur(addPlayer, {
  ids: [],
  data: {},
  offsets: {},
  turns: {},
}, DEFAULT_PLAYER_COUNT);

/**
 * Reducer for PlayerTimers
 *
 * @param {PlayersState} state
 * @param {TimerAction|InputAction} action
 * @returns {PlayersState}
 */
function players(state = initialState, action) {
  /** @type {null|PlayerId} */
  const id = getActivePlayerId(state);

  switch (action.type) {
    case NAME_INPUT_CHANGE:
      return merge({}, state, {
        data: { [action.id]: { name: action.value } },
      });

    case ADD_PLAYER:
      return addPlayer(state);

    case PLAY:
      return setNewTurn(state, 1, action.time);

    case TICK:
    case PAUSE:
      return elapseTurnTime(state, id, action.time);

    case RESUME:
      const turn = state.turns[id].length - 1;

      // update the turn's offset
      return merge({}, state, {
        offsets: { [id]: action.time - state.turns[id][turn] },
      });

    // set the next player as active, checking if the active player's id is the last one
    case NEXT:
      const nextId = id === state.ids.length ? 1 : id + 1;

      return setNewTurn(
        elapseTurnTime(state, id, action.time),
        nextId,
        action.time,
        id
      );

    default:
      return state;
  }
}

export { initialState };
export default players;
