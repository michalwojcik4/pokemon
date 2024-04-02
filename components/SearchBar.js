import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { fetchPokemonToName, fetchPokemonList } from "../redux/operations";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (keyword.trim() === "") {
      dispatch(fetchPokemonList());
    } else {
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
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Ionicons name="search" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  inputStyle: {
    flex: 1,
    backgroundColor: colors.backgroundWhite,
    borderRadius: 2,
    padding: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.secondary,
    padding: 20,
    borderRadius: 2,
  },
});

export default SearchBar;
