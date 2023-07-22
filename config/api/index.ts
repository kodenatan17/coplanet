import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface CallApiProps extends AxiosRequestConfig {
    token?: boolean;
    data?: any | null
    serverToken?: string;
}

export default async function callAPI({url, method, data, token, serverToken}: CallApiProps) {
    let headers = {};
    if(serverToken) {
        headers= {
            Authorization: `Bearer ${serverToken}`
        }
    } else if(token) {
        const tokenCookies = Cookies.get('token');
        if(tokenCookies) {
            const jwtToken = window.atob(tokenCookies);
            headers= {
                Authorization: `Bearer ${jwtToken}`
            }
        }
    }
    
    const response = await axios({
        url,
        method,
        data,
        headers: headers
    }).catch(err => err.response);
    console.log(response);
    if(response?.status > 300) {
        const res = {
            error: true,
            message: response.data.message,
            data: null
        }
        return res;
    }
    const {length} = Object.keys(response.data);
    const res = {
        error: false,
        message: 'success',
        data: length > 1 ? response.data : response.data.data
    }
    return res;
}