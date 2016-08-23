import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Timer from './../../lib/components/Timer.jsx';
import TwoTimingDigits from './../../lib/components/TwoTimingDigits.jsx';

/**
 * Set up a Timer element for testing purposes
 *
 * @param {boolean} isVisible
 * @param {boolean} isOn
 * @returns {ReactElement}
 */
function setup(isVisible = true, isOn = true) {
  const props = { elapsed: 62125, isVisible, isOn };

  const renderer = TestUtils.createRenderer();

  renderer.render(<Timer {...props} />);

  return renderer.getRenderOutput();
}

describe('Timer', function () {
  it('should render element without milliseconds if isOn and has elapsed time', function () {
    const element = setup();

    expect(element.type).toBe('div');
    expect(element.props.className).toBe('');
    expect(element.props.children).toEqual([
      <TwoTimingDigits value={0} />,
      ':',
      <TwoTimingDigits value={1} />,
      ':',
      <TwoTimingDigits value={2} />,
      <span className="hidden">
        {['.', '125']}
      </span>,
    ]);
  });

  it('should hide element if isVisible is false', function () {
    const element = setup(false);

    expect(element.props.className).toBe('hidden');
  });

  it('should show milliseconds if is not on', function () {
    const element = setup(true, false);

    expect(element.props.children).toEqual([
      <TwoTimingDigits value={0} />,
      ':',
      <TwoTimingDigits value={1} />,
      ':',
      <TwoTimingDigits value={2} />,
      <span className="">
        {['.', '125']}
      </span>,
    ]);
  });
});
