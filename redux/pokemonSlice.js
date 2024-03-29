import { createSlice } from "@reduxjs/toolkit";
import { fechPokemons, searchPokemon } from "./operations";

const initialState = { isLoading: false, pokemons: [], error: null };

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fechPokemons.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fechPokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.pokemons = action.payload;
      })
      .addCase(fechPokemons.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // .addCase(searchPokemon.pending, (state, action) => {
    //   state.isLoading = true;
    // })
    // .addCase(searchPokemon.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.pokemons = action.payload;
    // })
    // .addCase(searchPokemon.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });
  },
});

export const pokemonReducer = pokemonSlice.reducer;
