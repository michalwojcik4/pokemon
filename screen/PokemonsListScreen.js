import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "../redux/operations";
import SearchBar from "../components/SearchBar";

const PokemonsListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { pokemonsList } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);

  const pokemonItem = ({ item }) => (
    <TouchableOpacity
      style={styles.title}
      onPress={() =>
        navigation.navigate("PokemonDetails", { pokemonUrl: item.url })
      }
    >
      <Image style={styles.image} source={{ uri: item.image }} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        data={pokemonsList}
        renderItem={pokemonItem}
        keyExtractor={(item) => item.url}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "blue",
  },
  title: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default PokemonsListScreen;
