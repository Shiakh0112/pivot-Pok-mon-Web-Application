import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemonList } from "../services/api";

export const getPokemon = createAsyncThunk(
  "pokemon/getPokemon",
  async (offset: number) => {
    const response = await fetchPokemonList(offset, 20);
    return response.data.results;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  },
});

export default pokemonSlice.reducer;
