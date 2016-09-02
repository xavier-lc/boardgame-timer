import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Config from './../../lib/components/Config.jsx';
import TurnTime from './../../lib/components/TurnTime.jsx';

/**
 * dummy change handler function
 */
function change() {
  console.log('change');
}

/**
 * Set up a Config element for testing purposes
 *
 * @returns {ReactElement}
 */
function setup(props) {
  const renderer = TestUtils.createRenderer();

  renderer.render(<Config {...props} />);

  return renderer.getRenderOutput();
}

describe('Config', function () {
  it('should render element', function () {
    const props = {
      config: {
        turnTime: {
          minutes: 1,
          seconds: 0,
          maxMinutes: 59,
        },
      },
      selectChangeHandler: change,
    };
    const element = setup(props);

    expect(element.type).toBe('div');
    expect(element.props.className).toBe('panel panel-primary');
    expect(element.props.children).toEqual(
      <div className="panel-body">
        <TurnTime
          minutes={props.config.turnTime.minutes}
          seconds={props.config.turnTime.seconds}
          maxMinutes={props.config.turnTime.maxMinutes}
          selectChangeHandler={props.selectChangeHandler}
        />
      </div>
    );
  });
});
