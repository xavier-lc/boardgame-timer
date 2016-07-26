import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TimerButton from '../../lib/components/TimerButton.jsx';

/**
 * dummy button handler function
 */
function clic() {
  console.log('clic');
}

/**
 * Set up a TimerButton element for testing purposes
 *
 * @param {boolean} isVisible
 * @returns {ReactElement}
 */
function setup(isVisible) {
  const props = {
    clickHandler: clic,
    isVisible: isVisible,
    txt: 'test me',
  };

  const renderer = TestUtils.createRenderer();

  renderer.render(<TimerButton {...props} />);

  return renderer.getRenderOutput();
}

describe('TimerButton', function () {
  it('should render element', function () {
    const element = setup(true);

    expect(element.type).toBe('button');
    expect(element.props.children).toBe('test me');
    expect(element.props.className).toBe('');
    expect(element.props.onClick).toBe(clic);
  });

  it('should have "no" class if not visible', function () {
    const element = setup(false);

    expect(element.props.className).toBe('no');
  });
});
