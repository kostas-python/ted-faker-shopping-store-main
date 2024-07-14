import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

export const getProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the products!", error);
    }
};
