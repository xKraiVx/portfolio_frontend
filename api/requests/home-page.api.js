import qs from 'qs';
import { customAxios } from '../index';

const getHomePage = async () => {

    const query = qs.stringify({
        fields: ["Title"]
    }, {
        encodeValuesOnly: true,
    })

    try{
        const res = await customAxios.get(`/api/home-page?${query}`)
        return res?.data;
    } catch (error) {
        return error;
    }
}

export const homePageApi = {
    getHomePage
}