import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonList } from "../redux/operations";
import SearchBar from "../components/SearchBar";
import colors from "../constants/colors";

const PokemonsListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { pokemonsList, isLoading, error } = useSelector(
    (state) => state.pokemons
  );
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchPokemonList(page));
  }, [dispatch, page]);

  const handleEndReached = () => {
    if (pokemonsList.length >= 2) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderFooter = () => {
    if (isLoading) {
      return (
        <View style={styles.footer}>
          <ActivityIndicator size="large" color={colors.secondary} />
        </View>
      );
    } else if (pokemonsList.length === 0) {
      return (
        <View style={styles.footer}>
          <Text style={styles.noResultsText}>No results found.</Text>
        </View>
      );
    } else {
      return null;
    }
  };

  const pokemonItem = ({ item }) => {
    const bigName = item.name.toUpperCase();
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigation.navigate("PokemonDetails", { pokemonUrl: item.url })
        }
      >
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.name}>{bigName}</Text>
      </TouchableOpacity>
    );
  };

  // Mam problem z filtrowaniem elemntów przed dodaniem do pokemonsList, aby nie dodawały się już istniejące
  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };
  //

  if (isLoading || !pokemonsList) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar />
      {!pokemonsList && (
        <Text style={styles.emptyListText}>No results found</Text>
      )}
      <FlatList
        data={pokemonsList}
        renderItem={pokemonItem}
        keyExtractor={() => generateId()}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  emptyListText: {
    color: colors.secondary,
    fontSize: 24,
  },
  item: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 40,
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.backgroundWhite,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  name: {
    color: colors.blackText,
    fontSize: 35,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  noResultsText: {
    color: colors.blackText,
    fontSize: 18,
  },
});

export default PokemonsListScreen;
