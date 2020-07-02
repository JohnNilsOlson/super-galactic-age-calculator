import { Mars } from './../src/mars.js';

describe('mars', () => {

  let newMars;

  beforeEach(() => {
    newMars = new Mars(33);
    newMars.calcAge();
    newMars.calcRemaining();
  });

  test('should correctly build mercury object', () => {
    expect(newMars).toBeInstanceOf(Mars);
  });

  test('should correctly calculate relative age on mercury', () => {
    expect(newMars.relativeAge).toEqual(18);
  });

  test('should correctly calculate remaining years of life on mercury', () => {
    expect(newMars.yearsRemaining).toEqual(20);
  });
});