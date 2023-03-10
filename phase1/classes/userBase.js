class UserBase {
  constructor(array){
    this.array = array;
  }
  count() {
    return this.array.length
  }
  getNames() {
    return this.array.map(x => x.getName())
  }
  getIntroductions() {
    return this.array.map(x => `Hi, my name is ${x.getName()}`)
  }
}

module.exports = UserBase;


// const User = require('./classes/user')
// const UserBase = require('./classes/userBase')
// const users = [
//   new User('Uma'),
//   new User('Josh'),
//   new User('Ollie')
// ];
// const userBase = new UserBase(users);