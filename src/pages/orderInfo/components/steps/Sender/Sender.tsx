import { Button, CheckBox, Header, Input, ProgressBar } from "@components";
import { StepProps } from "@types";
import {
  buttonSectionStyle,
  checkboxWrapper,
  layoutStyle,
  mainSectionStyle,
  orangeTextStyle,
  sectionStyle,
  textStyle,
} from "./Sender.style";
import { useOrderPostDataChange } from "@pages/orderInfo/hooks/useOrderPostDataChange";
import useOrderPostDataValidation from "@pages/orderInfo/hooks/useOrderPostDataValidation";
import { useState } from "react";

const Sender = ({ onNext }: StepProps) => {
  const { orderPostDataState, handleInputChange, handleOptinalAgreementClick } =
    useOrderPostDataChange();
  const { validateSender } = useOrderPostDataValidation();

  const [requiredCheck, setRequiredCheck] = useState(false);

  const handleRequiredCheckClick = () => {
    setRequiredCheck((prev) => !prev);
  };

  const { isAllValid: isInputValid } = validateSender(orderPostDataState);
  const isAllValid = isInputValid && requiredCheck;

  const handleNextClick = () => {
    if (isAllValid) {
      onNext();
    }
  };
  return (
    <>
      <Header text="보내는 분" />
      <ProgressBar progress={14.28} />
      <div css={layoutStyle}>
        <section css={sectionStyle}>
          <div css={textStyle}>
            <span css={orangeTextStyle}>보내는 분</span>의
            <br />
            이름과 휴대폰 번호를 입력해주세요
          </div>
        </section>
        <section css={mainSectionStyle}>
          <Input
            value={orderPostDataState.senderName}
            onChange={(e) => handleInputChange(e, "senderName")}
            type="name"
            placeholder="이름을 입력하세요"
            inputLabel="이름"
          />
          <Input
            value={orderPostDataState.senderPhone}
            onChange={(e) => handleInputChange(e, "senderPhone")}
            type="text"
            placeholder="휴대폰 번호를 입력하세요"
            inputLabel="휴대폰 번호"
          />
          <div css={checkboxWrapper}>
            <CheckBox
              isChecked={requiredCheck}
              onClick={handleRequiredCheckClick}
            >
              [필수] 개인정보 수집 및 이용 동의
            </CheckBox>
            <CheckBox
              isChecked={orderPostDataState.optinalAgreement}
              onClick={handleOptinalAgreementClick}
            >
              [선택] 마케팅 활용 동의
            </CheckBox>
          </div>
        </section>
        <footer css={buttonSectionStyle}>
          <Button
            variant="fill"
            onClick={handleNextClick}
            disabled={!isAllValid}
          >
            다음
          </Button>
        </footer>
      </div>
    </>
  );
};

export default Sender;
