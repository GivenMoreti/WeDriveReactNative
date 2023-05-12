import { React, useState } from 'react';
import {TouchableOpacity, TextInput, Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Login = ({navigation}) => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView>
      <Text style={styles.text}>Login to your Account</Text>
      <TextInput
        editable
        maxLength={40}
        style={styles.textInput}
        placeholder=" Username..."
        placeholderTextColor={'white'}
      // onChangeText={newText => setText(newText)}
      // defaultValue={text}
      />

      <TextInput
        maxLength={40}
        editable
        style={styles.textInput}
        placeholder=" Password..."
        keyboardType='visible-password'
        secureTextEntry={true}
        placeholderTextColor={'white'}

      // onChangeText={newText => setText(newText)}
      // defaultValue={text}
      />
      <Button
        title="Login" onPress={() => {

          console.log("Logged in to Trips Page");
        }}
        color={"#ff4500"}
      />
      <Text style={styles.textUnder}>OR</Text>
     
      <TouchableOpacity style = {styles.button}
        onPress={() => navigation.navigate('Register')}>
          <Text>Sign up</Text>
      </TouchableOpacity>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#ff4500",
    borderWidth: 0.5,
    borderRadius: 3,
    margin: 3,
    shadowColor: "#ff4500",
    height: 30,
    color: 'white',
   

  }, textUnder: {
    color: "red",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    flexDirection: "row",

  }, text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",

  },button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
export default Login;