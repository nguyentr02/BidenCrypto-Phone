import * as React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import HomeScreen from "./screens/HomeScreen.js";
import SettingsScreen from "./screens/SettingsScreen.js";
import PorfolioScreen from "./screens/PorfolioScreen.js";
import PricesScreen from "./screens/PricesScreen.js";

//Screen names

const homeName = "Home";
const settingsName = "Setting";
const porfolioName = "Porfolio";
const pricesName = "Prices";

const Tab = createBottomTabNavigator();
function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            } else if (rn === porfolioName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === pricesName) {
              iconName = focused ? "albums" : "albums-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={porfolioName} component={PorfolioScreen} />
        <Tab.Screen name={pricesName} component={PricesScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MainContainer