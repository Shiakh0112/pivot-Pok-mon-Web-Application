import axios from "axios";

export const fetchPokemon = async (id: number) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
};
