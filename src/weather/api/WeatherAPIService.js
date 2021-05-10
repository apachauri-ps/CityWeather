
import {apiRequest} from '../../common/NetworkService';
import AppConstants from '../../common/AppConstants';

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