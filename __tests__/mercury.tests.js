import { Mercury } from './../src/mercury.js';

describe('mercury', () => {

  test('should correctly build mercury object', () => {
  let newMercury = new Mercury;
  expect(newMercury).toBeInstanceOf(Mercury);
  });

  test('should correctly calculate relative age on mercury', () => {
  let newMercury = new Mercury(33);
  newMercury.calcAge();
  expect(newMercury.relativeAge).toEqual(8);
  });
});