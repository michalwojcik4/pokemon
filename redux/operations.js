import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = " https://pokeapi.co/api/v2";

export const fechPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/pokemon`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const searchPokemon = createAsyncThunk(
//   "pokemon/searchPokemon",
//   async (keyword, thunkAPI) => {
//     try {
//       const response = await axios.get(`/pokemon/${keyword}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
