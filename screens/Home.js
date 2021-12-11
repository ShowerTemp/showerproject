import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
  
  //  wifi Connection
  const [connected, ChangeConneted] = useState(false)
  // Temperature confirmation
  const [ToggleConfimation, ChangeToggleConfimation] = useState(false)
  // Temperature Number Confirmation
  const [TemperatureConfirmation, ChangeTemperatureConfirmation] = useState(10)

  const _goBack = () => console.log('Went back');
  const _handleMore = () => console.log('Shown more');

  const TopScreemContainer = <Appbar.Header style={{backgroundColor: '#336699'}}>
      <Appbar.Content title="Connect" /> 
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  
  // Time from the website based on the location of the user while signing up 
  const TimeContainer = <View style={{display: 'flex', flexDirection: 'row'}}>
    <Text style={{color: 'white', marginTop: 5, fontSize: 18}}>12:50am</Text>
    <Avatar.Icon 
      backgroundColor = '#336699'
      size= {35}
      color= {'white' } 
      icon="clock" />
    </View>

  // Battery level and connection of the device to wifi
  const ConnectContainer = <View style={{display: 'flex', flexDirection: 'row'}}>
    <Avatar.Icon 
       backgroundColor = '#336699'
       size= {35}
       color= {'white' } 
       icon={ connected ? "wifi" : "wifi-off"} />
    <Avatar.Icon 
      backgroundColor = '#336699'
      size= {35}
      color= {'white' } 
      icon="battery-bluetooth" />
    </View>
  
  // Container to the upper part of the middle area
  const TopBarContainer = <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
    {TimeContainer}
    {ConnectContainer}
  </View>

  //creating the Temperature template and the actual temperature 
  const actualTemp = <view>

  </view>
  
  // Temperature Degree number
  const TemperatureDegreeContainer = <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
    <Text style={{color: 'white', fontSize: '50'}}>{TemperatureConfirmation}</Text>
    <Avatar.Icon 
    backgroundColor = '#336699'
      style={{bottom: '12%', marginLeft: 0}}
      size= {100}
      color= {'white' } 
      icon="temperature-celsius" />
    {/* <Icon name="thermometer-half" size={60} color="white" /> */}
  </View>
  // Middle container area for temperature changing and confirmation
  const MiddleBarContainer = <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 100}}>
    <Icon name="chevron-left" size={50} color="white" onPress={()=> ChangeTemperatureConfirmation(TemperatureConfirmation-1)}/>
    {TemperatureDegreeContainer}
    <Icon name="chevron-right" size={50} color="white" onPress={()=> ChangeTemperatureConfirmation(TemperatureConfirmation+1)}/>
  </View>

  // Bottom container area for confirmation of the temperature 
  const BottomBarContainer = <View style={{display: 'flex', marginLeft: '40%'}}>
    <Icon name={ToggleConfimation ? "toggle-on" : "toggle-off"}  size={'60'} class="fas fa-camera fa-7x" color="white" onPress={()=> ChangeToggleConfimation(!ToggleConfimation)}/>
  </View> 
  
  //Container to info of temperature and confirmation
  const InfoContainer = <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
    {MiddleBarContainer}
    {BottomBarContainer} 
  </View>
  
  const MiddleScreenContianer = <View style={styles.middleScreen}>
    {TopBarContainer}
      <View style={styles.borderStyle}/>
      {InfoContainer}
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
    paddingLeft: 25,
    paddingRight:25,
    padding: 15,
    borderRadius: 35,
    backgroundColor: '#336699', 
    height: '40%', 
    width: '85%',
    marginLeft: '7%',
    bottom: '25%'
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
