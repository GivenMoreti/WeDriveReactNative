import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Login from "./src/components/Login";
import Register from "./src/components/Register";
import HomePage from "./src/components/HomePage";
// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();


const App = () => (
 
<NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name={'HomePage'} component={HomePage} />
    <Tab.Screen name={'Register'} component={Register} />
    <Tab.Screen name={'Login'} component={Login} />
  
  </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
    formView: {
    backgroundColor: "#000000c0",
    textAlign: "center",
    lineHeight: 100,
    padding: 20,
    borderColor: "#ff4500",
    borderWidth: 1,
    borderRadius:5,
    alignContent: "center",
    },
});

export default App;
