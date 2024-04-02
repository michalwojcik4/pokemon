import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import colors from "../constants/colors";
import { fetchPokemonDetails } from "../redux/operations";
import { useDispatch, useSelector } from "react-redux";

const PokemonDetailsScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { pokemonUrl } = route.params;
  const { pokemonDetails, isLoading } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemonDetails(pokemonUrl));
  }, [dispatch]);

  if (isLoading || !pokemonDetails) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.secondary} />
      </View>
    );
  }

  const { name, height, weight, types, base_experience, abilities } =
    pokemonDetails;
  const bigName = name.toUpperCase();
  const allTypes = types.map((type) => type.type.name).join(", ");
  const allAbilities = abilities
    .map((ability) => ability.ability.name)
    .join(", ");

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={{ uri: pokemonDetails.sprites.front_default }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{bigName}</Text>
          <Text>
            <Text style={styles.label}>Height: </Text>
            <Text style={styles.details}>{height}</Text>
          </Text>
          <Text>
            <Text style={styles.label}>Weight: </Text>
            <Text style={styles.details}>{weight}</Text>
          </Text>
          <Text>
            <Text style={styles.label}>Base Experience: </Text>
            <Text style={styles.details}>{base_experience}</Text>
          </Text>
          <Text>
            <Text style={styles.label}>Types: </Text>
            <Text style={styles.details}>{allTypes}</Text>
          </Text>
          <Text>
            <Text style={styles.label}>Abilities: </Text>
            <Text style={styles.details}>{allAbilities}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  box: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderRadius: 5,
    width: "100%",
    height: "100%",
  },
  image: {
    width: 300,
    height: 300,
  },
  infoContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 42,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 10,
  },
  label: {
    fontSize: 22,
    color: colors.blackText,
    marginBottom: 5,
  },
  details: {
    fontSize: 22,
    color: colors.blueText,
    marginBottom: 5,
  },
});

export default PokemonDetailsScreen;
