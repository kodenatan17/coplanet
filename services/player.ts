import axios from "axios";

export async function getFeaturedMenu() {
    const API_URL = process.env.NEXT_PUBLIC_API;
    const API_VERSION = 'api/v1';
    const URL = 'players/landing-page';
    
    const response = await axios.get(`${API_URL}/${API_VERSION}/${URL}`);
    const axiosResponse = response.data;
    return axiosResponse.data;
}

export async function getDetailVoucher() {
 return null;
}