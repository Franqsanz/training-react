import { api } from "../lib/api";

export async function getAllProducts() {
  const res = await api.get("/products");

  return res.data;
}