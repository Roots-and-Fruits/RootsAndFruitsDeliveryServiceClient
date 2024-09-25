import { ProductTable } from "@pages/Admin/components";
import { pageLayout, sectionStyle, sectionTitle } from "./ProductCheck.style";

interface Product {
  productId: number;
  productName: string;
  productPrice: number;
}
interface ProductList {
  trialProductList: Product[];
  productList: Product[];
}

const products: ProductList = {
  trialProductList: [
    {
      productId: 1,
      productName: "체험 1",
      productPrice: 2600000,
    },
    {
      productId: 2,
      productName: "체험 2",
      productPrice: 2600000,
    },
    {
      productId: 3,
      productName: "체험 3",
      productPrice: 2600000,
    },
  ],
  productList: [
    {
      productId: 5,
      productName: "상품1",
      productPrice: 0,
    },
    {
      productId: 6,
      productName: "상품2",
      productPrice: 0,
    },
    {
      productId: 7,
      productName: "상품3",
      productPrice: 0,
    },
    {
      productId: 8,
      productName: "상품4",
      productPrice: 0,
    },
  ],
};
const ProductCheck = () => {
  return (
    <div css={pageLayout}>
      <section css={sectionStyle}>
        <h3 css={sectionTitle}>체험 상품</h3>
        <ProductTable products={products.trialProductList} />
      </section>
      <section css={sectionStyle}>
        <h3 css={sectionTitle}>판매 상품</h3>
        <ProductTable products={products.productList} />
      </section>
    </div>
  );
};

export default ProductCheck;
