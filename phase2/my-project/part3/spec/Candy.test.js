const Candy = require("../programs/Candy");


describe("const test = new Candy('Mars', 4.99)", () => {
  const test = new Candy("Mars", 4.99);
 
  it("gives 'Mars' from test.getName", () => {
    expect(test.getName()).toEqual("Mars");
  });

  it("gives 4.99 from test.getPrice", () => {
    expect(test.getPrice()).toEqual(4.99);
  });
});
