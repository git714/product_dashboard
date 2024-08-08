import axios from 'axios';
import { toast } from "react-toastify";
const API_URL = 'https://cdn.drcode.ai/interview-materials/products.json';


export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    toast.error(error.message);
    console.log(error)
    throw new Error('Failed to fetch product data.');
  }
};
