// import * as React from 'react';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, ImageBackground, Button, StyleSheet, Text, View, FlatList, StatusBar ,TouchableOpacity} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Joburg to Pretoria',
    date: "ffffk"

  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Plk to Jhb',
    date: "ffffk"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aav7f63',
    title: 'Cape Town to KZN',
    date: "ffffk"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97fm63',
    title: 'Bloem to Potch',
    date: "ffffk"
  },
  {
    id: '3ac68afc-c605-88d3-a4f8-fbd91aa97fm63',
    title: 'Bloem to Potch',
    date: "ffffk"
  },
  {
    id: '3ac68afc-c605-47d3-a4f8-fbd91aa97fm63',
    title: 'Bloem to Potch',
    date: "ffffk"
  },
  {
    id: '3ac68afc-c605-48d3-a6f8-fbd91aa97fm63',
    title: 'Bloem to Potch',
    date: "ffffk"
  }
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);


const HomePage = ({ navigation }) => {


  const [selectedId, setSelectedId] = useState();
  // change item color on select
  // on select open trip details in a new tab

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />

    );

  };




  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Book a trip</Text>
{/* render items in a list */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "white",
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  }, heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  }
});

export default HomePage;