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
import { useState } from "react";
import useOrderPostDataValidation from "src/hooks/useOrderPostDataValidation";
import { useOrderPostDataChange } from "src/hooks/useOrderPostDataChange";

const Receiver1 = ({ onNext }: StepProps) => {
  const {
    orderPostDataState,
    currentRecipientIndex,
    handleRecipientInputChange,
  } = useOrderPostDataChange();
  const { validateReceiver1 } = useOrderPostDataValidation();

  const { isAllValid } = validateReceiver1({
    recipientName:
      orderPostDataState.recipientInfo[currentRecipientIndex]?.recipientName ||
      "",
    recipientPhone:
      orderPostDataState.recipientInfo[currentRecipientIndex]?.recipientPhone ||
      "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckClick = () => {
    setIsChecked((prev) => !prev);
    handleRecipientInputChange(
      orderPostDataState.senderName,
      "recipientName",
      currentRecipientIndex
    );
    handleRecipientInputChange(
      orderPostDataState.senderPhone,
      "recipientPhone",
      currentRecipientIndex
    );
  };
  const handleNextClick = () => {
    if (isAllValid) {
      onNext();
    }
  };

  return (
    <>
      <Header text="받는 분" />
      <ProgressBar progress={28.56} />
      <div css={layoutStyle}>
        <section css={sectionStyle}>
          <div css={textStyle}>
            <span css={orangeTextStyle}>받는 분</span>의
            <br />
            이름과 휴대폰 번호를 입력해주세요
          </div>
        </section>
        <section css={mainSectionStyle}>
          <Input
            value={
              orderPostDataState.recipientInfo[currentRecipientIndex]
                ?.recipientName || ""
            }
            onChange={(e) => handleRecipientInputChange(e, "recipientName")}
            type="text"
            placeholder="이름을 입력하세요"
            inputLabel="이름"
            disabled={isChecked}
          />
          <Input
            value={
              orderPostDataState.recipientInfo[currentRecipientIndex]
                ?.recipientPhone || ""
            }
            onChange={(e) => handleRecipientInputChange(e, "recipientPhone")}
            type="tel"
            placeholder="휴대폰 번호를 입력하세요"
            inputLabel="휴대폰 번호"
            disabled={isChecked}
          />
          <CheckBox isChecked={isChecked} onClick={handleCheckClick}>
            보내는 사람과 같아요
          </CheckBox>
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

export default Receiver1;
