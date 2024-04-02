import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = " https://pokeapi.co/api/v2";

export const fetchPokemonList = createAsyncThunk(
  "pokemon/fetchPokemonList",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/pokemon?limit=50`);
      const pokemonsUrl = response.data.results.map((pokemon) => pokemon.url);

      const promises = pokemonsUrl.map(async (pokemonUrl) => {
        try {
          const response = await axios.get(pokemonUrl);
          const imgUrl = response.data.sprites.front_default;
          return { url: pokemonUrl, image: imgUrl };
        } catch (e) {
          return thunkAPI.rejectWithValue(e.message);
        }
      });

      const results = await Promise.all(promises);
      console.log(results);
      return results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchPokemonDetails = createAsyncThunk(
  "pokemon/fetchPokemonDetails",
  async (pokemonUrl, thunkAPI) => {
    try {
      const response = await axios.get(`${pokemonUrl}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchPokemonToName = createAsyncThunk(
  "pokemon/fetchPokemonToName",
  async (keyword, thunkAPI) => {
    try {
      const response = await axios.get(`/pokemon/${keyword}`);
      if (keyword !== "") {
        const result = response.data;
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${result.id}/`;
        const imgUrl = result.sprites.front_default;
        console.log({ url: pokemonUrl, image: imgUrl });
        return [{ url: pokemonUrl, image: imgUrl }];
      } else {
        const pokemonsUrl = response.data.results.map((pokemon) => pokemon.url);

        const promises = pokemonsUrl.map(async (pokemonUrl) => {
          try {
            const response = await axios.get(pokemonUrl);
            const imgUrl = response.data.sprites.front_default;
            return { url: pokemonUrl, image: imgUrl };
          } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
          }
        });

        const results = await Promise.all(promises);
        console.log(results);
        return results;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
