class Thermostat {
  constructor() {
    this.temp = 20;
  }
  getTemperature() {
    return this.temp;
  }
  up() {
    this.temp++;
  }
}

module.exports = Thermostat;
