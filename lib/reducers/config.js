import merge from 'lodash/merge';

import { TURN_TIME_CHANGE } from './../constants/actionTypes';

/**
 * The state that controls the turn time limit in minutes:seconds
 *
 * @typedef {object} TurnTime
 * @property {number} minutes - How many minutes can a player's turn last
 * @property {number} seconds - How many seconds can a player's turn last
 * @property {number} maxMinutes - Max number of minutes that a player's turn can be set to last
 */

/**
 * Initial state for ConfigContainer
 *
 * @typedef {object} ConfigState
 * @property {TurnTime} turnTime
 */
const initialState = {
  turnTime: {
    minutes: 1,
    seconds: 0,
    maxMinutes: 59,
  },
};

/**
 * Reducer for Config
 *
 * @param {ConfigState} state
 * @param {SelectAction} action
 * @returns {ConfigState}
 */
function config(state = initialState, action) {
  switch (action.type) {
    case TURN_TIME_CHANGE:
      return merge({}, state, {
        turnTime: { [action.units]: parseInt(action.value, 10) },
      });

    default:
      return state;
  }
}

export default config;
