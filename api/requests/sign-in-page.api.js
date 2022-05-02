import qs from 'qs';
import { customAxios } from '../index';

const getSignInPage = async () => {

    const query = qs.stringify({
        fields: ["title"]
    }, {
        encodeValuesOnly: true,
    })

    try{
        const res = await customAxios.get(`/api/sign-in-page?${query}`)
        return res?.data;
    } catch (error) {
        return error;
    }
}

export const signInPageApi = {
    getSignInPage
}