import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const insertProduct = (payload) => api.post(`/products`, payload);

export const getAllProducts = () => api.get(`/products`);

export const updateProductById = (id, payload) => api.put(`/products/${id}`, payload);

export const deleteProductById = (id) => api.delete(`/products/${id}`);

export const getProductById = (id) => api.get(`/products/${id}`);
