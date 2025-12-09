import { api } from "../lib/api";

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


// Users
async function getAllUsers() {
  const res = await api.get('/users');

  return res.data;
}

export {
  getAllProducts,
  getProductsDetails,
  deleteProducts,
  getAllUsers,
}
