import React from 'react';
import { View, Text } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { backgroundColor, primaryColor, darkColor, normalColor, lightColor } from '../../assets/stylesheet.js'

function CalendarScreen(props) {
    return (
        <View style={{flex:1, backgroundColor: '#111'}}>
            <Text style={{
                left: '25%',
                top: '5%'
            }}>Hello {props.route.params.username}</Text>

        <Calendar style={{
            
        }} theme={{
            calendarBackground: backgroundColor,
            monthTextColor: primaryColor,
            indicatorColor: darkColor,
            arrowColor: primaryColor,
            todayTextColor: primaryColor,
            textDayFontSize: 24,
            dayTextColor: darkColor,
            textMonthFontSize: 30,
            }}
            
            onDayLongPress={(day) => {console.log('selected day', day)}}></Calendar>
        </View>
    );
}

export default CalendarScreen;