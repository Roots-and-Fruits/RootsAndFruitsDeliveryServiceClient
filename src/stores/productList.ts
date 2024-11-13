import { atomWithStorage } from "jotai/utils";

export interface Product {
  productId: number;
  productName: string;
  productPrice: number;
}

export type ProductList = Product[];

export interface ProductListResponse {
  trialSailedProductList: ProductList;
  sailedproductList: ProductList;
}

export const productListAtom = atomWithStorage<ProductListResponse>(
  "productListAtom",
  {
    trialSailedProductList: [],
    sailedproductList: [],
  }
);
