import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

//Screens
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home"
import Settings from "./screens/Settings";
import RestaurantDetail from "./screens/RestaurantDetail";
import OrderCompleted from "./screens/OrderCompleted";
import ResetPassword from "./screens/ResetPassword";


//Screen names

const homeName = "Home";
const settingsName = "Setting";
const restaurantDetail = "RestaurantDetail";
const orderComplete = "OrderCompleted";


const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const screenOptions = {
    headerShown: false,
  };


  function MainContainer() {
    return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }
            else if (rn === restaurantDetail) {
              // iconName = focused ? "list" : "list-outline";
            } else if (rn === orderComplete) {
              // iconName = focused ? "albums" : "albums-outline";    
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={Home} />
        {/* <Tab.Screen name={porfolioName} component={PorfolioScreen} /> */}
        {/* <Tab.Screen name={pricesName} component={PricesScreen} /> */}
        <Tab.Screen name={settingsName} component={Settings} />
        <Tab.Screen name={restaurantDetail} component={RestaurantDetail} options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
        />
        <Tab.Screen name={orderComplete} component={OrderCompleted} options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }} />
      </Tab.Navigator>
    );
  }

  function Auth() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    );
  }


  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Auth"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MainContainer" component={MainContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
