import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Timer from './../../lib/components/Timer.jsx';
import PlayerNameInput from './../../lib/components/PlayerNameInput.jsx';
import Player from './../../lib/components/Player.jsx';

/**
 * dummy input handler function
 */
function change() {
  console.log('change');
}

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
  id: 1,
  name: 'Player #1',
  inputChangeHandler: change,
};

describe('Player', function () {
  it('should render element with input visible when timer is not started', function () {
    const props = Object.assign({
      isEditable: true,
      isActive: false,
      elapsed: 0,
      isStopwatchOn: false,
    }, testProps);

    const element = setup(props);

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      <span className="no">{props.name}</span>,
      <PlayerNameInput
        id={props.id}
        isEditable
        changeHandler={props.inputChangeHandler}
        value={props.name}
      />,
      <Timer
        elapsed={props.elapsed}
        isOn={props.isStopwatchOn}
        isVisible={false}
      />,
    ]);
  });

  it('should have "active" class on "span" when active', function () {
    const props = Object.assign({
      isEditable: false,
      isActive: true,
      elapsed: 62000,
      isStopwatchOn: true,
    }, testProps);

    const element = setup(props);

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      <span className="active">{props.name}</span>,
      <PlayerNameInput
        id={props.id}
        isEditable={false}
        changeHandler={props.inputChangeHandler}
        value={props.name}
      />,
      <Timer
        elapsed={props.elapsed}
        isOn={props.isStopwatchOn}
        isVisible
      />,
    ]);
  });
});
