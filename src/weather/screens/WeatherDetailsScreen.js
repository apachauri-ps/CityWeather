import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native';
import moment from 'moment';

import WeatherHeader from '../components/WeatherHeader';
import WeatherItem from '../components/WeatherItem';

const WeatherDetailsScreen = (props) => {

    const { pincode, city, days } = props.route.params;
    const [todayWeather, ...restDays] = days

    let weatherHeaderInfo = {
        cityName: city.name,
    }

    let nextDays = [];
    if (todayWeather) {
        weatherHeaderInfo.temprature = todayWeather.main.temp

        if (todayWeather.weather[0]) {
            weatherHeaderInfo.weather = todayWeather.weather[0].main
        }

        const todayMoment = moment(todayWeather.dt_txt, 'YYYY-MM-DD')
        nextDays = restDays.filter((day) => {
            const dayMoment = moment(day.dt_txt, 'YYYY-MM-DD')
            return (dayMoment > todayMoment)
        })
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