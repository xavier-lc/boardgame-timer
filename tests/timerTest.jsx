import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Timer from '../lib/components/Timer.jsx';
import TwoTimingDigits from '../lib/components/TwoTimingDigits.jsx';

function setup() {
  const props = { hours: 0, minutes: 1, seconds: 2 };

  const renderer = TestUtils.createRenderer();

  renderer.render(<Timer {...props} />);

  return renderer.getRenderOutput();
}

describe('Timer', function () {
  it('should render element', function () {
    const element = setup();

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      <TwoTimingDigits value={0} />,
      ':',
      <TwoTimingDigits value={1} />,
      ':',
      <TwoTimingDigits value={2} />,
    ]);
  });
});
