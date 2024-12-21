"use client";

import { createContext, useContext, useState } from "react";

interface PokemonContextProps {
  filterType: string;
  setFilterType: (type: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const PokemonContext = createContext<PokemonContextProps | undefined>(
  undefined
);

export const PokemonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filterType, setFilterType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PokemonContext.Provider
      value={{ filterType, setFilterType, currentPage, setCurrentPage }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemonContext must be used within a PokemonProvider");
  }
  return context;
};
