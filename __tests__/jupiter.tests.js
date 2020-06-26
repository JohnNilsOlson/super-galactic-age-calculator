import { Jupiter } from './../src/jupiter.js';

describe('jupiter', () => {

  test('should correctly build jupiter object', () => {
    let newJupiter = new Jupiter;
    expect(newJupiter).toBeInstanceOf(Jupiter);
  });
}