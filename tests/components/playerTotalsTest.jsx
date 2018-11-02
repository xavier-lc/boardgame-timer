import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import setup from './../setup';
import { initialState as playersInitialState } from './../../lib/reducers/players';
import { initialState as stopwatchInitialState } from './../../lib/reducers/stopwatch';
import PlayerTotals from './../../lib/components/PlayerTotals.jsx';
import TimerButton from './../../lib/components/TimerButton.jsx';

/**
 * Test props
 *
 * @param {?number} [start]
 * @param {?number} [finish]
 * @returns {{players, stopwatch: *}}
 */
function getProps(start = null, finish = null) {
  const stopwatch = Object.assign({}, stopwatchInitialState, { start, finish });

  return { players: playersInitialState, stopwatch };
}

describe('PlayerTotals', function () {
  it('should be hidden if timer has not started', function () {
    const element = setup(PlayerTotals, getProps());
    const button = element.props.children[0];
    const totalsDiv = element.props.children[1];

    expect(element.type).toBe('div');

    expect(TestUtils.isElementOfType(button, TimerButton)).toBe(true);
    expect(button.props.isVisible).toNotExist();

    expect(totalsDiv.type).toBe('div');
    expect(totalsDiv.props.className).toInclude('hidden');
  });

  it('should have as many totals as players has the state', function () {
    const element = setup(PlayerTotals, getProps());
    const totalsDiv = element.props.children[1];

    expect(Array.isArray(totalsDiv.props.children)).toBe(true);
    expect(totalsDiv.props.children.length).toBe(playersInitialState.ids.length);
  });

  it('should have button visible but not totals when timer starts', function () {
    const element = setup(PlayerTotals, getProps(0));
    const button = element.props.children[0];
    const totalsDiv = element.props.children[1];

    expect(button.props.isVisible).toExist();

    expect(totalsDiv.props.className).toInclude('hidden');
  });

  it('should have totals visible but not button when timer finishes', function () {
    const element = setup(PlayerTotals, getProps(0, 1));
    const button = element.props.children[0];
    const totalsDiv = element.props.children[1];

    expect(button.props.isVisible).toNotExist();

    expect(totalsDiv.props.className).toNotInclude('hidden');
  });
});
