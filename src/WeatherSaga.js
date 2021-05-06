
import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import WeatherActionsTypes from './WeatherActionsTypes';
import {weatherDetailsAPIRequest} from './WeatherAPIService';

function* watchWeatherActions() {
    yield takeLatest(WeatherActionsTypes.FETCH_WEATHER_DETAILS, fetchWeatherDetails)
}

function* fetchWeatherDetails(action) {

    const apiResponsee = yield call(weatherDetailsAPIRequest, action.payload.pincode)
    
    const updateWeatherDetailsAction = {
        type: WeatherActionsTypes.UPDATE_WEATHER_DETAILS,
        payload: apiResponsee,
    }

    yield put(updateWeatherDetailsAction)
}

export default function* rootSaga() {
    yield all([fork(watchWeatherActions)]);
}