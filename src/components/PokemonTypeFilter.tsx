"use client";

import { usePokemonContext } from "../context/PokemonContext";

export const PokemonTypeFilter = () => {
  const { setFilterType, setCurrentPage } = usePokemonContext();

  const handleFilterClick = (type: string) => {
    setFilterType(type);
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  return (
    <div className="flex items-center justify-between bg-gray-800 px-6 py-4 shadow-md">
      {/* Pokémon Logo */}
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/78/aa/76/78aa765938c85730e8610c2888fb4c2d.jpg" // Replace with an actual transparent logo
            alt="Pokémon Logo"
            className="h-auto w-[100%] object-contain"
          />
        </div>
        <h1 className="text-white text-2xl font-bold">Pokémon Types</h1>
      </div>

      {/* Type Filter Buttons */}
      <div className="flex gap-3">
        {["fire", "grass", "water"].map((type) => (
          <button
            key={type}
            onClick={() => handleFilterClick(type)}
            className={`px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-110 
          ${
            type === "fire"
              ? "bg-orange-500"
              : type === "grass"
              ? "bg-green-500"
              : "bg-blue-500"
          } 
          text-white font-semibold`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};
