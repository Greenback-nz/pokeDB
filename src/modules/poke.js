const getPlantList = async (offset, limit = 20) => {
  const resp = await fetch(
    `https://plantme.mocklab.io/v1/plants?offset=${offset}&limit=${limit}`,
  );
  const { results } = await resp.json();
  return results;
};

const getPlantByType = async (id) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-habitat/${id}`);
  const { pokemon_species: results } = await resp.json();
  return results;
};

const getPlant = async (name) => {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await resp.json();
  return data;
};

const getPlantCount = async () => {
  const list = await getPokeList(0, 2000);
  return list.length;
};

export {
  getPlantList, getPlant, getPlantCount, getPlantByType,
};
