import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

import LogoPokemon from "../images/pngegg.png";

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Image source={LogoPokemon} style={styles.image} />
        <CustomButton
          title="Poznawaj Pokemony"
          onPress={() => navigation.navigate("PokemonsList")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "blue",
  },
  flex: {
    width: "80%",
    height: "100%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
    height: "50%",
  },
  button: {
    backgroundColor: "yellow",
    padding: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "navy",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;
