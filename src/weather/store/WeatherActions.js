
import WeatherActionsTypes from './WeatherActionsTypes';

const fetchWeatherDetails = (pincode) => {
    return {
        type: WeatherActionsTypes.FETCH_WEATHER_DETAILS,
        payload: {
            pincode,
        }
    }
}

const WeatherActions = {
    fetchWeatherDetails,
}

export default WeatherActions;