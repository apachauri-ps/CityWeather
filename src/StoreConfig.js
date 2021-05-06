import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './WeatherSaga';
import rootReducer from './WeatherReducer';

const sagaMiddleware = createSagaMiddleware();
const defaultMiddlewares = getDefaultMiddleware({
    thunk: false,
});
const allMiddlewares = [...defaultMiddlewares, sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware: allMiddlewares,
});

sagaMiddleware.run(rootSaga);

export {store};