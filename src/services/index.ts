import { api } from "../lib/api";

async function getAllProducts() {
  const res = await api.get("/products");

  return res.data;
}

async function getProductsDetails(id: string | undefined) {
  const res = await api.get(`/products/${id}`);

  return res.data;
}

export {
  getAllProducts,
  getProductsDetails,
}