const Bulb = require('../src/bulb.js');

describe('Bulb', () => {

    test('creates an instance of Bulb', () => {
        const bulb = new Bulb();
        expect(bulb).toBeInstanceOf(Object);
    });

    test('has a default shelfLife of 5', () => {
        const bulb = new Bulb();
        expect(bulb.shelfLife).toBe(5);
    });

    // test('electrify', () => {
    // test('see how long the bulb lasts', () =>{

    // expect()
    // })
});

