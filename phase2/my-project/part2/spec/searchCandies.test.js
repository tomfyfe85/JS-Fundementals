const searchCandies = require("../programs/searchCandies");

describe("searchCandies() searches the array Candies", () => {
  it('gives a new array, ["Mars", "Maltesers"]', () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });

  it('gives new array, ["Mars"]', () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });

  it('gives new array, ["Skitties", "Skittles", "Starburst"]', () => {
    expect(searchCandies("S", 10)).toEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });

  it('gives new array, ["Skitties", "Skittles"]', () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });

  it('gives a new array is prefix is lowercase, ["Mars, "Maltesers"]', () => {
    expect(searchCandies("ma", 10)).toEqual(["Mars", "Maltesers"])
  })
});
