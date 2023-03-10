class Candy {
  constructor(sweet, price){
    this.sweet = sweet;
    this.price = price;
  }
  getNameOfSweet(){
    return this.sweet;
  }
  getPrice(){
    return this.price;
  }
}

module.exports = Candy;