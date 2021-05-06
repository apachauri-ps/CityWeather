import React from 'react';

import AppConstants from './AppConstants';

import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

const WeatherItem = ({item}) => {

    const dateString = item.dt_txt
    const date = new Date(dateString)
    const temprature = `${item.main.temp.toFixed(0)}°C`
    let iconURL;
    if (item.weather[0]) {
        iconURL = AppConstants.GetIconURL(item.weather[0].icon)        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.weatherText}>{'Saturday'}</Text>
            <Text style={styles.weatherText}>{temprature}</Text>
            <Image source={{ uri: iconURL }} style={styles.weatherIcon} />
        </View>
    );
}

export default WeatherItem;

const styles = StyleSheet.create({
    container: {
        paddingTop: 24,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    weatherIcon: {
        padding: 10,
        width: 40,
        height: 40,
    },
    weatherText: {
        paddingTop: 5,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '300',
        color: 'white',
    },
});