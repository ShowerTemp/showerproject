import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  // function top () {

  // }

  return (
    <View style={styles.MainScreen}>
      <View style={styles.TopScreen}>

      </View>
      <View style={styles.middleScreen}>

      </View>
      <View style={styles.BottonScreen}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainScreen: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  TopScreen :{
    padding: 30, 
    marginTop: '10%',  
    height: 40,
    backgroundColor: 'grey',
    borderBottomColor: 'black',
    borderBottomWidth: 2

  },
  middleScreen :{ 
    borderRadius: 15,
    backgroundColor: 'red', 
    height: '40%', 
    width: '85%',
    marginLeft: '7%',
  },
  BottonScreen: {
    borderRadius: 15,
    bottom: 15,
    width: '90%',
    height: 90, 
    left: '5%',
    right: undefined, 
    backgroundColor: 'black',
  }
});
