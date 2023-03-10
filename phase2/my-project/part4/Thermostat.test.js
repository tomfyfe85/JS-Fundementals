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
});
