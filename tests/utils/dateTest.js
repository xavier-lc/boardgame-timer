import expect from 'expect';
import { msToTime, twoDigits } from './../../lib/utils/date';

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
    it('should convert milliseconds to a Time object', function () {
      const time = {
        days: 1,
        hours: 2,
        minutes: 3,
        seconds: 4,
        milliseconds: 5,
      };

      const timeObj = msToTime(5 + (4 + (3 + (2 + (1 * 24)) * 60) * 60) * 1000);

      expect(timeObj.days).toBe(time.days);
      expect(timeObj.hours).toBe(time.hours);
      expect(timeObj.minutes).toBe(time.minutes);
      expect(timeObj.seconds).toBe(time.seconds);
      expect(timeObj.milliseconds).toBe(time.milliseconds);
    });
  });
});
