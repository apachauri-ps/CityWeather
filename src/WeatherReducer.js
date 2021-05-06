
import WeatherActionsTypes from './WeatherActionsTypes';
import {combineReducers} from 'redux';

const initialState = {
    days: [],
    city: {},
    hasLoaded: false,
}

const weatherReducer = (state = initialState, action) => {

    // console.log(`weatherReducer: ${action.type}`)
    // console.log('')
    let newState = state

    switch(action.type) {

        case WeatherActionsTypes.UPDATE_WEATHER_DETAILS:
            if (action.payload.response_type === 'success') {
                const response = action.payload.response
                newState = {
                    ...state,
                    days: response.list,
                    city: response.city,
                    hasLoaded: true,
                }
            }
    }

    // console.log(`newState: ${JSON.stringify(newState)}`)

    return newState
}

const rootReducer = combineReducers({
    weatherReducer,
});

export default rootReducer