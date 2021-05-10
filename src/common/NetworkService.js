import axios from 'axios';

export async function callApi(authOptions) {
    const returnVal = {};
    let responsecode = {};
    console.log('Auth Options:\n' + authOptions.method + '\n' + authOptions.url + '\nHeaders: ' + authOptions.headers.stringify);

    await axios(authOptions)
        .then((res) => {
            // console.log('Response: ' + res)
            returnVal.response_type = 'success';
            returnVal.response = res.data;
            responsecode = returnVal;
            // console.log('API Response: ' + JSON.stringify(res.data));
        })
        .catch((error) => {
            returnVal.response_type = 'fail';
            returnVal.response = error.response.data;
            responsecode = returnVal;
            console.log('API Error:')
            console.log(error);
            console.log(JSON.stringify(error.response.data))
        });

    return responsecode;
}

// export const apiRequest = ({ apiUrl, method, payload }) => {

//     console.log('API Request: \n' + method + ' ' + apiUrl + ' ' + payload);

//     let authOptions = {
//         method,
//         url: apiUrl,
//         data: payload,
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             'x-api-key': 'Z5Mq3O2P9wHYl9XTTi2zRiLR9JbWcwTf',
//             'platform': 'mobile',
//         },
//         json: true,
//     };

//     if (method === 'GET') {
//         authOptions = {
//             method,
//             url: apiUrl,
//             params: payload,
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'x-api-key': 'Z5Mq3O2P9wHYl9XTTi2zRiLR9JbWcwTf',
//                 'platform': 'mobile',
//                 'platform': 'mobile',
//             },
//             json: true,
//         };
//     }

//     return callApi(authOptions);
// };


export const apiRequest = ({ apiUrl, method, payload }) => {

    console.log('API Request: \n' + method + ' ' + apiUrl + ' ' + JSON.stringify(payload));

    return axios
    .get(apiUrl, {
      params: payload,
    })
    .then((response) => {
        const returnVal = {};
        returnVal.response_type = 'success';
        returnVal.response = response.data;
        return returnVal;
    })
    .catch((error) => {
        console.log('API Error:')
        console.log(error);
        console.log(JSON.stringify(error.response.data))

        const returnVal = {};
        returnVal.response_type = 'fail';
        returnVal.response = error.response.data;
        return returnVal;
    })
};