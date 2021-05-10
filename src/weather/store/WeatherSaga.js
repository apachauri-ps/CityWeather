
import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import WeatherActionsTypes from './WeatherActionsTypes';
import {weatherDetailsAPIRequest} from '../api/WeatherAPIService';
import {storeObject, getObject} from '../../common/AsyncStorageUtils';

function* watchWeatherActions() {
    yield takeLatest(WeatherActionsTypes.FETCH_WEATHER_DETAILS, fetchWeatherDetails)
}

function* fetchWeatherDetails(action) {

    let response = yield getObject(action.payload.pincode)

    if (response === null) {

        const apiResponsee = yield call(weatherDetailsAPIRequest, action.payload.pincode)

        if (apiResponsee.response_type === 'success') {
            console.log(`api status: success`)
            storeObject(action.payload.pincode, apiResponsee.response)
            response = apiResponsee.response
        } else {
            console.log(`api status: fail`)
        }
    }
    
    const updateWeatherDetailsAction = {
        type: WeatherActionsTypes.UPDATE_WEATHER_DETAILS,
        payload: response,
    }

    yield put(updateWeatherDetailsAction)
}

export default function* rootSaga() {
    yield all([fork(watchWeatherActions)]);
}