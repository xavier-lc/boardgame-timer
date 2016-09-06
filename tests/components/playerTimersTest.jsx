import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TimerButton from './../../lib/components/TimerButton.jsx';
import Player from './../../lib/components/Player.jsx';
import PlayerTimers from './../../lib/components/PlayerTimers.jsx';

/**
 * dummy button handler function
 */
function add() {
  console.log('add');
}

/**
 * dummy button handler function
 */
function next() {
  console.log('next');
}

/**
 * dummy input handler function
 */
function change() {
  console.log('change');
}

/**
 * Set up a PlayerTimers element for testing purposes
 *
 * @param {object} props
 * @returns {ReactElement}
 */
function setup(props) {
  const renderer = TestUtils.createRenderer();

  renderer.render(<PlayerTimers {...props} />);

  return renderer.getRenderOutput();
}

function getTestProps(isOn = false, start = null) {
  return {
    players: {
      ids: [1, 2],
      data: {
        1: {
          name: 'Player #1',
          isActive: false,
        },
        2: {
          name: 'Player #2',
          isActive: false,
        },
      },
      offsets: {
        1: null,
        2: null,
      },
      turns: {
        1: [],
        2: [],
      }
    },
    stopwatch: {
      isOn: isOn,
      start: start,
    },
    config: {
      turnTime: {
        minutes: 1,
        seconds: 0,
      },
    },
    clickAddHandler: add,
    clickNextHandler: next,
    inputChangeHandler: change,
  };
}

describe('PlayerTimers', function () {
  it('should render as many Player elements as players exist in the state', function () {
    const testProps = getTestProps();
    const element = setup(testProps);

    expect(element.type).toBe('div');
    expect(element.props.className).toBe('panel panel-primary');
    expect(element.props.children).toEqual(
      <div className="panel-body">
        {
          [
            <Player
              id={1}
              key="player_1"
              isEditable
              isStopwatchOn={testProps.stopwatch.isOn}
              {...testProps.players.data[1]}
              turns={testProps.players.turns[1]}
              turnLimit={60000}
              inputChangeHandler={testProps.inputChangeHandler}
            />,
            <Player
              id={2}
              key="player_2"
              isEditable
              isStopwatchOn={testProps.stopwatch.isOn}
              {...testProps.players.data[2]}
              turns={testProps.players.turns[2]}
              turnLimit={60000}
              inputChangeHandler={testProps.inputChangeHandler}
            />,
          ]
        }
      </div>
    );
  });
});
