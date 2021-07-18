import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Notification() {
    

  return (
    <View style={styles.MainScreen}>
      <View style={styles.TopScreen}>
        <View style={styles.TopinnerScreen}></View>
      </View>
      <View style={styles.middleScreen}>
        <Text>Shall it works Notification page</Text>
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
    marginTop: '10%',  
    height: 45,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  TopinnerScreen :{
    height: 40,
    backgroundColor: 'grey',
  },
  middleScreen :{ 
    borderRadius: 15,
    backgroundColor: 'red', 
    height: '40%', 
    width: '85%',
    marginLeft: '7%',
    bottom: '25%'
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
