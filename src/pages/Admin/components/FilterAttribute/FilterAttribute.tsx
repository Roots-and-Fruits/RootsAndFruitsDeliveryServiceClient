import { HTMLAttributes } from "react";
import {
  attributeBox,
  attributeContent,
  attributeLabel,
} from "./FilterAttribute.style";

interface FilterAttributeProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  children: React.ReactNode;
}

const FilterAttribute = ({ label, children }: FilterAttributeProps) => {
  return (
    <div css={attributeBox}>
      <div css={attributeLabel}>{label}</div>
      <div css={attributeContent}>{children}</div>
    </div>
  );
};

export default FilterAttribute;
