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
  turns: [],
  turnLimit: 60000,
  isStopwatchOn: false,
  inputChangeHandler: change,
};

describe('Player', function () {
  it('should render element with input visible when timer is not started', function () {
    const props = Object.assign({
      isEditable: true,
      isActive: false,
    }, testProps);

    const element = setup(props);

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      <PlayerNameInput
        id={props.id}
        isVisible
        changeHandler={props.inputChangeHandler}
        value={props.name}
      />,
      <span className="player__name hidden">{props.name}</span>,
      <Timer
        elapsed={0}
        isOn={props.isStopwatchOn}
        isVisible={false}
        className="inb"
      />,
      <div className="progress hidden">
        <div className="progress-bar progress-bar-striped" style={{ width: '0.00%' }}>
        </div>
      </div>,
    ]);
  });

  it('should have name, Timer and progress bar visible when active', function () {
    const props = Object.assign({
      isEditable: false,
      isActive: true,
      isStopwatchOn: true,
    }, testProps);

    const element = setup(props);

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      <PlayerNameInput
        id={props.id}
        isVisible={false}
        changeHandler={props.inputChangeHandler}
        value={props.name}
      />,
      <span className="player__name">{props.name}</span>,
      <Timer
        elapsed={0}
        isOn={props.isStopwatchOn}
        isVisible
        className="inb"
      />,
      <div className="progress">
        <div className="progress-bar progress-bar-striped" style={{ width: '0.00%' }}>
        </div>
      </div>,
    ]);
  });
});
