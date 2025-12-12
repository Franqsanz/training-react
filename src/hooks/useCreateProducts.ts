import { useMutation } from "@tanstack/react-query";

import { createProducts } from "../services";

interface Product {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export function useCreateProducts() {
  return useMutation({
    mutationKey: ['create-products'],
    mutationFn: (body: Product) => createProducts(body),
  });
}
