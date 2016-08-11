import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Timer from './../../lib/components/Timer.jsx';
import TwoTimingDigits from './../../lib/components/TwoTimingDigits.jsx';

/**
 * Set up a Timer element for testing purposes
 *
 * @param {boolean} isVisible
 * @returns {ReactElement}
 */
function setup(isVisible = true) {
  const props = { elapsed: 62000, isVisible };

  const renderer = TestUtils.createRenderer();

  renderer.render(<Timer {...props} />);

  return renderer.getRenderOutput();
}

describe('Timer', function () {
  it('should render element', function () {
    const element = setup();

    expect(element.type).toBe('div');
    expect(element.props.className).toBe('');
    expect(element.props.children).toEqual([
      <TwoTimingDigits value={0} />,
      ':',
      <TwoTimingDigits value={1} />,
      ':',
      <TwoTimingDigits value={2} />,
    ]);
  });

  it('should hide element if isVisible is false', function () {
    const element = setup(false);

    expect(element.props.className).toBe('no');
  });
});
