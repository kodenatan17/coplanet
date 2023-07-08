import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function setSignUp(data) {
    const URL = 'auth/signup';

    const response = await axios.post(`${API_URL}/${API_VERSION}/${URL}`, data).catch(err => err.response);
    const axiosResponse = response.data;
    if(axiosResponse?.error === 1) {
        return axiosResponse;
    }
    return axiosResponse.data;
}

export async function setLogin() {
    return null;
}