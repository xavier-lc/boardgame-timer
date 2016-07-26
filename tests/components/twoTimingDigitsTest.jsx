import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TwoTimingDigits from '../../lib/components/TwoTimingDigits.jsx';

/**
 * Set up a TwoTimingDigits element for testing purposes
 *
 * @returns {ReactElement}
 */
function setup() {
  const props = { value: 0 };

  const renderer = TestUtils.createRenderer();

  renderer.render(<TwoTimingDigits {...props} />);

  return renderer.getRenderOutput();
}

describe('TwoTimingDigits', function () {
  it('should render element', function () {
    const element = setup();

    expect(element.type).toBe('span');
    expect(element.props.children).toBe('00');
  });
});
