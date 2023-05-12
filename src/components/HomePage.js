import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaView,ImageBackground,Button, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomePage = () => {
  return (
    <SafeAreaView>
       <Text>Hello homepage</Text>
    </SafeAreaView>
  );
};
export default HomePage;