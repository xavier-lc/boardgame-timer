import expect from 'expect';
import { TURN_TIME_CHANGE } from './../../lib/constants/actionTypes';
import { changeTurnTime } from './../../lib/actions/actions';
import config, { initialState } from './../../lib/reducers/config';

describe('config reducer', function () {
  it('should update the player\'s turn time value', function () {
    const minutes = 0;
    let newState = config(initialState, changeTurnTime('minutes', minutes));

    expect(newState.turnTime.minutes).toBe(minutes);

    const seconds = 30;
    newState = config(initialState, changeTurnTime('seconds', seconds));

    expect(newState.turnTime.seconds).toBe(seconds);
  });
});
