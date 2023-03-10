require("./Candy");

class ShoppingBasket {
  constructor(myArray = []) {
    this.myArray = myArray;
    this.discount = 0;
  }

  addItem(thing) {
    this.myArray.push(thing);
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    const discount = this.discount;
    if (this.myArray.length === 0) {
      return 0;
    } else {
      this.myArray.forEach((candy) => {
        totalPrice += candy.getPrice();
      });
      const fin = totalPrice - discount;
      const last = fin.toFixed(2);
      return parseFloat(last);
    }
  }
}

module.exports = ShoppingBasket;
