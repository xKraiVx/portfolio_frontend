import Router from 'next/router';
import axios from 'axios';
/* import {
    parseCookies,
    destroyCookie
} from 'nookies' */

const path = process.env.BACK_URL;

const customAxios = axios.create({
    baseURL: path,
});

const requestHandler = (request) => {
    return request;
};
/* const errorHandler = async (error: AxiosError) => {
    const isUnAuthenticatedMessage = 'Unauthenticated.';
    const errorMessage = (error as AxiosError) ? .response ? data.message;
    const is422Error = (error as AxiosError).response ? .status === 422;
    const isSubscribtionMethodError = (error as AxiosError).response ? data ? data ? no_payment_method;
    if (is422Error && process.browser) {
        const errorData = (error as AxiosError) ? .response ? .data ? .data;
        for (const key in errorData) {
            notification.warning({
                message: errorData[key][0],
                duration: 4,
                placement: 'bottomRight'
            });
        }
    }
    if (!is422Error && errorMessage && errorMessage !== isUnAuthenticatedMessage && process.browser && !isSubscribtionMethodError) {
        notification.warning({
            message: errorMessage,
            duration: 4,
            placement: 'bottomRight'
        });
    }
    const originalRequest = error.config;
    const is401Error = (error as AxiosError).response ? .status === 401;
    const is403Error = (error as AxiosError).response ? .status === 403;
    const {
        accessToken: oldAccessToken,
        refreshToken: oldRefreshToken
    } = userInfoStorage.getUserInfoFromStorage();
    if (is403Error && (oldRefreshToken || oldAccessToken)) {
        userInfoStorage.removeUserInfoFromStorage();
    }
    if (is401Error && oldRefreshToken && oldAccessToken) {
        try {
            const {
                data
            } = await authApi.refreshToken({
                url: API_URL_V1,
                oldRefreshToken
            });
            const tokens = data.data;
            userInfoStorage.setUserTokensStorage({
                accessToken: tokens.access_token,
                refreshToken: tokens.refresh_token
            });
            originalRequest.headers.Authorization = `Bearer ${tokens.access_token}`;
            return axios(originalRequest);
        } catch (err) {
            console.error('Refresh error');
            userInfoStorage.removeUserInfoFromStorage();
        }
    }
    return Promise.reject(error);
}; */

const errorHandler = async (error) => {
    const {
        status,
        statusText
    } = error.response;
}

customAxios.interceptors.request.use(requestHandler, errorHandler);

const responseHandler = (response) => {
    return response.data;
};

customAxios.interceptors.response.use(responseHandler, errorHandler);


export {
    customAxios
};