import axios from "axios";
import callAPI from "../config/api";
const API_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getFeaturedMenu() {
    const URL = 'players/landing-page';

    const response = await axios.get(`${API_URL}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data;
    return axiosResponse.data;
}

export async function getDetailVoucher(id: string) {
    const URL = `players/${id}/detail`;

    const response = await axios.get(`${API_URL}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data;
    return axiosResponse.data;
}

export async function getMenuCategory() {
    const URL = `players/category`;

    const response = await axios.get(`${API_URL}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data;
    return axiosResponse.data;
}