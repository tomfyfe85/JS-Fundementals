class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

// const test = new Candy("Mars", 4.99);
// console.log(test.getName());
// console.log(test.getPrice());

module.exports = Candy;
