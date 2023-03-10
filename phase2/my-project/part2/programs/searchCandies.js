const candies = [
  { name: "Aero", price: 1.99 },
  { name: "Skitties", price: 2.99 },
  { name: "Mars", price: 1.49 },
  { name: "Maltesers", price: 3.49 },
  { name: "Skittles", price: 1.49 },
  { name: "Starburst", price: 5.99 },
  { name: "Ricola", price: 1.99 },
  { name: "Polkagris", price: 5.99 },
  { name: "Pastila", price: 4.99 },
  { name: "Mentos", price: 8.99 },
  { name: "Raffaello", price: 7.99 },
  { name: "Gummi bears", price: 10.99 },
  { name: "Fraise Tagada", price: 5.99 },
];

const searchCandies = (sweet, max) => {
  let sweetie = sweet;
  if (sweet[0] != sweet[0].toUpperCase()) {
    sweetie = sweet.charAt(0).toUpperCase() + sweet.slice(1);
  }
 return candies
    .filter((type) => type.name.includes(sweetie))
    .filter((type) => type.price < max)
    .map((type) => type.name);
};

console.log(searchCandies("ma", 10));

module.exports = searchCandies;
