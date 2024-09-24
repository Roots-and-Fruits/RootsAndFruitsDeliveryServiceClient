import { Button } from "@components";
import FilterAttribute from "../FilterAttribute/FilterAttribute";
import {
  buttonContainer,
  filterContainer,
  filterTable,
  rowStyle,
} from "./Filter.style";

const Filter = () => {
  return (
    <article css={filterContainer}>
      <div css={filterTable}>
        <div css={rowStyle}>
          <FilterAttribute label="접수 날짜">접수 날짜</FilterAttribute>
          <FilterAttribute label="배송 날짜">배송 날짜</FilterAttribute>
        </div>
        <div css={rowStyle}>
          <FilterAttribute label="상품">상품</FilterAttribute>
        </div>
        <div css={rowStyle}>
          <FilterAttribute label="상태">상태</FilterAttribute>
        </div>
      </div>

      <div css={buttonContainer}>
        <Button variant="stroke">초기화</Button>
        <Button variant="fill">검색</Button>
      </div>
    </article>
  );
};

export default Filter;
