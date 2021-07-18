import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import TabsOptions from "./Navigation/Tabs";
import { StyleSheet, View, Text } from 'react-native';

const App = () => {

  return(
    <NavigationContainer>
      <TabsOptions/>
    </NavigationContainer>
  )
}

export default App;


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
