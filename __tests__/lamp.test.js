const Lamp = require('../src/lamp.js');

describe('Lamp', () => {
    test('Create an instance of Lamp', () => {
        const lamp = new Lamp();
        expect(lamp).toBeInstanceOf(Object);
    });
    test('takes in a bulb', () => {
        const lamp = new Lamp(jest.fn());
        expect(lamp.bulb).not.toEqual(undefined);
    });
    test('Has property of isOn with default false', () => {
        const lamp = new Lamp();
        expect(lamp.isOn).toBe(false);
    });
});

describe('switchOn', () => {
    test('it switches the light on', () => {
        const lamp = new Lamp(jest.fn());
        lamp.switchOn();
        expect(lamp.isOn).toBe(true);
    });
});

describe('switchOff', () => {
    test('it switches the light off', () => {
        const lamp = new Lamp(jest.fn());
        lamp.isOn = true;
        lamp.switchOff();
        expect(lamp.isOn).toBe(false);
    });
})


