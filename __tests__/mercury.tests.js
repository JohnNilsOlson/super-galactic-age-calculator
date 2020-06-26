import { Mercury } from './../src/mercury.js';
import { TestScheduler } from 'jest';

describe('mercury', () => {

  test('should correctly build mercury object', () => {
  let newMercury = new Mercury;
  expect(newMurcury).toBeInstanceOf(Mercury);
  });
});