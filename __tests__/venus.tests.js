import { Venus } from './../src/venus.js';

describe('venus', () => {

  let newVenus;

  beforeEach(() => {
    newVenus = new Venus(33);
    newVenus.calcAge();
    newVenus.calcRemaining();
  });

  test('should correctly build mercury object', () => {
    expect(newVenus).toBeInstanceOf(Venus);
  });

  test('should correctly calculate relative age on mercury', () => {
    expect(newVenus.relativeAge).toEqual(20);
  });

  test('should correctly calculate remaining years of life on venus', () => {
    expect(newVenus.yearsRemaining).toEqual(9);
  });
});