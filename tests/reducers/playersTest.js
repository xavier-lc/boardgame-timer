import expect from 'expect';
import { ADD_PLAYER, PLAY, PAUSE, RESUME, TICK, NEXT } from './../../lib/constants/actionTypes';
import { play, tick, pause, resume, stop, addPlayer, next } from './../../lib/actions/actions';
import players, { initialState } from './../../lib/reducers/players';
import { timeToMs } from './../../lib/utils/date';

describe('players reducer', function () {
  const initialLength = initialState.ids.length;

  it('should have 2 inactive players by default', function () {
    expect(initialLength).toBe(2);
    expect(Object.keys(initialState.data).length).toBe(2);
    expect(Object.keys(initialState.time).length).toBe(2);

    expect(initialState.data[1].isActive).toBe(false);
    expect(initialState.data[2].isActive).toBe(false);

    expect(initialState.time[1].offset).toBe(null);
    expect(initialState.time[2].offset).toBe(null);
  });

  it('should add a new player on "ADD_PLAYER" action', function () {
    const newState = players(initialState, addPlayer());

    expect(initialState.ids.length).toBe(
      initialLength,
      'The reducer is a pure function and shouldn\'t make changes to the initialState object'
    );

    expect(newState.ids.length).toBe(3);
    expect(Object.keys(newState.data).length).toBe(3);
    expect(Object.keys(newState.time).length).toBe(3);
  });

  context('PLAY/PAUSE/RESUME/TICK', function () {
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

    before(function (done) {
      playAction = play();
      stateAfterPlay = players(initialState, playAction);

      // make sure that there's a bit of time between the actions
      setTimeout(function () {
        pauseAction = pause();
        stateAfterPause = players(stateAfterPlay, pauseAction);

        setTimeout(function () {
          resumeAction = resume();
          stateAfterResume = players(stateAfterPause, resumeAction);

          setTimeout(function () {
            tickAction = tick();
            stateAfterTick = players(stateAfterResume, tickAction);

            setTimeout(function () {
              nextAction = next();
              stateAfterNext = players(stateAfterTick, nextAction);

              setTimeout(function () {
                secondNextAction = next();
                stateAfterSecondNext = players(stateAfterNext, secondNextAction);

                done();
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    });

    it('should set player #1 as active on "PLAY" action', function () {
      expect(stateAfterPlay.data[1].isActive).toBe(true);
      expect(stateAfterPlay.data[2].isActive).toBe(false);

      expect(stateAfterPlay.time[1].offset).toBe(playAction.time);
      expect(stateAfterPlay.time[2].offset).toBe(null);

      expect(initialState.time[1].offset).toBe(
        null,
        'The reducer is a pure function and shouldn\'t make changes to the initialState object'
      );
    });

    it('should keep track of elapsed time on "PAUSE" action', function () {
      expect(stateAfterPause.time[1].offset).toBe(
        stateAfterPlay.time[1].offset,
        'The PAUSE action has nothing to do with the offset prop'
      );

      expect(stateAfterPause.time[1].elapsed).toBe(
        pauseAction.time - stateAfterPause.time[1].offset
      );

      expect(timeToMs(stateAfterPause.time[1])).toBeMoreThan(
        timeToMs(stateAfterPlay.time[1])
      );
    });

    it('should update player\'s offset on "RESUME" action', function () {
      expect(stateAfterResume.time[1].offset).toBeMoreThan(stateAfterPlay.time[1].offset);
    });

    it('should update player\'s time on "TICK" action', function () {
      expect(timeToMs(stateAfterTick.time[1])).toBeMoreThan(
        timeToMs(stateAfterResume.time[1])
      );
    });

    it('should update player\'s time on "NEXT" action and set the next one as active', function () {
      expect(timeToMs(stateAfterNext.time[1])).toBeMoreThan(
        timeToMs(stateAfterTick.time[1])
      );

      expect(stateAfterNext.time[1].elapsed).toBeMoreThan(stateAfterResume.time[1].elapsed);

      expect(stateAfterNext.data[1].isActive).toBe(false);
      expect(stateAfterNext.data[2].isActive).toBe(true);

      expect(stateAfterNext.time[2].offset).toBe(nextAction.time);
    });

    it('should go back to player #1 on another "NEXT" action', function () {
      expect(timeToMs(stateAfterSecondNext.time[2])).toBeMoreThan(
        timeToMs(stateAfterNext.time[2])
      );

      expect(stateAfterSecondNext.time[2].elapsed).toBeMoreThan(stateAfterNext.time[2].elapsed);

      expect(stateAfterSecondNext.data[1].isActive).toBe(true);
      expect(stateAfterSecondNext.data[2].isActive).toBe(false);

      expect(stateAfterSecondNext.time[1].offset).toBe(secondNextAction.time);
    });
  });
});
