import expect from 'expect';
import recur from './../../lib/utils/recur';

describe('recur function', function () {
  function increment(x) {
    return x + 1;
  }

  const x = 1;

  it('should return the arguments if times is 0 or less', function () {
    let result = recur(increment, x, 0);
    expect(result).toBe(x);

    result = recur(increment, x, -1);
    expect(result).toBe(x);
  });

  it('should call a function recursively X times', function () {
    let times = 1;
    let result = recur(increment, x, times);
    expect(result).toBe(2);

    times = 5;
    result = recur(increment, x, times);
    expect(result).toBe(6);
  });

  it('should throw if times is not a number', function () {
    expect(() => recur(increment, x, null)).toThrow();
  });
});
