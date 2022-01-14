const Lamp = require('../src/lamp.js');

let bulb;
beforeEach(() => {
    bulb = {
        shelfLife: 5,
        isWorking: true,
        //test-doubles: dummy here inside of a stub
        electrify: jest.fn()
    };
});

describe('Lamp', () => {
    test('Create an instance of Lamp', () => {
        const lamp = new Lamp();
        expect(lamp).toBeInstanceOf(Object);
    });
    test('Takes in a bulb', () => {
        const lamp = new Lamp(jest.fn());//test-doubles: dummy
        expect(lamp.bulb).not.toEqual(undefined);
    });
    test('Has property of isOn with default false', () => {
        const lamp = new Lamp();
        expect(lamp.isOn).toBe(false);
    });
});

describe('switchOn', () => {
    test('throws an error if bulb is dead', () => {
        const lamp = new Lamp(bulb);
        bulb.isWorking = false;
        expect(() => {
            lamp.switchOn()
        }).toThrow('Bulb is dead');
    });
    test('It switches the light on', () => {
        const lamp = new Lamp(bulb);
        lamp.switchOn();
        expect(lamp.isOn).toBe(true);
    });

    describe('electrify', () => {
        test('electrify gets called', () => {
            const bulb = {
            shelfLife: 5,
            isWorking: true,
            electrify: jest.fn()//test-doubles: stub
            };
            const lamp = new Lamp(bulb);
            lamp.switchOn();
            //test-doubles: spy
        expect(bulb.electrify).toHaveBeenCalled();
        })
    });
});

describe('switchOff', () => {
    test('it switches the light off', () => {
        const lamp = new Lamp(jest.fn());//dummy
        lamp.isOn = true;
        lamp.switchOff();
        expect(lamp.isOn).toBe(false);
    })
});


