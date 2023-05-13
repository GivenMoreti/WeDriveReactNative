import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Login from "./src/components/Login";
import Register from "./src/components/Register";
import HomePage from "./src/components/HomePage";
import UserProfile from "./src/components/Profile";
import AddTrip from "./src/components/AddTrips";
// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();


const App = () => (
 
<NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name={'Home'} options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="home" color={color} size={size}/>)}} component={HomePage} />
    <Tab.Screen name={'Register'} options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="account" color={color} size={size}/>)}} component={Register} />
    <Tab.Screen name={'Add'} options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="plus" color={color} size={size}/>)}} component={AddTrip} />
    <Tab.Screen name={'Login'} options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="login" color={color} size={size}/>)}} component={Login} />
    <Tab.Screen name={'Profile'} options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="android" color={color} size={size}/>)}} component={UserProfile} />
  
  
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
