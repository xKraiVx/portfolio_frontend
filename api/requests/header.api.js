import qs from 'qs';
import { customAxios } from '../index';

const getHeader = async () => {

    const query = qs.stringify({
        populate: {
            logo: {
                populate: "*"
            },
            navigation: {
                populate: "*"
            }
        }
    }, {
        encodeValuesOnly: true,
    })

    try {
        const res = await customAxios.get(`/api/header?${query}`)
        return res?.data;
    } catch (error) {
        return error;
    }
}

export const headerApi = {
    getHeader
}