import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, Image, View, TouchableOpacity,Button } from 'react-native';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import NotificationScreen from '../screens/Notification';
import ConnectScreen from '../screens/Connect';
import UsersScreen from '../screens/Users';
import { Avatar } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const TabsOption = () => {
    
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style:{
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ... styles.shadow
                }
            }}

        >
            <Tab.Screen name="Users" component={UsersScreen} options = {{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: '10'}}>
                        <Avatar.Icon 
                            size={36} 
                            style={{
                                width: 25,
                                height: 25
                            }}
                            color= {focused ? '#e32f45' : '#748c94'} 
                            icon="account" />
                    </View>
                )
            }}/>
            <Tab.Screen name="Notification" component={NotificationScreen}/>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Connect" component={ConnectScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    )
};

export default TabsOption;

const styles = StyleSheet.create({ 
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})