import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TimeSelector from './../../lib/components/TimeSelector.jsx';

/**
 * Set up a TimeSelector element for testing purposes
 *
 * @returns {ReactElement}
 */
function setup(max) {
  const props = { max };

  const renderer = TestUtils.createRenderer();

  renderer.render(<TimeSelector {...props} />);

  return renderer.getRenderOutput();
}

describe('TimeSelector', function () {
  it('should render element', function () {
    const max = 10;
    const element = setup(max);

    expect(element.type).toBe('select');
    expect(element.props.children.length).toBe(max + 1);
  });

  it('should have "00" as the content of its first children', function () {
    const max = 10;
    const element = setup(max);

    expect(element.props.children[0].props.value).toBe(0);
    expect(element.props.children[0].props.children).toBe('00');
  });

  it('should have "max" as the content of its last children', function () {
    const max = 10;
    const element = setup(max);

    expect(element.props.children[max].props.value).toBe(max);
    expect(element.props.children[max].props.children).toBe('10');
  });
});
