import expect from 'expect';
import { diff, timeToMs, twoDigits } from './../../lib/utils/date';

describe('date utils', function () {
  describe('twoDigits function', function () {
    it('should return any two-digit number as a string', function () {
      const result = twoDigits(11);

      expect(result).toBeA('string');
      expect(result).toBe('11');
    });

    it('should add a leading 0 to any one-digit number', function () {
      const result = twoDigits(1);

      expect(result).toBeA('string');
      expect(result).toBe('01');
    });
  });

  describe('timeToMs function', function () {
    it('should be the reverse of the diff function', function () {
      const time = {
        days: 1,
        hours: 2,
        minutes: 3,
        seconds: 4,
        milliseconds: 5,
      };

      const difference = diff(0, timeToMs(time));

      expect(difference.days).toBe(time.days);
      expect(difference.hours).toBe(time.hours);
      expect(difference.minutes).toBe(time.minutes);
      expect(difference.seconds).toBe(time.seconds);
      expect(difference.milliseconds).toBe(time.milliseconds);
    });
  });
});
