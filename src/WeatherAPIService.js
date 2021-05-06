
import {apiRequest} from './NetworkService';
import AppConstants from './AppConstants';

export const weatherDetailsAPIRequest = (pincode) => {
    return apiRequest({
        apiUrl: AppConstants.BASE_URL,
        method: 'GET',
        payload: {
            zip: `${pincode},${AppConstants.DEFAULT_COUNTRY}`,
            appid: AppConstants.APP_ID,
            units: AppConstants.DEFAULT_UNIT,
        }
    });
};