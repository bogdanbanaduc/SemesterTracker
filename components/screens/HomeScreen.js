import React, {Component, useState } from 'react';
import {View, Button, TextInput, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarScreen from './CalendarScreen';
import TodayScreen from './TodayScreen.js';
import AddScreen from './AddScreen.js';
import SettingsScreen from './SettingsScreen.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { backgroundColor, primaryColor, darkColor, normalColor, lightColor } from '../../assets/stylesheet.js'

const Tab = createBottomTabNavigator();

class HomeScreen extends Component {
    state = { username: this.props.route.params.username}
    

    render () {
        return (

            <View style={{
                backgroundColor: 'yellow',
                flex: 1,
                justifyContent: 'space-around',
                flexDirection: 'column-reverse',
                alignItems: 'stretch'
            }}>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Calendar") {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === "Today") {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            else if (route.name === "Settings") {
                iconName = focused ? 'md-settings' : 'ios-settings';
              }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: primaryColor,
          inactiveTintColor: darkColor,
        }}>
            <Tab.Screen name="Today" component={TodayScreen} />
            <Tab.Screen name="Calendar" initialParams={{ username: this.state.username }}  component={CalendarScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Add" component={AddScreen} />
        </Tab.Navigator>
    </View>
    );
}
}

export default HomeScreen;