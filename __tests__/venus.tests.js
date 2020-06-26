import { Venus } from './../src/venus.js';

describe('venus', () => {

  test('should correctly build venus object', () => {
    let newVenus = new Venus;
    expect(newVenus).toBeInstanceOf(Venus);
    });

  test('should correctly calculate relative age on mercury', () => {
    let newVenus = new Venus(33);
    newVenus.calcAge();
    expect(newVenus.relativeAge).toEqual(20);
    });
})