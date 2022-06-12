import axios from 'axios';
import qs from 'qs';
import { customAxios } from '../index';

const getTest = async () => {

    const query = `
        query getHome {
            homePage{
                data{
                attributes{
                title
                }
            }
            }
            header{
            data{
                attributes{
                logo{
                    image{
                    data{
                        attributes{
                        url
                        alternativeText
                        }
                    }
                    }
                }
                }
            }
            }
        }
    `

    const body = {
        query
    }

    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await customAxios.post("http://localhost:1337/graphql", body, options)

        const data = await res.data;

        return data;

    } catch (error) {
        return error;
    }
}

export const testApi = {
    getTest
}