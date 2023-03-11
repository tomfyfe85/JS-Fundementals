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

  reset() {
    this.temp = 20;
  }

  currentEnergyUsage() {
    let usage = "";
    if (this.temp < 18) {
      usage = "low-usage";
    } else if (this.temp > 18 && this.temp <= 25) {
      usage = "medium-usage";
    } else {
      usage = "high-usage";
    }
    return usage;
  }
}

module.exports = Thermostat;
