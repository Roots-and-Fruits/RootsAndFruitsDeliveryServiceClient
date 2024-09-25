import { useState } from "react";
import {
  buttonContainer,
  cellWidth,
  checkboxStyle,
  productNameStyle,
  sectionStyle,
  sectionTitle,
  tableStyle,
  tableTitle,
} from "./ProductTable.style";
import { Button } from "@components";
import Switch from "react-switch";
import { Product } from "@types";
interface ProductTableProps {
  title: string;
  products: Product[];
}

const ProductTable = ({ title, products }: ProductTableProps) => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [toggle, setToggle] = useState(false);

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
    <section css={sectionStyle}>
      <div css={tableTitle}>
        <h3 css={sectionTitle}>{title}</h3>
        <div css={buttonContainer}>
          <Button variant="smallStroke">삭제</Button>
          <Button variant="smallFill">추가</Button>
        </div>
      </div>
      <table css={tableStyle}>
        <thead>
          <tr>
            <th>
              <input
                css={checkboxStyle}
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
                  css={checkboxStyle}
                  type="checkbox"
                  checked={selectedProducts.includes(product.productId)}
                  onChange={() => handleCheckboxChange(product.productId)}
                />
              </td>
              <td css={productNameStyle}>{product.productName}</td>
              <td css={cellWidth(15)}>{product.productPrice}</td>
              <td css={cellWidth(15)}>
                <Switch
                  checked={toggle}
                  onChange={setToggle}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#EC6732"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProductTable;
