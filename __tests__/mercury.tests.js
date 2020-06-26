import { Mercury } from './../src/mercury.js';

describe('mercury', () => {

  let newMercury;

  beforeEach(() => {
    newMercury = new Mercury(33);
    newMercury.calcAge();
  });

  test('should correctly build mercury object', () => {
    expect(newMercury).toBeInstanceOf(Mercury);
  });

  test('should correctly calculate relative age on mercury', () => {
    expect(newMercury.relativeAge).toEqual(8);
  });
});