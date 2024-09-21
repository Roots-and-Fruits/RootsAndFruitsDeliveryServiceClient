import { Button, Header, Input, ProgressBar } from "@components";
import {
  buttonSectionStyle,
  layoutStyle,
  orangeTextStyle,
  sectionStyle,
  textStyle,
} from "@pages/orderInfo/styles";
import { StepProps } from "@types";
import { mainSectionStyle } from "./Receiver2.style";
import { useOrderPostDataChange } from "@pages/orderInfo/hooks/useOrderPostDataChange";
import useOrderPostDataValidation from "@pages/orderInfo/hooks/useOrderPostDataValidation";

const Receiver2 = ({ onNext }: StepProps) => {
  const {
    orderPostDataState,
    currentRecipientIndex,
    handleRecipientInputChange,
  } = useOrderPostDataChange();

  const { validateReceiver2 } = useOrderPostDataValidation();

  const { isAllValid } = validateReceiver2({
    recipientAddress:
      orderPostDataState.recipientInfo[currentRecipientIndex]
        ?.recipientAddress || "",
    recipientAddressDetail:
      orderPostDataState.recipientInfo[currentRecipientIndex]
        ?.recipientAddressDetail || "",
  });

  const handleNextClick = () => {
    if (isAllValid) {
      onNext();
    }
  };
  return (
    <>
      <Header text="받는 분 정보 입력" />
      <ProgressBar progress={42.84} />
      <div css={layoutStyle}>
        <section css={sectionStyle}>
          <div css={textStyle}>
            <span css={orangeTextStyle}>받는 분</span>의
            <br />
            주소를 입력해주세요
          </div>
        </section>
        <section css={mainSectionStyle}>
          <Input
            value={
              orderPostDataState.recipientInfo[currentRecipientIndex]
                ?.recipientAddress || ""
            }
            onChange={(e) => handleRecipientInputChange(e, "recipientAddress")}
            type="text"
            placeholder="건물, 지번 또는 도로명 검색"
            inputLabel="주소"
          />
          <Input
            value={
              orderPostDataState.recipientInfo[currentRecipientIndex]
                ?.recipientAddressDetail || ""
            }
            onChange={(e) =>
              handleRecipientInputChange(e, "recipientAddressDetail")
            }
            type="text"
            placeholder="상세주소 (예시: 101동 1201호 / 단독주택)"
          />
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

export default Receiver2;
