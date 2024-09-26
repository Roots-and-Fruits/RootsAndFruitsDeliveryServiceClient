import { Button, CheckBox, Header, Input, ProgressBar } from "@components";
import { StepProps } from "@types";
import {
  buttonSectionStyle,
  layoutStyle,
  mainSectionStyle,
  orangeTextStyle,
  sectionStyle,
  textStyle,
} from "@pages/orderInfo/styles";
import { checkboxWrapper } from "./Sender.style";

import useOrderPostDataValidation from "src/hooks/useOrderPostDataValidation";
import { useOrderPostDataChange } from "src/hooks/useOrderPostDataChange";

const Sender = ({ onNext }: StepProps) => {
  const {
    orderPostDataState,
    handleInputChange,
    handleRequiredCheckClick,
    handleOptinalAgreementClick,
  } = useOrderPostDataChange();
  const { validateSender } = useOrderPostDataValidation();

  const { isAllValid: isInputValid } = validateSender(orderPostDataState);
  const isAllValid = isInputValid;

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
              isChecked={orderPostDataState.isPersonalInfoConsent}
              onClick={handleRequiredCheckClick}
            >
              [필수] 개인정보 수집 및 이용 동의
            </CheckBox>
            <CheckBox
              isChecked={orderPostDataState.isMarketingConsent}
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
