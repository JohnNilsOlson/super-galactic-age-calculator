import { Venus } from './../src/venus.js';

describe('venus', () => {

  let newVenus;

  beforeEach(() => {
    newVenus = new Venus(33);
    newVenus.calcAge();
  });

  test('should correctly build mercury object', () => {
    expect(newVenus).toBeInstanceOf(Venus);
  });

  test('should correctly calculate relative age on mercury', () => {
    expect(newVenus.relativeAge).toEqual(20);
  });
});