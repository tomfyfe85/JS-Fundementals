const Thermostat = require("./Thermostat");
const thermostat = new Thermostat();

describe("thermostat", () => {
  it("(1)thermostat.getTemperature() should return 20", () => {
    expect(thermostat.getTemperature()).toBe(20);
  });
});
