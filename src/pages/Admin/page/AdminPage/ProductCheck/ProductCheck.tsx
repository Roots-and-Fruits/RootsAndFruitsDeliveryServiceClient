import { ProductTable } from "@pages/Admin/components";
import { pageLayout } from "./ProductCheck.style";
import { useFetchProductAll } from "@apis/domains/admin/useFetchProductAll";

const ProductCheck = () => {
  const { data } = useFetchProductAll();
  return (
    <div css={pageLayout}>
      <ProductTable
        title={`체험 상품`}
        products={data ? data.trialProductList : []}
        category="experience"
      />
      <ProductTable
        title={`판매 상품`}
        products={data ? data.productList : []}
        category="product"
      />
    </div>
  );
};

export default ProductCheck;
