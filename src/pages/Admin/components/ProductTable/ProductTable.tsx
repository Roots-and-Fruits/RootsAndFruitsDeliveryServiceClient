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
import { Button, Modal } from "@components";
import Switch from "react-switch";
import { ProductWithSailed } from "@types";
import { usePatchProduct } from "@apis/domains/admin/usePatchProduct";
import { useDeleteProduct } from "@apis/domains/admin/useDeleteProduct";
import ProductAddModal from "../ProductAddModal/ProductAddModal";
interface ProductTableProps {
  title: string;
  products: ProductWithSailed[];
}

const ProductTable = ({ title, products }: ProductTableProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const { mutate: patchProduct } = usePatchProduct();
  const { mutate: deleteProduct } = useDeleteProduct();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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

  const handleDeleteClick = () => {
    deleteProduct(selectedProducts);
  };

  return (
    <section css={sectionStyle}>
      <div css={tableTitle}>
        <h3 css={sectionTitle}>{title}</h3>
        <div css={buttonContainer}>
          <Button variant="smallStroke" onClick={handleDeleteClick}>
            삭제
          </Button>
          <Button variant="smallFill" onClick={() => setIsModalOpen(true)}>
            추가
          </Button>
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
              <td css={cellWidth(15)}>
                {`${product.productPrice.toLocaleString()}원`}
              </td>
              <td css={cellWidth(15)}>
                <Switch
                  checked={product.isSailed}
                  onChange={() => patchProduct(product.productId)}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onColor="#EC6732"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <ProductAddModal onClose={handleModalClose} />
        </Modal>
      )}
    </section>
  );
};

export default ProductTable;
