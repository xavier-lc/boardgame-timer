import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Statistics from '../lib/components/Statistics.jsx';
import Timer from '../lib/components/Timer.jsx';

/**
 * Set up a Statistics element for testing purposes
 *
 * @param {?number} start
 * @param {?number} finish
 * @param {number} elapsed
 * @returns {ReactElement}
 */
function setup(start, finish, elapsed) {
  const props = { start, finish, elapsed };

  const renderer = TestUtils.createRenderer();

  renderer.render(<Statistics {...props} />);

  return renderer.getRenderOutput();
}

describe('Statistics', function () {
  it('should have "no" class if not finished', function () {
    const element = setup(0, null, 1);

    expect(element.type).toBe('div');
    expect(element.props.className).toBe('no');
  });

  it('should show statistics if finished', function () {
    const start = 1000;
    const finish = 5000;
    const elapsed = 2000;

    const element = setup(start, finish, elapsed);

    const emptyTime = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    };

    expect(element.props.children).toEqual([
      <div>
        <span>Paused time:</span>
        <Timer
          {...Object.assign(
            {},
            emptyTime,
            { seconds: (finish - (start + elapsed)) / 1000 }
          )}
        />
      </div>,
      <div>
        <span>Total time:</span>
        <Timer
          {...Object.assign(
            {},
            emptyTime,
            { seconds: (finish - start) / 1000 }
          )}
        />
      </div>,
    ]);
  });
});
