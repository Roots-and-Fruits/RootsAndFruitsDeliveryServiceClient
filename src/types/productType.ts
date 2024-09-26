export interface Product {
  productId: number;
  productName: string;
  productPrice: number;
}
export interface ProductWithSailed {
  productId: number;
  productName: string;
  productPrice: number;
  isSailed: boolean;
}

export interface ProductList {
  trialProductList: Product[];
  productList: Product[];
}
export interface SailedProductList {
  trialSailedProductList: Product[];
  sailedproductList: Product[];
}

export interface ProductListWithSailed {
  trialProductList: ProductWithSailed[];
  productList: ProductWithSailed[];
}
