import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Login from "./src/components/Login";
// const image = {uri: 'https://reactjs.org/logo-og.png'};

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require("./assets/bg.png")} resizeMode="cover" style={styles.image}>
      {/* main login form */}
      <View style={styles.formView}>
        <Text style={styles.text}>Login To Your Account</Text>
        <Login />
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
   
  },
  formView: {
    
    backgroundColor: "#000000c0",
    textAlign: "center",
    lineHeight: 100,
    padding: 20,
    borderColor: "f194ff",
    borderWidth: 2,
    alignContent: "center",
  },
});

export default App;
