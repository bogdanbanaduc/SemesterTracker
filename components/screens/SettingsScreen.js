import React from 'react';
import { View, Button } from 'react-native';

function SettingsScreen(props) {
    return (
        <View style={{flex:1, backgroundColor: 'brown'}}>
            <Button title='Log Out'
    onPress={() =>
        props.navigation.navigate("SignIn")
      }/>
        </View>
    );
}

export default SettingsScreen;