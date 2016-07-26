import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Timer from './../../lib/components/Timer.jsx';
import Player from './../../lib/components/Player.jsx';

/**
 * Set up a Player element for testing purposes
 *
 * @param {object} props
 * @returns {ReactElement}
 */
function setup(props) {
  const renderer = TestUtils.createRenderer();

  renderer.render(<Player {...props} />);

  return renderer.getRenderOutput();
}

const testProps = {
  name: 'Player #1',
  hours: 0,
  minutes: 1,
  seconds: 2,
};

describe('Player', function () {
  it('should render element', function () {
    const props = Object.assign({ isActive: false }, testProps);

    const element = setup(props);

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      <span className="">{props.name}</span>,
      <Timer
        hours={props.hours}
        minutes={props.minutes}
        seconds={props.seconds}
      />,
    ]);
  });

  it('should have "active" class on "span" when active', function () {
    const props = Object.assign({ isActive: true }, testProps);

    const element = setup(props);

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      <span className="active">{props.name}</span>,
      <Timer
        hours={props.hours}
        minutes={props.minutes}
        seconds={props.seconds}
      />,
    ]);
  });
});
