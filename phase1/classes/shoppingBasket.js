class ShoppingBasket {
  constructor(myArray = []){
    this.myArray = myArray;
  }
  
  addItem(thing){
  this.myArray.push(thing)
  }
  getTotalPrice(){
    let total = 0 
     this.myArray.forEach((inst) => {
      total += inst.getPrice()
      })
    return total
  }
}

module.exports = ShoppingBasket;

// const ShoppingBasket = require('./classes/shoppingBasket')
// const Candy = require('./classes/candy')

// const shopBasket = new ShoppingBasket(); 
// const candy = new Candy('Mars', 4.99);



