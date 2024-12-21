"use client";

import { PokedexGrid } from "../components/PokedexGrid";
import { PokemonTypeFilter } from "../components/PokemonTypeFilter";
import "../styles/globals.css";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pokemon Explorer</h1>
      <PokemonTypeFilter />
      <PokedexGrid />
    </main>
  );
}
