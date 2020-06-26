import { Mars } from './../src/mars.js';

describe('mars', () => {

  test('should correctly build mercury object', () => {
    let newMars = new Mars;
    expect(newMars).toBeInstanceOf(Mars);
  });
});