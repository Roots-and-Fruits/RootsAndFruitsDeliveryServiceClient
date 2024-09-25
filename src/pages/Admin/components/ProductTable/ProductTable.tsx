import { useState } from "react";
import { cellWidth, productNameStyle, tableStyle } from "./ProductTable.style";

interface Product {
  productId: number;
  productName: string;
  productPrice: number;
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable = ({ products }: ProductTableProps) => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const handleCheckboxChange = (id: number) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((productId) => productId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAllChange = (isChecked: boolean) => {
    if (isChecked) {
      const allProductIds = products.map((product) => product.productId);
      setSelectedProducts(allProductIds);
    } else {
      setSelectedProducts([]);
    }
  };

  const isAllSelected = selectedProducts.length === products.length;

  return (
    <table css={tableStyle}>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={(e) => handleSelectAllChange(e.target.checked)}
            />
          </th>
          <th>상품명</th>
          <th>상품 가격</th>
          <th>판매 중</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.productId}>
            <td>
              <input
                type="checkbox"
                checked={selectedProducts.includes(product.productId)}
                onChange={() => handleCheckboxChange(product.productId)}
              />
            </td>
            <td css={productNameStyle}>{product.productName}</td>
            <td css={cellWidth(15)}>{product.productPrice}</td>
            <td css={cellWidth(15)}>토글</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
