import React, {Component, useState } from 'react';
import {View, Button, TextInput, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class LoginScreen extends Component {
    state = {
        username: "",
        password: ""
    }
    constructor(props) {
        super(props);
        this.getData();
    }

    storeData = async () => {
        try {
          await AsyncStorage.setItem('username', this.state.username)
          await AsyncStorage.setItem('password', this.state.password)
        } catch (e) {
        }
      }

    getData = async () => {
    try {
        const user = await AsyncStorage.getItem('username')
        const pass = await AsyncStorage.getItem('password')
        if(user !== null && pass != null) {
         this.setState({ username: user})
         this.setState({ password: pass})
        }
    } catch(e) {
    }
    }


    render () {
        return (
        <View style={{
            backgroundColor: 'green',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                right: '25%',
                bottom: '1%'
            }}>Username</Text>
            <TextInput style={{
                backgroundColor: 'red',
                width: '70%',
                height: '5%',
    }} onChangeText={text => this.setState({username: text})}
    defaultValue={this.state.username}/>

    <Text style={{
                right: '25%',
                bottom: '1%',
                paddingTop: '10%'
            }}>Password</Text>
            <TextInput secureTextEntry={true} style={{
                backgroundColor: 'red',
                width: '70%',
                height: '5%',
    }} onChangeText={text => this.setState({password: text})}
    defaultValue={this.state.password}/>

    <Button title='Sign In' onPress={this.storeData}
    onPress={() =>
        this.props.navigation.navigate("Home", { username: this.state.username })
      }/>
        </View>
    );
}
}

export default LoginScreen;