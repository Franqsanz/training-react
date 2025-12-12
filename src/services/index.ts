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
  const res = await api.get("/products");

  return res.data;
}

async function getProductsDetails(id: number | undefined) {
  const res = await api.get(`/products/${id}`);

  return res.data;
}

async function deleteProducts(id: number | undefined) {
  const res = await api.delete(`/products/${id}`);

  return res.data;
}

async function createProducts(body: Product): Promise<any> {
  const res = await api.post('/products', {
    title: body.title,
    price: body.price,
    description: body.description,
    category: body.category,
    image: body.image
  });

  return res.data;
}

async function updateProducts(id: number, body: Product): Promise<any> {
  const res = await api.put(`/products/${id}`, {
    title: body.title,
    price: body.price,
    description: body.description,
    category: body.category,
    image: body.image
  });

  return res.data;
}


// Users
async function getAllUsers() {
  const res = await api.get('/users');

  return res.data;
}

export {
  getAllProducts,
  getProductsDetails,
  deleteProducts,
  createProducts,
  updateProducts,
  getAllUsers,
}
