import { PLAY, PAUSE, TICK, RESUME, STOP, ADD_PLAYER, NEXT, NAME_INPUT_CHANGE } from './../constants/actionTypes';

/**
 * @typedef {object} TimerAction
 * @property {string} type
 * @property {number} [time] - Optional, moment when the action was triggered
 * @property {number} [intervalId] - Optional, id of the interval triggering this action
 */

/**
 * @typedef {object} InputAction
 * @property {string} type
 * @property {number} id
 * @property {string} value
 */

/**
 * @returns {TimerAction}
 */
function play() {
  return {
    type: PLAY,
    time: Date.now(),
  };
}

/**
 * @returns {TimerAction}
 */
function tick(intervalId) {
  return {
    type: TICK,
    time: Date.now(),
    intervalId: intervalId,
  };
}

/**
 * @returns {TimerAction}
 */
function pause() {
  return {
    type: PAUSE,
    time: Date.now(),
  };
}

/**
 * @returns {TimerAction}
 */
function resume() {
  return {
    type: RESUME,
    time: Date.now(),
  };
}

/**
 * @returns {TimerAction}
 */
function stop() {
  return {
    type: STOP,
    time: Date.now(),
  };
}

/**
 * @returns {TimerAction}
 */
function addPlayer() {
  return {
    type: ADD_PLAYER,
  };
}

/**
 * @returns {TimerAction}
 */
function next() {
  return {
    type: NEXT,
    time: Date.now(),
  };
}

/**
 * Change on one of the <input> elements setting the player's names
 *
 * @param {number} id - The id of the player involved
 * @param {string} value - The value of the input
 * @returns {InputAction}
 */
function changeName(id, value) {
  return {
    type: NAME_INPUT_CHANGE,
    id,
    value,
  };
}

export { play, tick, pause, resume, stop, addPlayer, next, changeName };
