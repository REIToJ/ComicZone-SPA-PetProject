import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Получение всех продуктов
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};

// Получение продукта по ID
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product', error);
    throw error;
  }
};

// Создание нового продукта
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/products`, productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product', error);
    throw error;
  }
};

// Создание новой категории
export const createCategory = async (categoryData) => {
  try {
    const response = await axios.post(`${API_URL}/categories`, categoryData);
    return response.data;
  } catch (error) {
    console.error('Error creating category', error);
    throw error;
  }
};

// Другие API-запросы можно добавить аналогичным образом
