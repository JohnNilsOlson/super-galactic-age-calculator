import { Mars } from './../src/mars.js';

describe('mars', () => {

  let newMars;

  beforeEach(() => {
    newMars = new Mars(33);
    newMars.calcAge();
  });

  test('should correctly build mercury object', () => {
    expect(newMars).toBeInstanceOf(Mars);
  });

  test('should correctly calculate relative age on mercury', () => {
    expect(newMars.relativeAge).toEqual(62);
  });
});