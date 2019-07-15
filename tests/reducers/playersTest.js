import expect from 'expect';
import {
    play,
    tick,
    pause,
    resume,
    addPlayer,
    next,
    changeName
} from 'state/actions';
import players, { initialState } from 'state/reducers/players';

describe('players reducer', function() {
    const initialLength = initialState.ids.length;

    it('should have 2 inactive players by default', function() {
        expect(initialLength).toBe(2);
        expect(Object.keys(initialState.data).length).toBe(2);
        expect(Object.keys(initialState.offsets).length).toBe(2);
        expect(Object.keys(initialState.turns).length).toBe(2);

        expect(initialState.data[1].isActive).toBe(false);
        expect(initialState.data[2].isActive).toBe(false);

        expect(initialState.offsets[1]).toBe(null);
        expect(initialState.offsets[2]).toBe(null);
    });

    it('should update user name on "CHANGE" action', function() {
        const id = 1;
        const name = 'tureru';
        const newState = players(initialState, changeName(id, name));

        expect(newState.data[id].name).toBe(name);
    });

    it('should add a new player on "ADD_PLAYER" action', function() {
        const newState = players(initialState, addPlayer());

        expect(initialState.ids.length).toBe(
            initialLength,
            "The reducer is a pure function and shouldn't make changes to the initialState object"
        );

        expect(newState.ids.length).toBe(3);
        expect(Object.keys(newState.data).length).toBe(3);
        expect(Object.keys(newState.offsets).length).toBe(3);
        expect(Object.keys(newState.turns).length).toBe(3);
    });

    context('PLAY/PAUSE/RESUME/TICK', function() {
        let playAction;
        let stateAfterPlay;

        let pauseAction;
        let stateAfterPause;

        let resumeAction;
        let stateAfterResume;

        let tickAction;
        let stateAfterTick;

        let nextAction;
        let stateAfterNext;

        let secondNextAction;
        let stateAfterSecondNext;

        before(function(done) {
            playAction = play();
            stateAfterPlay = players(initialState, playAction);

            // make sure that there's a bit of time between the actions
            setTimeout(function() {
                pauseAction = pause();
                stateAfterPause = players(stateAfterPlay, pauseAction);

                setTimeout(function() {
                    resumeAction = resume();
                    stateAfterResume = players(stateAfterPause, resumeAction);

                    setTimeout(function() {
                        tickAction = tick();
                        stateAfterTick = players(stateAfterResume, tickAction);

                        setTimeout(function() {
                            nextAction = next();
                            stateAfterNext = players(
                                stateAfterTick,
                                nextAction
                            );

                            setTimeout(function() {
                                secondNextAction = next();
                                stateAfterSecondNext = players(
                                    stateAfterNext,
                                    secondNextAction
                                );

                                done();
                            }, 100);
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);
        });

        it('should set player #1 as active on "PLAY" action', function() {
            expect(stateAfterPlay.data[1].isActive).toBe(true);
            expect(stateAfterPlay.data[2].isActive).toBe(false);

            expect(stateAfterPlay.offsets[1]).toBe(playAction.time);
            expect(stateAfterPlay.offsets[2]).toBe(null);

            expect(stateAfterPlay.turns[1].length).toBe(1);
            expect(stateAfterPlay.turns[2].length).toBe(0);

            expect(initialState.offsets[1]).toBe(
                null,
                "The reducer is a pure function and shouldn't make changes to the initialState object"
            );
        });

        it('should keep track of elapsed time on "PAUSE" action', function() {
            expect(stateAfterPause.offsets[1]).toBe(
                stateAfterPlay.offsets[1],
                'The PAUSE action has nothing to do with the offset prop'
            );

            expect(stateAfterPause.turns[1][0]).toBe(
                pauseAction.time - stateAfterPause.offsets[1]
            );

            expect(stateAfterPause.turns[1][0]).toBeMoreThan(
                stateAfterPlay.turns[1][0]
            );
        });

        it('should update player\'s offset on "RESUME" action', function() {
            expect(stateAfterResume.offsets[1]).toBe(
                resumeAction.time - stateAfterPause.turns[1][0]
            );
            expect(stateAfterResume.offsets[1]).toBeMoreThan(
                stateAfterPause.offsets[1]
            );
        });

        it('should update player\'s time on "TICK" action', function() {
            expect(stateAfterTick.turns[1][0]).toBe(
                tickAction.time - stateAfterResume.offsets[1]
            );

            expect(stateAfterTick.turns[1][0]).toBeMoreThan(
                stateAfterResume.turns[1][0]
            );
        });

        it('should update player\'s time on "NEXT" action and set the next one as active', function() {
            expect(stateAfterNext.turns[1][0]).toBe(
                nextAction.time - stateAfterTick.offsets[1]
            );

            expect(stateAfterNext.turns[1][0]).toBeMoreThan(
                stateAfterTick.turns[1][0]
            );

            expect(stateAfterNext.data[1].isActive).toBe(false);
            expect(stateAfterNext.data[2].isActive).toBe(true);

            expect(stateAfterNext.offsets[2]).toBe(nextAction.time);

            expect(stateAfterNext.turns[1].length).toBe(1);
            expect(stateAfterNext.turns[2].length).toBe(1);
        });

        it('should go back to player #1 on another "NEXT" action', function() {
            expect(stateAfterSecondNext.turns[2][0]).toBe(
                secondNextAction.time - stateAfterNext.offsets[2]
            );

            expect(stateAfterSecondNext.turns[2][0]).toBeMoreThan(
                stateAfterNext.turns[2][0]
            );

            expect(stateAfterSecondNext.data[1].isActive).toBe(true);
            expect(stateAfterSecondNext.data[2].isActive).toBe(false);

            expect(stateAfterSecondNext.offsets[1]).toBe(secondNextAction.time);

            expect(stateAfterSecondNext.turns[1].length).toBe(2);
            expect(stateAfterSecondNext.turns[2].length).toBe(1);
        });
    });
});
