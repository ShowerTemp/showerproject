import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.MainScreen}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput 
          placeholder="my application goals" 
          style={{borderColor : 'black',borderWidth: 1}}/>
        <Button title="Lets see" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  MainScreen: {
    padding: 30, 
    marginTop: 40,
    marginBottom: 30,
    margin: 5,
    borderRadius: 15,
    height: '100%',
    backgroundColor: 'blue'
  }
});
