class Lamp {
    constructor(bulb) {
        this.bulb = bulb;
        this.isOn = false;
    }

    switchOn () {
        if (this.isOn === false){
            this.isOn = true;
        }
    }

    switchOff () {
        if (this.isOn === true){
            this.isOn = false;
        }
    }
}

module.exports = Lamp;
