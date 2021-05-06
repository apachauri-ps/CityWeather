const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const CONTENT_URL = 'http://openweathermap.org/img/wn';
const DEFAULT_COUNTRY = 'IN';
const DEFAULT_UNIT = 'metric';
const APP_ID = '3bdc2b92cabb22d7730c672379b19c6b';

const GetIconURL = (icon) => {
    return `${CONTENT_URL}/${icon}.png`
}

const AppConstants = {
    BASE_URL,
    CONTENT_URL,
    DEFAULT_COUNTRY,
    DEFAULT_UNIT,
    APP_ID,
    GetIconURL,
};

export default AppConstants;