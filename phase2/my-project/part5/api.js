const fetchPokemon = (name) => {
  const array = [];
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.types.length; i++) {
        array.push(data.types[i].type.name);
      }
      return {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        type: array,
      };
    });
};

module.exports = fetchPokemon;
