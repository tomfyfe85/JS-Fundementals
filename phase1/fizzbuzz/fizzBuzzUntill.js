const fizzbuzz = require('./fizzbuzz')

const fizzBuzzUntill = (num) => {
  // let i = 1;
  //  while (i <= num){
  //   console.log(fizzbuzz(i));
  //   i++;
  //  }
  for (let i = 1 ; i <= num ; i++){
    console.log(fizzbuzz(i));
  }
}
module.exports = fizzBuzzUntill;


