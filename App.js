import { StyleSheet, View } from "react-native";
import SearchBar from "./components/SearchBar";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import PokemonList from "./components/PokemonList";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SearchBar />
        <PokemonList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
