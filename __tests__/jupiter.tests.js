import { Jupiter } from './../src/jupiter.js';

describe('jupiter', () => {

  let newJupiter;

  beforeEach(() => {
    newJupiter = new Jupiter(33);
    newJupiter.calcAge();
    newJupiter.calcRemaining();
  });

  test('should correctly build jupiter object', () => {
    expect(newJupiter).toBeInstanceOf(Jupiter);
  });

  test('should correctly calculate relative age on mercury', () => {
    expect(newJupiter.relativeAge).toEqual(3);
  });

  test('should correctly calculate remaining years of life on mercury', () => {
    expect(newJupiter.yearsRemaining).toEqual(3);
  });
});