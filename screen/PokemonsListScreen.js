import React, { useEffect, useState } from "react";
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
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchPokemonList(page));
  }, [dispatch, page]);

  const handleEndReached = () => {
    if (pokemonsList.length >= 2) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const pokemonItem = ({ item }) => (
    <TouchableOpacity
      style={styles.title}
      onPress={() =>
        navigation.navigate("PokemonDetails", { pokemonUrl: item.url })
      }
    >
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  // Mam problem z filtrowaniem elemntów przed dodaniem do pokemonsList, aby nie dodawały się już istniejące
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9); // Generujemy losowy identyfikator
  };
  //

  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        data={pokemonsList}
        renderItem={pokemonItem}
        keyExtractor={() => generateId()}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
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
