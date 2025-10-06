import { IcMinus, IcPlus } from "@svg";
import {
  countProductContainer,
  countStyle,
  disabledStyle,
  iconStyle,
  productCountWrapper,
  productNameStyle,
} from "./CountProduct.style";

interface CountProductProps {
  productName: string;
  count: number;
  onCountChange: (type: "increase" | "decrease") => void;
}

const CountProduct = ({
  productName,
  count,
  onCountChange,
}: CountProductProps) => {
  const handleIncrease = () => {
    onCountChange("increase");
  };
  const handleDecrease = () => {
    if (count > 0) {
      onCountChange("decrease");
    }
  };
  return (
    <article css={countProductContainer}>
      <span css={productNameStyle}>{productName}</span>
      <div css={productCountWrapper}>
        <IcMinus
          css={[iconStyle, count === 0 && disabledStyle]}
          onClick={handleDecrease}
        />
        <span css={countStyle}>{count}</span>
        <IcPlus css={iconStyle} onClick={handleIncrease} />
      </div>
    </article>
  );
};

export default CountProduct;
