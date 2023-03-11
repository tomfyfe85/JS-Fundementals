class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSavingMode = true;
  }
  getTemperature() {
    return this.temp;
  }

  up() {
    if (this.powerSavingMode && this.temp >= 25) {
      return;
    }
    this.temp++;
  }

  down() {
    this.temp--;
  }
  setPowerSavingMode(mode) {
    this.powerSavingMode = mode;
  }
}

module.exports = Thermostat;
