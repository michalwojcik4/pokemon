import { Provider } from "react-redux";
import { store } from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screen/HomeScreen";
import PokemonsListScreen from "./screen/PokemonsListScreen";
import PokemonDetailsScreen from "./screen/PokemonDetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PokemonsList" component={PokemonsListScreen} />
          <Stack.Screen
            name="PokemonDetails"
            component={PokemonDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
