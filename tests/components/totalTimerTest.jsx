import expect from 'expect';
import React from 'react';
import setup from './../setup';
import dummyHandler from './../dummyHandler';
import { initialState } from './../../lib/reducers/players';
import TimerControlsUnstarted from './../../lib/components/TimerControlsUnstarted.jsx';
import TimerControls from './../../lib/components/TimerControls.jsx';
import Statistics from './../../lib/components/Statistics.jsx';
import TotalTimer from './../../lib/components/TotalTimer.jsx';

describe('TotalTimer', function () {
  it('should render element', function () {
    const props = {
      stopwatch: {
        isOn: false,
        elapsed: 0,
        start: null,
        finish: null,
        offset: null,
      },
      players: initialState,
      clickAddHandler: dummyHandler('add'),
      clickPlayHandler: dummyHandler('play'),
      clickNextHandler: dummyHandler('next'),
      clickPauseHandler: dummyHandler('pause'),
      clickResumeHandler: dummyHandler('resume'),
      clickStopHandler: dummyHandler('stop'),
    };

    const element = setup(TotalTimer, props);

    expect(element.type).toBe('div');
    expect(element.props.className).toBe('panel panel-primary');
    expect(element.props.children).toEqual(
      <div className="panel-body">
        <TimerControlsUnstarted
          isVisible={props.stopwatch.start === null}
          clickAddHandler={props.clickAddHandler}
          clickPlayHandler={props.clickPlayHandler}
        />
        <TimerControls
          isOn={props.stopwatch.isOn}
          elapsed={props.stopwatch.elapsed}
          start={props.stopwatch.start}
          finish={props.stopwatch.finish}
          clickNextHandler={props.clickNextHandler}
          clickPauseHandler={props.clickPauseHandler}
          clickResumeHandler={props.clickResumeHandler}
          clickStopHandler={props.clickStopHandler}
        />
        <Statistics
          elapsed={props.stopwatch.elapsed}
          isOn={props.stopwatch.isOn}
          start={props.stopwatch.start}
          finish={props.stopwatch.finish}
          turns={0}
        />
      </div>
    );
  });
});
