import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TurnTime from './../../lib/components/TurnTime.jsx';
import TimeSelector from './../../lib/components/TimeSelector.jsx';

/**
 * dummy change handler function
 */
function change() {
  console.log('change');
}

/**
 * Set up a TurnTime element for testing purposes
 *
 * @returns {ReactElement}
 */
function setup(maxMinutes) {
  const props = {
    maxMinutes,
    selectChangeHandler: change,
  };

  const renderer = TestUtils.createRenderer();

  renderer.render(<TurnTime {...props} />);

  return renderer.getRenderOutput();
}

describe('TurnTime', function () {
  it('should render element', function () {
    const maxMinutes = 10;
    const element = setup(maxMinutes);

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      <span>Turn time:</span>,
      <div>
        <TimeSelector
          units="minutes"
          changeHandler={change}
          max={maxMinutes}
        />
        :
        <TimeSelector
          units="seconds"
          changeHandler={change}
          max={59}
        />
      </div>,
    ]);
  });
});
