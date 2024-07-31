import axios from "axios";

axios.defaults.baseURL = 'https://macarons-shop-backend.onrender.com/';

export async function getAllProducts(route:string) {
    const response = await axios.get(route);
return response.data;
}

export async function getProductById(id:string) {
    const response =await axios.get(id);
    return response.data;
}