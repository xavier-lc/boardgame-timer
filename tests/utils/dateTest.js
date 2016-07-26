import expect from 'expect';
import { diff, twoDigits } from '../../lib/utils/date';

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
});
