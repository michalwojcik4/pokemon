import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPokemonList,
  fetchPokemonDetails,
  fetchPokemonToName,
} from "./operations";

const initialState = {
  isLoading: false,
  pokemonsList: [],
  pokemonDetails: null,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.pokemonsList = [...state.pokemonsList, ...action.payload];
        state.pokemonDetails = null;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.pokemonsList = [];
      })
      .addCase(fetchPokemonDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.pokemonDetails = action.payload;
      })
      .addCase(fetchPokemonDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.pokemonDetails = null;
      })
      .addCase(fetchPokemonToName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemonToName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.pokemonsList = action.payload;
        state.pokemonDetails = null;
      })
      .addCase(fetchPokemonToName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.pokemonsList = [];
      });
  },
});

export const pokemonReducer = pokemonSlice.reducer;
