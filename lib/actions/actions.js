import { PLAY, PAUSE, TICK, RESUME, STOP, ADD_PLAYER, NEXT } from './../constants/actionTypes';

/**
 * @typedef {object} Action
 * @property {string} type
 * @property {number} [time]
 * @property {number} [intervalId]
 */

function play() {
  return {
    type: PLAY,
    time: Date.now(),
  };
}

function tick(intervalId) {
  return {
    type: TICK,
    time: Date.now(),
    intervalId: intervalId,
  };
}

function pause() {
  return {
    type: PAUSE,
    time: Date.now(),
  };
}

function resume() {
  return {
    type: RESUME,
    time: Date.now(),
  };
}

function stop() {
  return {
    type: STOP,
    time: Date.now(),
  };
}

function addPlayer() {
  return {
    type: ADD_PLAYER,
  };
}

function next() {
  return {
    type: NEXT,
    time: Date.now(),
  };
}

export { play, tick, pause, resume, stop, addPlayer, next };
