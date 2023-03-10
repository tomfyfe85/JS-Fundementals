class Thermostat {
  constructor() {
    this.temp = 20;
  }
  getTemperature() {
    if (this.setPowerSavingMode(true) && this.temp > 25) {
      return (this.temp = 25);
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
  setPowerSavingMode(boolean) {
    if (boolean !== false) {
      return true;
    }
  }
}

module.exports = Thermostat;
