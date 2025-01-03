"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { PokemonCard } from "./PokemonCard";
import { usePokemonContext } from "../context/PokemonContext";

interface Pokemon {
  name: string;
  url: string;
  id: number; // Ensure that id is always a number
}

interface PokemonApiResponse {
  results: {
    name: string;
    url: string;
  }[];
  pokemon?: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
}

export const PokedexGrid = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const { filterType, currentPage, setCurrentPage } = usePokemonContext();
  const [totalPokemons, setTotalPokemons] = useState(0);
  const ITEMS_PER_PAGE = 20;

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
        if (filterType) {
          url = `https://pokeapi.co/api/v2/type/${filterType}`;
        }

        const response = await axios.get<PokemonApiResponse>(url);

        if (filterType && response.data.pokemon) {
          // Filter response for Pokémon by type
          const filtered = response.data.pokemon.map((entry) => ({
            name: entry.pokemon.name,
            url: entry.pokemon.url,
            id: extractPokemonId(entry.pokemon.url) ?? -1, // Ensure a valid ID
          }));
          setPokemons(filtered);
          setTotalPokemons(filtered.length);
        } else {
          const allPokemons = response.data.results.map((pokemon, index) => ({
            name: pokemon.name,
            url: pokemon.url,
            id: index + 1,
          }));
          setPokemons(allPokemons);
          setTotalPokemons(allPokemons.length);
        }
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemons();
  }, [filterType]);

  // Helper function to extract Pokémon ID from URL
  const extractPokemonId = (url: string) => {
    const match = url.match(/\/pokemon\/(\d+)\//);
    return match ? parseInt(match[1]) : null;
  };

  // Paginated Pokémon
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedPokemons = pokemons.slice(startIndex, endIndex);

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {paginatedPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg disabled:bg-indigo-300"
        >
          Previous
        </button>
        <button
          disabled={currentPage * ITEMS_PER_PAGE >= totalPokemons}
          onClick={() =>
            setCurrentPage(
              currentPage * ITEMS_PER_PAGE < totalPokemons
                ? currentPage + 1
                : currentPage
            )
          }
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg disabled:bg-indigo-300 ml-4"
        >
          Next
        </button>
      </div>
    </div>
  );
};
