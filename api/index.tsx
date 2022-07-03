import axios from 'axios';

const path = process.env.NEXT_PUBLIC_BACK_URL;

type AxiosDecorator = (query: string) => any

const axiosDecorator: AxiosDecorator = async (query) => {
    const customAxios = axios.create({
        baseURL: path,
    });

    const body = {
        query
    }

    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const res = await customAxios.post(`${path}/graphql`, body, options)

    return await res.data.data;
}


export {
    axiosDecorator
};