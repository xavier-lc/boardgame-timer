import expect from 'expect';
import { changeTurnTime } from 'state/actions';
import config, { initialState } from 'state/reducers/config';

describe('config reducer', function() {
    it("should update the player's turn time value", function() {
        const minutes = 0;
        let newState = config(initialState, changeTurnTime('minutes', minutes));

        expect(newState.turnTime.minutes).toBe(minutes);

        const seconds = 30;
        newState = config(initialState, changeTurnTime('seconds', seconds));

        expect(newState.turnTime.seconds).toBe(seconds);
    });
});
