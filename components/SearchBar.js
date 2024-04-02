import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { fetchPokemonToName, fetchPokemonList } from "../redux/operations";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (keyword.trim() === "") {
      // Jeśli keyword jest pusty, wywołaj fetchPokemonList
      dispatch(fetchPokemonList());
    } else {
      // W przeciwnym razie, wywołaj fetchPokemonToName z keyword
      dispatch(fetchPokemonToName(keyword.toLowerCase()));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        onChangeText={setKeyword}
        value={keyword}
        placeholder="Szukaj pokemonów..."
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "blue",
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  inputStyle: {
    flex: 1,
    backgroundColor: "#fff",
    height: 60,
    borderColor: "gray",
    borderRadius: 2,
    marginBottom: 10,
    padding: 10,
  },
});

export default SearchBar;
