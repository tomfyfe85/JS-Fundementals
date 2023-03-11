const fetchPokemon = (name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => ({
      name: data.name,
      id: data.id,
      height: data.height,
      weight: data.weight,
    }));
};

module.exports = fetchPokemon;
