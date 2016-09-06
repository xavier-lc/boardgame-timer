import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Statistics from './../../lib/components/Statistics.jsx';
import Timer from './../../lib/components/Timer.jsx';

/**
 * Set up a Statistics element for testing purposes
 *
 * @param {?number} start
 * @param {?number} finish
 * @param {number} elapsed
 * @param {boolean} isOn
 * @returns {ReactElement}
 */
function setup(start, finish, elapsed, isOn) {
  const props = { start, finish, elapsed, isOn };

  const renderer = TestUtils.createRenderer();

  renderer.render(<Statistics {...props} />);

  return renderer.getRenderOutput();
}

describe('Statistics', function () {
  it('should have "hidden" class if not finished', function () {
    const element = setup(0, null, 1, true);

    expect(element.type).toBe('div');
    expect(element.props.className).toBe('hidden');
  });

  it('should show statistics if finished', function () {
    const start = 1000;
    const finish = 5000;
    const elapsed = 2000;

    const element = setup(start, finish, elapsed, false);

    expect(element.props.children).toEqual([
      <div>
        <span className="stats__title">Total time:</span>
        <Timer
          elapsed={finish - start}
          isVisible
          isOn={false}
          className="inb"
        />
      </div>,
      <div>
        <span className="stats__title">Paused time:</span>
        <Timer
          elapsed={finish - start - elapsed}
          isVisible
          isOn={false}
          className="inb"
        />
      </div>,
    ]);
  });
});
