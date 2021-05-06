import React from 'react';

import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native';

import WeatherHeader from './WeatherHeader';
import WeatherItem from './WeatherItem';

const WeatherDetailsScreen = (props) => {

    const { pincode, city, days } = props.route.params;
    const [todayWeather, ...nextDays] = days

    let weatherHeaderInfo = {
        cityName: city.name,
    }

    if (todayWeather) {
        weatherHeaderInfo.temprature = todayWeather.main.temp

        if (todayWeather.weather[0]) {
            weatherHeaderInfo.weather = todayWeather.weather[0].main
        }
    }

    const onPressBack = () => {
        props.navigation.pop()
    }

    const renderWeatherItem = ({item}) => {

        return (
            <WeatherItem item={item}/>
        );
    }

    return (
        <View style={styles.background}>
            <WeatherHeader info={weatherHeaderInfo} onBack={onPressBack} />
            <FlatList
                style={styles.weatherList}
                keyExtractor={(item, index) => index.toString()}
                data={nextDays}
                renderItem={renderWeatherItem}
            />
        </View>
    );
}

export default WeatherDetailsScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
        paddingBottom: 24,
    },
    weatherList: {
    },
});