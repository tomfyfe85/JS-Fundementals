const fetchPokemon = (name) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => console.log(data.types.length));
};
//     }),{
//   name: data.name,
//   id: data.id,
//   height: data.height,
//   weight: data.weight,
//   type: function type() {
//     data.types.map((type) => type.name);
//     },

module.exports = fetchPokemon;

// ({
//     name: data.name,
//     id: data.id,
//     height: data.height,
//     weight: data.weight,
//     types: data.abilities,
//   })

//   type: function() {
//         console.log(data.types.map((type) => type.name));
