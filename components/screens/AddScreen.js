import React from 'react';
import {View, Button} from 'react-native'
import { backgroundColor, primaryColor, darkColor, normalColor, lightColor } from '../../assets/stylesheet.js'

function AddScreen(props) {
    return (
        <View style={{flex:1, justifyContent: 'center', backgroundColor: backgroundColor}}>
            <Button title="Add Standalone Task"/>
            <Button title="Add Weekly Course"/>
            <Button title="Add Task related to Course"/>
        </View>
    );
}

export default AddScreen;