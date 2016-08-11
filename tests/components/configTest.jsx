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
        maxMinutes: 59,
      },
      selectChangeHandler: change,
    };
    const element = setup(props);

    expect(element.type).toBe('div');
    expect(element.props.className).toBe('config');
    expect(element.props.children).toEqual([
      <h2>Config</h2>,
      <TurnTime
        maxMinutes={props.config.maxMinutes}
        selectChangeHandler={props.selectChangeHandler}
      />,
    ]);
  });
});
