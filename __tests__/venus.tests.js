import { Venus } from './../src/venus.js';

describe('venus', () => {

  test('should correctly build venus object', () => {
    let newVenus = new Venus;
    expect(newVenus).toBeInstanceOf(Venus);
    });
})