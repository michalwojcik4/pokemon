import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "react-native";
import { fechPokemons } from "../redux/operations";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.pokemons);

  useEffect(() => {
    dispatch(fechPokemons());
  }, [dispatch]);

  return console.log(pokemons.results);
};

export default PokemonList;
