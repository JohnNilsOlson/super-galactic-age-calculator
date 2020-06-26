import { Mars } from './../src/mars.js';

describe('mars', () => {

  test('should correctly build mercury object', () => {
    let newMars = new Mars;
    expect(newMars).toBeInstanceOf(Mars);
  });

  test('should correctly calculate relative age on mercury', () => {
    let newMars = new Mars(33);
    newMars.calcAge();
    expect(newMars.relativeAge).toEqual(62);
  });
});