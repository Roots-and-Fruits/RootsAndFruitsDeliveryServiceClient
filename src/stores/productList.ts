import { atom } from "jotai";

export interface Product {
  productId: number;
  productName: string;
  productPrice: number;
}

export type ProductList = Product[];

export const productListAtom = atom<ProductList>([]);
