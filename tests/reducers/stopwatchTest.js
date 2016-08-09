import expect from 'expect';
import { ADD_PLAYER, PLAY, PAUSE, RESUME, TICK, NEXT } from './../../lib/constants/actionTypes';
import { play, tick, pause, resume, stop, addPlayer, next } from './../../lib/actions/actions';
import stopwatch, { initialState } from './../../lib/reducers/stopwatch';
import { diff, timeToMs } from './../../lib/utils/date';

describe('stopwatch reducer', function () {
  it('should be off on its initial state', function () {
    expect(initialState.isOn).toBe(false);
    expect(initialState.start).toBe(null);
    expect(initialState.offset).toBe(null);
    expect(initialState.days).toBe(0);
    expect(initialState.hours).toBe(0);
    expect(initialState.minutes).toBe(0);
    expect(initialState.seconds).toBe(0);
    expect(initialState.milliseconds).toBe(0);
    expect(initialState.elapsed).toBe(0);
    expect(initialState.finish).toBe(null);
    expect(initialState.intervalId).toBe(null);
  });

  context('PLAY/PAUSE/RESUME/TICK', function () {
    let playAction;
    let stateAfterPlay;

    let pauseAction;
    let stateAfterPause;

    let resumeAction;
    let stateAfterResume;

    const intervalId = 1;
    let tickAction;
    let stateAfterTick;

    let secondPauseAction;
    let stateAfterSecondPause;

    let stopAction;
    let stateAfterStop;

    before(function (done) {
      playAction = play();
      stateAfterPlay = stopwatch(initialState, playAction);

      // make sure that there's a bit of time between the actions
      setTimeout(function () {
        pauseAction = pause();
        stateAfterPause = stopwatch(stateAfterPlay, pauseAction);

        setTimeout(function () {
          resumeAction = resume();
          stateAfterResume = stopwatch(stateAfterPause, resumeAction);

          setTimeout(function () {
            tickAction = tick(intervalId);
            stateAfterTick = stopwatch(stateAfterResume, tickAction);

            setTimeout(function () {
              secondPauseAction = pause();
              stateAfterSecondPause = stopwatch(stateAfterTick, secondPauseAction);

              stopAction = stop();
              stateAfterStop = stopwatch(stateAfterSecondPause, stopAction);

              done();
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    });

    it('should be started on "PLAY" action', function () {
      expect(stateAfterPlay.isOn).toBe(true);
      expect(stateAfterPlay.start).toBe(playAction.time);
      expect(stateAfterPlay.offset).toBe(playAction.time);
    });

    it('should be updated on "PAUSE" action', function () {
      expect(stateAfterPause).toEqual(
        Object.assign(
          {},
          stateAfterPlay,
          diff(stateAfterPlay.offset, pauseAction.time),
          {
            isOn: false,
            elapsed: pauseAction.time - stateAfterPlay.offset
          }
        )
      );
    });

    it('should be back "on" on "RESUME" action', function () {
      expect(stateAfterResume.isOn).toBe(true);
      expect(stateAfterResume.offset).toBe(resumeAction.time);
    });

    it('should be updated on "TICK" action', function () {
      expect(stateAfterTick).toEqual(
        Object.assign(
          {},
          stateAfterResume,
          diff(stateAfterResume.offset, tickAction.time + stateAfterResume.elapsed),
          { intervalId: intervalId }
        )
      );
    });

    it('should finish on "STOP" action', function () {
      expect(stateAfterStop).toEqual(
        Object.assign(
          {},
          stateAfterTick,
          diff(stateAfterTick.offset, secondPauseAction.time + stateAfterTick.elapsed),
          {
            isOn: false,
            elapsed: stateAfterTick.elapsed + secondPauseAction.time - stateAfterTick.offset,
            finish: stopAction.time,
            intervalId: null
          }
        )
      );
    });
  });
});
