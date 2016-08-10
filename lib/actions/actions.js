import { PLAY, PAUSE, TICK, RESUME, STOP, ADD_PLAYER, NEXT, NAME_INPUT_CHANGE } from './../constants/actionTypes';

/**
 * @typedef {object} TimerAction
 * @property {string} type
 * @property {number} [time] - Optional, moment when the action was triggered
 * @property {number} [intervalId] - Optional, id of the interval triggering this action
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

function nameInputChange(id, value) {
  return {
    type: NAME_INPUT_CHANGE,
    id,
    value,
  };
}

export { play, tick, pause, resume, stop, addPlayer, next, nameInputChange };
