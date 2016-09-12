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

    const input = element.props.children[0];
    const nameSpan = element.props.children[1];
    const timer = element.props.children[2];
    const progress = element.props.children[3];

    expect(TestUtils.isElementOfType(input, PlayerNameInput)).toBe(true);
    expect(input.props.isVisible).toExist();

    expect(nameSpan.type).toBe('span');
    expect(nameSpan.props.className).toInclude('hidden');

    expect(TestUtils.isElementOfType(timer, Timer)).toBe(true);
    expect(timer.props.isVisible).toNotExist();

    expect(progress.type).toBe('div');
    expect(progress.props.className).toInclude('hidden');
  });

  it('should have name, Timer and progress bar visible when active', function () {
    const props = Object.assign({
      isEditable: false,
      isActive: true,
      isStopwatchOn: true,
    }, testProps);

    const element = setup(props);

    const input = element.props.children[0];
    const nameSpan = element.props.children[1];
    const timer = element.props.children[2];
    const progress = element.props.children[3];

    expect(input.props.isVisible).toNotExist();

    expect(nameSpan.props.className).toNotInclude('hidden');

    expect(timer.props.isVisible).toExist();

    expect(progress.props.className).toNotInclude('hidden');
  });
});
