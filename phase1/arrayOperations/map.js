const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// An array of objects!
const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];


const generateMessage = (array) => {
  return array.map(x => `Hi ${x.name}!, ${x.discount}% off candies today`)
};

console.log(generateMessage(namesAndDiscounts))

