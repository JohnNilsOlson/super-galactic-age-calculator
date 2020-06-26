import { Mercury } from './../src/mercury.js';

describe('mercury', () => {

  let newMercury;

  beforeEach(() => {
    newMercury = new Mercury(33);
    newMercury.calcAge();
    newMercury.calcRemaining();
  });

  test('should correctly build mercury object', () => {
    expect(newMercury).toBeInstanceOf(Mercury);
  });

  test('should correctly calculate relative age on mercury', () => {
    expect(newMercury.relativeAge).toEqual(8);
  });

  test('should correctly calculate remaining years of life on mercury', () => {
    expect(newMercury.yearsRemaining).toEqual(9);
  });
});