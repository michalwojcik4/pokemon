import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "../redux/operations";

const PokemonList = () => {
  const dispatch = useDispatch();
  const { pokemonList } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PokemonDetails", { pokemonUrl: item.url })
            }
          >
            <Text key={item.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default PokemonList;
