import { useQuery } from "@tanstack/react-query";

import { getProductsDetails } from "../services";

export function useProductsDetails(id: string | undefined) {
  return useQuery({
    queryKey: ['products-details', id],
    queryFn: () => getProductsDetails(id),
  });
}