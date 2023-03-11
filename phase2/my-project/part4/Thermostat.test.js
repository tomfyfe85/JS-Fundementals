const Thermostat = require("./Thermostat");
const thermostat = new Thermostat();

describe("thermostat", () => {
  it("(1)thermostat.getTemperature() should return 20", () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("(2)thermostat.up adds 1 to temp", () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);

    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it("(3)thermostat.down minus's 1 from temp", () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it("(4) temp cannot exceed 25 if power save mode is on(default)", () => {
    thermostat.setPowerSavingMode(true);
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }

    expect(thermostat.getTemperature()).toBe(25);
  });

  it("(5) temp can exceed 25 when power save mode is off", () => {
    thermostat.setPowerSavingMode(false);
    thermostat.up();

    expect(thermostat.getTemperature()).toBe(26);
  });
  it("(6) thermostat.reset will reset temp to 20", () => {
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });
  it("(7) gives reading for current energy usage", () => {
    for (let i = 10; i > 0; i--) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
    expect(thermostat.currentEnergyUsage()).toBe("low-usage");

    for (let i = 0; i < 15; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
    expect(thermostat.currentEnergyUsage()).toBe("medium-usage");

    for (let i = 0; i < 15; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(40);
    expect(thermostat.currentEnergyUsage()).toBe("high-usage");
  });
});
