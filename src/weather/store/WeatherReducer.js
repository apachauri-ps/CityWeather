
import WeatherActionsTypes from './WeatherActionsTypes';
import { combineReducers } from 'redux';

const initialState = {
    days: [],
    city: {},
    hasLoaded: false,
}

const weatherReducer = (state = initialState, action) => {

    let newState = state

    switch (action.type) {

        case WeatherActionsTypes.UPDATE_WEATHER_DETAILS:
            const response = action.payload
            newState = {
                ...state,
                days: response.list,
                city: response.city,
                hasLoaded: true,
            }
    }

    return newState
}

const rootReducer = combineReducers({
    weatherReducer,
});

export default rootReducer