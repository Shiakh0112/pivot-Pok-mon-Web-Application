"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function PokemonDetailsPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemon(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  if (!pokemon) {
    return (
      <div className="flex justify-center items-center h-screen ">
        <p className="text-xl font-medium animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 ">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <h1 className="text-4xl font-extrabold text-center capitalize text-indigo-600 mb-6">
          {pokemon.name}
        </h1>
        <div className="flex justify-center mb-6">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="w-48 h-48 object-contain drop-shadow-md"
          />
        </div>
        <div className="bg-indigo-50 p-4 rounded-lg shadow-sm">
          <p className="text-lg font-medium text-gray-800 mb-2">
            <span className="font-bold text-indigo-500">Height:</span>{" "}
            {pokemon.height}
          </p>
          <p className="text-lg font-medium text-gray-800 mb-2">
            <span className="font-bold text-indigo-500">Weight:</span>{" "}
            {pokemon.weight}
          </p>
          <p className="text-lg font-medium text-gray-800">
            <span className="font-bold text-indigo-500">Base Experience:</span>{" "}
            {pokemon.base_experience}
          </p>
        </div>
      </div>
    </main>
  );
}
