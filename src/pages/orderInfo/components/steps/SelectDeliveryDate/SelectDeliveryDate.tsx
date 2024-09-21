import { Button, Header, ProgressBar, RadioInput } from "@components";
import {
  buttonSectionStyle,
  layoutStyle,
  orangeTextStyle,
  sectionStyle,
  textStyle,
} from "@pages/orderInfo/styles";
import { StepProps } from "@types";
import {
  boldText,
  mainSectionStyle,
  normalText,
  radioWrapper,
  textWrapper,
} from "./SelectDeliveryDate.style";
import React, { useState } from "react";

const SelectDeliveryDate = ({ onNext }: StepProps) => {
  const [selectedOption, setSelectedOption] = useState("regular");

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };
  const handleNextClick = () => {
    onNext();
  };
  return (
    <>
      <Header text="희망 배송일자 선택" />
      <ProgressBar progress={71.4} />
      <div css={layoutStyle}>
        <section css={sectionStyle}>
          <div css={textStyle}>
            희망하는
            <br />
            <span css={orangeTextStyle}>배송일자</span>를 선택해주세요
          </div>
        </section>
        <main css={mainSectionStyle}>
          <section css={radioWrapper}>
            <RadioInput
              name="delivery"
              value="regular"
              checked={selectedOption === "regular"}
              onChange={handleOptionChange}
              label="일반 배송"
            />
            <RadioInput
              name="delivery"
              value="scheduled"
              checked={selectedOption === "scheduled"}
              onChange={handleOptionChange}
              label="예약 배송"
            />
          </section>
          <section css={textWrapper}>
            <span css={normalText}>
              {selectedOption === "regular"
                ? "일반배송은 가능한 가장 빠른 날짜에 발송해드려요."
                : "예약배송은 원하시는 날짜에 맞춰 발송해드려요."}
            </span>
            <span>
              {selectedOption === "regular" && (
                <span css={normalText}>
                  보통 배송 출발까지 2일정도 소요되지만,
                  <br />
                </span>
              )}
              <span css={boldText}>
                기상 상황에 따라 일정이 변동될 수 있어요.
              </span>
            </span>
          </section>
        </main>
        <footer css={buttonSectionStyle}>
          <Button variant="fill" onClick={handleNextClick}>
            다음
          </Button>
        </footer>
      </div>
    </>
  );
};

export default SelectDeliveryDate;
