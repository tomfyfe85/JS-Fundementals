const ShoppingBasket = require("../programs/ShoppingBasket");
const Candy = require("../programs/Candy");

describe("const test = new ShoppingBasket", () => {
  const test = new ShoppingBasket();

  it("test.getTotalPrice() give 0 when - addItem()", () => {
    const test = new ShoppingBasket();

    expect(test.getTotalPrice()).toEqual(0);
  });

  it("test.getTotalPrice() gives 3.99 when - test.addItem(new Candy('Skittle', 3.99))", () => {
    const candy = new Candy("Skittle", 3.99);
    const test = new ShoppingBasket();

    const mockCandy = candy;
    test.addItem(mockCandy);
    expect(test.getTotalPrice()).toEqual(3.99);
  });

  it("test.getTotalPrice() gives 12.99 from 2 mock instances", () => {
    const candy = new Candy("Skittle", 3.99);
    const newCandy = new Candy("Mars", 4.99);
    const test = new ShoppingBasket();

    const mockCandy1 = candy;
    const mockCandy2 = newCandy;
    test.addItem(mockCandy1);
    test.addItem(mockCandy1);
    test.addItem(mockCandy2);
    expect(test.getTotalPrice()).toEqual(12.97);
  });

  it("test.applyDiscount() has no effect on .getTotalPrice()", () => {
    const candy = new Candy("Skittle", 3.99);
    const newCandy = new Candy("Mars", 4.99);
    const test = new ShoppingBasket();

    const mockCandy1 = candy;
    const mockCandy2 = newCandy;
    test.addItem(mockCandy1);
    test.addItem(mockCandy1);
    test.addItem(mockCandy2);
    test.applyDiscount(0);
    expect(test.getTotalPrice()).toEqual(12.97);
  });

  it("test.applyDiscount(5) gets 7.97 getTotalPrice", () => {
    const candy = new Candy("Skittle", 3.99);
    const newCandy = new Candy("Mars", 4.99);
    const test = new ShoppingBasket();

    const mockCandy1 = candy;
    const mockCandy2 = newCandy;
    test.addItem(mockCandy1);
    test.addItem(mockCandy1);
    test.addItem(mockCandy2);
    test.applyDiscount(5);
    expect(test.getTotalPrice()).toEqual(7.97);
  });
});
