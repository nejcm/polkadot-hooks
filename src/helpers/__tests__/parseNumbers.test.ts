import { roundNumber } from '../parseNumbers';

describe('parseNumbers', () => {
  test('should correctly round numbers', () => {
    expect(roundNumber(1.123456)).toBe(1.123456);
    expect(roundNumber(1.123456, 3)).toBe(1.123);
  });
});
