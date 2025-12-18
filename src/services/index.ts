import { api } from "../lib/api";

interface Product {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

// Products
async function getAllProducts() {
  return await api.get("/products");
}

async function getProductsDetails(id: number | undefined) {
  return await api.get(`/products/${id}`);
}

async function deleteProducts(id: number | undefined) {
  return await api.delete(`/products/${id}`);
}

async function createProducts(body: Product): Promise<any> {
  return await api.post('/products', {
    title: body.title,
    price: body.price,
    description: body.description,
    category: body.category,
    image: body.image
  });
}

async function updateProducts(id: number, body: Product): Promise<any> {
  return await api.put(`/products/${id}`, {
    title: body.title,
    price: body.price,
    description: body.description,
    category: body.category,
    image: body.image
  });
}

// Users
async function getAllUsers() {
  return await api.get('/users');
}

export {
  getAllProducts,
  getProductsDetails,
  deleteProducts,
  createProducts,
  updateProducts,
  getAllUsers,
}
