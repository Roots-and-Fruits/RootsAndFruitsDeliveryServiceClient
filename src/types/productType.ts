export interface Product {
  productId: number;
  productName: string;
  productPrice: number;
}

export interface ProductList {
  trialProductList: Product[];
  productList: Product[];
}
export interface SailedProductList {
  trialSailedProductList: Product[];
  sailedproductList: Product[];
}
