import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

interface CallApiProps extends AxiosRequestConfig {
    token?: boolean;
    data?: any | null
}

export default async function callAPI({url, method, data, token}: CallApiProps) {
    let headers = {};
    if(token) {
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
    const res = {
        error: false,
        message: 'success',
        data: response.data.count ? response.data : response.data.data
    }
    return res;
}