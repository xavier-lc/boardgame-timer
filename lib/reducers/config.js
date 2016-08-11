import _ from 'lodash';

import { TURN_TIME_CHANGE } from './../constants/actionTypes';

const initialState = {
  turnTime: {
    minutes: 1,
    seconds: 0,
    maxMinutes: 59,
  },
};

function config(state = initialState, action) {
  switch (action.type) {
    case TURN_TIME_CHANGE:
      const newState = _.cloneDeep(state);

      newState.turnTime[action.units] = parseInt(action.value, 10);

      return newState;

    default:
      return state;
  }
}

export default config;
