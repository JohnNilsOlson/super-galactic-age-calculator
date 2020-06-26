import { Mercury } from './../src/mercury.js';

describe('mercury', () => {

  test('should correctly build mercury object', () => {
  let newMercury = new Mercury;
  expect(newMercury).toBeInstanceOf(Mercury);
  });
});