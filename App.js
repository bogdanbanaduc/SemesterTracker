import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Button, TextInput } from 'react-native';
import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './components/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';


export default function App({navigation}) {
  const [loggedIn, changeState] = useState(false)
  const Stack = createStackNavigator();
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center"
    }}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        {loggedIn === false ? (
          <Stack.Screen name="SignIn" component={LoginScreen} />
          
        ) : (
          <View></View>
        )}
        <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const containerStyle = { backgroundColor: "orange"};
