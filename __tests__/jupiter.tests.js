import { Jupiter } from './../src/jupiter.js';

describe('jupiter', () => {

  test('should correctly build jupiter object', () => {
    let newJupiter = new Jupiter;
    expect(newJupiter).toBeInstanceOf(Jupiter);
  });

  test('should correctly calculate relative age on mercury', () => {
    let newJupiter = new Jupiter(33);
    newJupiter.calcAge();
    expect(newJupiter.relativeAge).toEqual(391);
  });
});