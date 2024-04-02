import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetails } from "../redux/operations";

const PokemonDetailsScreen = ({ route }) => {
  const { pokemonUrl } = route.params;
  const dispatch = useDispatch();
  const { pokemonDetails } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemonDetails(pokemonUrl));
  }, [dispatch]);

  if (!pokemonDetails) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { name } = pokemonDetails;

  return (
    <View>
      <Text>Name: {name}</Text>
    </View>
  );
};

// const styles = StyleSheet.create({
//   image: {
//     width: 50,
//     height: 50,
//   },
// });

export default PokemonDetailsScreen;
