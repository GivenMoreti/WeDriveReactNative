import { React, useState } from 'react';
import { TextInput, Text, SafeAreaView, StyleSheet, Button } from 'react-native';

const Login = () => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView>

      <TextInput
        editable
        maxLength={40}
        style={styles.textInput}
        placeholder="Username"
        placeholderTextColor={'white'}
      // onChangeText={newText => setText(newText)}
      // defaultValue={text}
      />

<TextInput
        editable
        maxLength={40}
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor={'white'}
      // onChangeText={newText => setText(newText)}
      // defaultValue={text}
      />


      <TextInput
        maxLength={40}
        editable
        style={styles.textInput}
        placeholder="Password"
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
        color={"#f194ff"}
      />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 30,
    color: 'white',
    borderBottomColor: '#000000',

  }
});
export default Login;