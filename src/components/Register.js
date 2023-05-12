import { React, useState } from 'react';
import {TouchableOpacity,  ImageBackground,TextInput, Text, SafeAreaView, StyleSheet, Button } from 'react-native';

const Register = ({navigation}) => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView>
      <Text style={styles.text}>Register an Account</Text>
      <TextInput
        editable
        maxLength={40}
        style={styles.textInput}
        placeholder=" Username"
        placeholderTextColor={'white'}
      // onChangeText={newText => setText(newText)}
      // defaultValue={text}
      />

      <TextInput
        editable
        maxLength={40}
        style={styles.textInput}
        placeholder=" Email"
        placeholderTextColor={'white'}
      // onChangeText={newText => setText(newText)}
      // defaultValue={text}
      />


      <TextInput
        maxLength={40}
        editable
        style={styles.textInput}
        placeholder=" Password"
        keyboardType='visible-password'
        secureTextEntry={true}
        placeholderTextColor={'white'}
      // onChangeText={newText => setText(newText)}
      // defaultValue={text}
      />

      <Button
        title="Register" onPress={() => {
          console.log("registered");
        }}
        color={"#ff4500"}
      />
      <Text style={styles.textUnder}>OR</Text>
      <TouchableOpacity style = {styles.button}
        onPress={() => navigation.navigate('Login')}>
          <Text>Sign in</Text>
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
}
);
export default Register;