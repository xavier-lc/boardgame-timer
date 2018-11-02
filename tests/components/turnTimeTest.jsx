import expect from 'expect';
import React from 'react';
import setup from './../setup';
import dummyHandler from './../dummyHandler';
import TurnTime from './../../lib/components/TurnTime.jsx';
import TimeSelector from './../../lib/components/TimeSelector.jsx';

const change = dummyHandler('change');

/**
 * Set up a TurnTime element for testing purposes
 *
 * @param {number} minutes
 * @param {number} seconds
 * @param {number} maxMinutes
 * @returns {ReactElement}
 */
function propsSetup(minutes, seconds, maxMinutes) {
  const props = {
    minutes,
    seconds,
    maxMinutes,
    selectChangeHandler: change,
  };

  return setup(TurnTime, props);
}

describe('TurnTime', function () {
  it('should render element', function () {
    const minutes = 1;
    const seconds = 0;
    const maxMinutes = 10;
    const element = propsSetup(minutes, seconds, maxMinutes);

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      <span className="configTitle">Player turn time</span>,
      <TimeSelector
        value={minutes}
        units="minutes"
        changeHandler={change}
        max={maxMinutes}
      />,
      ':',
      <TimeSelector
        value={seconds}
        units="seconds"
        changeHandler={change}
        max={59}
      />,
    ]);
  });
});
