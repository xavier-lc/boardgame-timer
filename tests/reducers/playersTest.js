import expect from 'expect';
import { ADD_PLAYER, PLAY, PAUSE, RESUME, TICK, NEXT } from './../../lib/constants/actionTypes';
import { play, tick, pause, resume, stop, addPlayer, next } from './../../lib/actions/actions';
import players, { initialState } from './../../lib/reducers/players';

describe('players reducer', function () {
  it('should have 2 inactive players by default', function () {
    expect(initialState.ids.length).toBe(2);
    expect(Object.keys(initialState.data).length).toBe(2);
    expect(Object.keys(initialState.time).length).toBe(2);

    expect(initialState.data[1].isActive).toBe(false);
    expect(initialState.data[2].isActive).toBe(false);

    expect(initialState.time[1].offset).toBe(null);
    expect(initialState.time[2].offset).toBe(null);
  });

  it('should add a new player on "ADD_PLAYER" action', function () {
    const newState = players(initialState, addPlayer());

    expect(newState.ids.length).toBe(3);
    expect(Object.keys(newState.data).length).toBe(3);
    expect(Object.keys(newState.time).length).toBe(3);
  });

  it('should set player #1 as active on "PLAY" action', function () {
    const action = play();
    const newState = players(initialState, action);

    expect(initialState.data[1].isActive).toBe(true);
    expect(initialState.data[2].isActive).toBe(false);

    expect(initialState.time[1].offset).toBe(action.time);
    expect(initialState.time[2].offset).toBe(null);
  });
});
