import { useMutation } from "@tanstack/react-query";
import { updateProducts } from "../services";

interface Product {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

type paramsType = {
  id: number;
  body: Product;
}

export function useUpdateProduct() {
  return useMutation({
    mutationKey: ['update-product'],
    mutationFn: ({ id, body }: paramsType) =>
      updateProducts(id, body),
  });
}
