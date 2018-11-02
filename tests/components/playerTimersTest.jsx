import expect from 'expect';
import TestUtils from 'react-dom/test-utils';
import setup from './../setup';
import dummyHandler from './../dummyHandler';
import Player from './../../lib/components/Player.jsx';
import PlayerTimers from './../../lib/components/PlayerTimers.jsx';
import PlayerTotals from './../../lib/components/PlayerTotals.jsx';

function getTestProps(isOn = false, start = null, finish = null) {
  return {
    players: {
      ids: [1, 2],
      data: {
        1: {
          name: 'Player #1',
          isActive: false,
        },
        2: {
          name: 'Player #2',
          isActive: false,
        },
      },
      offsets: {
        1: null,
        2: null,
      },
      turns: {
        1: [],
        2: [],
      },
    },
    stopwatch: {
      isOn,
      start,
      finish,
    },
    config: {
      turnTime: {
        minutes: 1,
        seconds: 0,
      },
    },
    clickAddHandler: dummyHandler('add'),
    clickNextHandler: dummyHandler('next'),
    inputChangeHandler: dummyHandler('change'),
  };
}

describe('PlayerTimers', function () {
  it('should show Players w/out heading if not started', function () {
    const element = setup(PlayerTimers, getTestProps());

    const body = element.props.children;
    const timersDiv = body.props.children[0];
    const h4 = timersDiv.props.children[0];
    const totals = body.props.children[1];

    expect(element.props.className).toBe('panel panel-primary');

    expect(body.props.className).toBe('panel-body');

    expect(timersDiv.type).toBe('div');
    expect(timersDiv.props.className).toNotInclude('hidden');

    expect(h4.type).toBe('h4');
    expect(h4.props.className).toInclude('hidden');

    expect(TestUtils.isElementOfType(totals, PlayerTotals)).toBe(true);
  });

  it('should render as many Player elements as players exist in the state', function () {
    const testProps = getTestProps();
    const element = setup(PlayerTimers, testProps);

    const body = element.props.children;
    const timersDiv = body.props.children[0];
    const players = timersDiv.props.children[1];

    expect(Array.isArray(players)).toBe(true);
    expect(players.length).toBe(testProps.players.ids.length);
    players.forEach(player => expect(TestUtils.isElementOfType(player, Player)).toBe(true));
  });

  it('should show heading if started', function () {
    const element = setup(PlayerTimers, getTestProps(true, 0, null));

    const body = element.props.children;
    const timersDiv = body.props.children[0];
    const h4 = timersDiv.props.children[0];

    expect(h4.props.className).toNotInclude('hidden');
  });

  it('should hide players if is finished', function () {
    const element = setup(PlayerTimers, getTestProps(false, 0, 1));

    const body = element.props.children;
    const timersDiv = body.props.children[0];

    expect(timersDiv.props.className).toInclude('hidden');
  });
});
