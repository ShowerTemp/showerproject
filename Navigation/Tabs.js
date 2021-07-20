import React, { Children } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, Image, View, TouchableOpacity,Button } from 'react-native';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import NotificationScreen from '../screens/Notification';
import ConnectScreen from '../screens/Connect';
import UsersScreen from '../screens/Users';
import { Avatar } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabsOption = () => {
    
    const CustomTabBarButton = ({childern, onPress}) => (
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: 'center',
                alignSelf: 'center',
                ... styles.shadow
            }}
            onPress={onPress}
        >
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                {childern}
            </View>
        </TouchableOpacity>
    )
    
    // User Icon lead to User Screen
    const UserContainer = <Tab.Screen name="Users" component={UsersScreen} options = {{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Avatar.Icon 
                    backgroundColor = 'black'
                    size= {45}
                    color= {focused ? '#e32f45' : '#748c94'} 
                    icon="account" />
                <Text 
                    style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}
                    >
                    User
                </Text>
            </View>
        )
        }}/>
        
    // Notification Icon lead to Notification Screen
    const NotificationContainer = <Tab.Screen name="Notification" component={NotificationScreen} options = {{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Avatar.Icon 
                    backgroundColor = 'black'
                    size= {45}
                    color= {focused ? '#e32f45' : '#748c94'} 
                    icon="bell-ring-outline" />
                <Text 
                    style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}
                    >
                    Notification
                </Text>
            </View>
        )
        }}/>

    // Home Icon lead to Home Screen
    const HomeContainer = <Tab.Screen name="Home" component={HomeScreen} options = {{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Avatar.Icon 
                    backgroundColor = 'black'
                    size= {45}
                    color= {focused ? '#e32f45' : '#748c94'} 
                    icon="home-variant" />
                <Text 
                    style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}
                    >
                    Home
                </Text>
            </View>
        ),
        // tabBarButton: (props) => (
        //     <CustomTabBarButton {...props}/>
        // )
        }}/>

    // Connection Icon lead to Connection Screen
    const ConnectContainer =<Tab.Screen name="Connect" component={ConnectScreen} options = {{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Avatar.Icon 
                    backgroundColor = 'black'
                    size= {45}
                    color= {focused ? '#e32f45' : '#748c94'} 
                    icon="leak" />
                <Text 
                    style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}
                    >
                    Connect
                </Text>
            </View>
        )
        }}/>

    // Settings Icon lead to Settings Screen
    const SettingsContainer = <Tab.Screen name="Settings" component={SettingsScreen} options = {{
        tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                <Avatar.Icon 
                    backgroundColor = 'black'
                    size= {45}
                    color= {focused ? '#e32f45' : '#748c94'} 
                    icon="cogs" />
                <Text 
                    style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}
                    >
                    Settings
                </Text>
            </View>
        )
        }}/>
    const MainContainer = <Tab.Navigator
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
            marginTop: 4,
            ... styles.shadow
        }
    }}
    >
        {UserContainer}
        {NotificationContainer}
        {HomeContainer}
        {ConnectContainer}
        {SettingsContainer}
    </Tab.Navigator>
   
   return (
    MainContainer    
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