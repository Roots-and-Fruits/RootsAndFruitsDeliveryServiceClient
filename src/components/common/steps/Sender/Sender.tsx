import { Button, CheckBox, Input, Modal } from "@components";
import { StepProps } from "@types";
import {
  buttonSectionStyle,
  layoutStyle,
  mainSectionStyle,
  coloredTextStyle,
  sectionStyle,
  textStyle,
} from "@pages/orderInfo/styles";
import {
  checkboxWrapper,
  consentDetail,
  consentModalContainer,
  consentTitle,
} from "./Sender.style";

import useOrderPostDataValidation from "src/hooks/useOrderPostDataValidation";
import { useOrderPostDataChange } from "src/hooks/useOrderPostDataChange";
import { useState } from "react";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";

const Sender = ({ onNext }: StepProps) => {
  const [category] = useAtom(categoryAtom);

  const {
    orderPostDataState,
    handleInputChange,
    handleRequiredCheckClick,
    handleOptinalAgreementClick,
  } = useOrderPostDataChange();
  const { validateSender } = useOrderPostDataValidation();

  const [selectedConsent, setSelectedConsent] = useState<
    "personalInfo" | "marketing"
  >("personalInfo");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isAllValid: isInputValid } = validateSender(orderPostDataState);
  const isAllValid = isInputValid;

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleNextClick = () => {
    if (isAllValid) {
      onNext();
    }
  };

  const handleDetailClick = (selected: string) => {
    setSelectedConsent(selected as "personalInfo" | "marketing");
    setIsModalOpen(true);
  };
  return (
    <div css={layoutStyle}>
      <section css={sectionStyle}>
        <div css={textStyle}>
          <span css={coloredTextStyle(category)}>보내는 분</span>의
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
          type="tel"
          placeholder="휴대폰 번호를 입력하세요"
          inputLabel="휴대폰 번호"
        />
        <div css={checkboxWrapper}>
          <CheckBox
            isChecked={orderPostDataState.isPersonalInfoConsent}
            onClick={handleRequiredCheckClick}
          >
            [필수] 개인정보 수집 및 이용 동의
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleDetailClick("personalInfo");
              }}
              css={consentDetail}
            >
              더보기
            </span>
          </CheckBox>
          <CheckBox
            isChecked={orderPostDataState.isMarketingConsent}
            onClick={handleOptinalAgreementClick}
          >
            [선택] 마케팅 활용 동의
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleDetailClick("marketing");
              }}
              css={consentDetail}
            >
              더보기
            </span>
          </CheckBox>
        </div>
        {isModalOpen && (
          <Modal onClose={handleModalClose}>
            {selectedConsent === "personalInfo" ? (
              <article css={consentModalContainer}>
                <h1 css={consentTitle}>개인정보 수집 및 이용 동의</h1>
                <p>
                  [항목]
                  <br />
                  이름, 휴대폰번호, 주소
                </p>
                <p>
                  [목적]
                  <br />
                  상품 택배배송을 위한 목적
                </p>
                <p>
                  [보유 및 이용 기간]
                  <br />
                  발송일로부터 1년
                </p>
                <Button variant="fill" onClick={handleModalClose}>
                  확인
                </Button>
              </article>
            ) : (
              <article css={consentModalContainer}>
                <h1 css={consentTitle}>
                  마케팅 목적의 개인정보 수집 및 이용 동의
                </h1>
                <p>
                  [항목]
                  <br />
                  이름, 휴대폰번호, 주소
                </p>
                <p>
                  [목적]
                  <br />
                  상품 안내 이벤트 알림서비스
                </p>
                <p>
                  [보유 및 이용 기간]
                  <br />
                  발송일로부터 1년
                </p>
                <Button variant="fill" onClick={handleModalClose}>
                  확인
                </Button>
              </article>
            )}
          </Modal>
        )}
      </section>
      <footer css={buttonSectionStyle}>
        <Button variant="fill" onClick={handleNextClick} disabled={!isAllValid}>
          다음
        </Button>
      </footer>
    </div>
  );
};

export default Sender;
