import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  checkboxStyle,
  productNameStyle,
  cellWidth,
} from "../ProductTable/ProductTable.style";
import Switch from "react-switch";
import { ProductWithSailed } from "@types";

interface SortableRowProps {
  product: ProductWithSailed;
  selectedProducts: number[];
  handleCheckboxChange: (id: number) => void;
  patchProduct: (id: number) => void;
}

const SortableRow = ({
  product,
  selectedProducts,
  handleCheckboxChange,
  patchProduct,
}: SortableRowProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: product.productId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handlePointerDown = (event: React.PointerEvent) => {
    event.stopPropagation(); // 이벤트가 상위로 전파되지 않도록 차단
  };

  return (
    <tr ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <td>
        <input
          css={checkboxStyle}
          type="checkbox"
          checked={selectedProducts.includes(product.productId)}
          onChange={() => handleCheckboxChange(product.productId)}
          onPointerDown={handlePointerDown}
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
  );
};

export default SortableRow;
