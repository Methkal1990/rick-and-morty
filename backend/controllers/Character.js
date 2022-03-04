const axios = require("axios");

const getAllCharacters = async () => {
  const characters = await axios.get(
    "https://rickandmortyapi.com/api/character"
  );
  return characters.data.results;
};

const getCharacter = async (id) => {
  const character = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return character.data;
};

module.exports = {
  getAllCharacters,
  getCharacter,
};
