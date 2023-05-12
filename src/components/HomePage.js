import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SafeAreaView,ImageBackground,Button, StyleSheet, Text, View,FlatList,StatusBar } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Joburg to Pretoria',
    date:"ffffk"

  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Plk to Jhb',
    date:"ffffk"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aav7f63',
    title: 'Cape Town to KZN',
    date:"ffffk"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97fm63',
    title: 'Bloem to Potch',
    date:"ffffk"
  },
  {
    id: '3ac68afc-c605-88d3-a4f8-fbd91aa97fm63',
    title: 'Bloem to Potch',
    date:"ffffk"
  },
  {
    id: '3ac68afc-c605-47d3-a4f8-fbd91aa97fm63',
    title: 'Bloem to Potch',
    date:"ffffk"
  },
  {
    id: '3ac68afc-c605-48d3-a6f8-fbd91aa97fm63',
    title: 'Bloem to Potch',
    date:"ffffk"
  }
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
    />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:"white",
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HomePage;