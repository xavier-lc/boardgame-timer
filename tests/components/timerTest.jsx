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
 * @param {boolean} hideHours
 * @param {number} elapsed
 * @returns {ReactElement}
 */
function setup(isVisible = true, isOn = true, hideHours = false, elapsed = 62125) {
  const props = { isVisible, isOn, hideHours, elapsed };

  const renderer = TestUtils.createRenderer();

  renderer.render(<Timer {...props} />);

  return renderer.getRenderOutput();
}

describe('Timer', function () {
  it('should hide element if isVisible is false', function () {
    const element = setup(false);

    expect(element.type).toBe('div');
    expect(element.props.className).toInclude('hidden');
  });

  it('should hide hours if hideHours prop is true', function () {
    const element = setup(true, true, true);

    const hours = element.props.children[0];

    expect(element.props.className).toNotInclude('hidden');

    expect(hours.type).toBe('span');
    expect(hours.props.className).toInclude('hidden');
  });

  it('should show hours if bigger than 0 even if hideHours prop is true', function () {
    const element = setup(true, true, true, 3610000);

    const hours = element.props.children[0];

    expect(hours.props.className).toNotInclude('hidden');
  });

  it('should render element without milliseconds if isOn and has elapsed time', function () {
    const element = setup();

    const hours = element.props.children[0];
    const hoursDigits = hours.props.children[0];
    const minDigits = element.props.children[1];
    const secDigits = element.props.children[3];
    const ms = element.props.children[4];

    expect(hoursDigits.props.value).toBe(0);
    expect(minDigits.props.value).toBe(1);
    expect(secDigits.props.value).toBe(2);

    expect(ms.props.className).toInclude('hidden');
  });

  it('should show milliseconds if is not on', function () {
    const element = setup(true, false);

    const ms = element.props.children[4];

    expect(ms.props.className).toNotInclude('hidden');
    expect(ms.props.children).toEqual(['.', '125']);
  });
});
