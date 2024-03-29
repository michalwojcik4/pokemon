import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
// import { searchPokemon } from "../redux/operations";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    // dispatch(searchPokemon(keyword));
    console.log(keyword);
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
