import { useEffect, useState } from "react";
import {
  buttonContainer,
  sectionStyle,
  sectionTitle,
  tableStyle,
  tableTitle,
} from "./ProductTable.style";
import { Button, Modal } from "@components";
import { CategoryType, ProductWithSailed } from "@types";
import { usePatchProduct } from "@apis/domains/admin/usePatchProduct";
import { useDeleteProduct } from "@apis/domains/admin/useDeleteProduct";
import ProductAddModal from "../ProductAddModal/ProductAddModal";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableRow from "../SortableRow/SortableRow";
import { usePatchSequence } from "@apis/domains/admin/usePatchSequence";

interface ProductTableProps {
  title: "체험 상품" | "판매 상품";
  products: ProductWithSailed[];
  category: CategoryType;
}

const ProductTable = ({ title, products, category }: ProductTableProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [productList, setProductList] = useState(products);
  const { mutate: patchProduct } = usePatchProduct();
  const { mutate: deleteProduct } = useDeleteProduct();
  const { mutate: patchProductSequence } = usePatchSequence();

  useEffect(() => {
    setProductList(products);
  }, [products]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

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
      const allProductIds = productList.map((product) => product.productId);
      setSelectedProducts(allProductIds);
    } else {
      setSelectedProducts([]);
    }
  };

  const isAllSelected = selectedProducts.length === productList.length;

  const handleDeleteClick = () => {
    deleteProduct(selectedProducts);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const currentSequence = productList.findIndex(
        (product) => product.productId === active.id
      );
      const newSequence = productList.findIndex(
        (product) => product.productId === over.id
      );
      const productId = productList[currentSequence].productId;

      setProductList((prevList) =>
        arrayMove(prevList, currentSequence, newSequence)
      );
      patchProductSequence({
        productId,
        currentSequence:
          title === "체험 상품" ? currentSequence : currentSequence + 1000,
        newSequence: title === "체험 상품" ? newSequence : newSequence + 1000,
      });
    }
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

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={productList.map((product) => product.productId)}
          strategy={verticalListSortingStrategy}
        >
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
              {productList.map((product) => (
                <SortableRow
                  key={product.productId}
                  product={product}
                  selectedProducts={selectedProducts}
                  handleCheckboxChange={handleCheckboxChange}
                  patchProduct={patchProduct}
                />
              ))}
            </tbody>
          </table>
        </SortableContext>
      </DndContext>

      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <ProductAddModal onClose={handleModalClose} category={category} />
        </Modal>
      )}
    </section>
  );
};

export default ProductTable;
