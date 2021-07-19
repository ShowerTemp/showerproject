import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Users() {

  const _goBack = () => console.log('Went back');
  const _handleMore = () => console.log('Shown more');

  const TopScreemContainer = <Appbar.Header style={{backgroundColor: '#336699'}}>
      <Appbar.Content title="Notification" /> 
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header> 

  const MiddleScreenContianer = <View style={styles.middleScreen}>
      <Text style={styles.TitlesStyle}>Shall it works Settings page</Text>
      <View style={styles.borderStyle}/>
    </View>

  return (
    <View style={styles.MainScreen}>
      {TopScreemContainer}
      {MiddleScreenContianer}
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
  middleScreen :{ 
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#336699', 
    height: '70%', 
    width: '90%',
    marginLeft: '5%',
    bottom: '15%'
  },
  TitlesStyle:{
    color: 'white',
    fontSize: 18,
    margin: 4
  },
  borderStyle: {
    borderBottomColor: 'white',
    borderBottomWidth: 1
  }
});