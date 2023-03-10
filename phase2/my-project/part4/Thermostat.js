class Thermostat {
  constructor() {
    this.temp = 20;
  }
  getTemperature() {
    if (this.setPowerSavingMode(true) && this.temp > 25) {
      return 25;
    } else {
      return this.temp;
    }
  }
  up() {
    this.temp++;
  }
  down() {
    this.temp--;
  }
  setPowerSavingMode() {
    if (true && this.temp > 25) {
        this.temp = 25;
      } else {
        this.temp;
      }
  }
}

module.exports = Thermostat;
