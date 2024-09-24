import React, { useState } from "react";
import { Button, Header, Input, ProgressBar } from "@components";
import {
  buttonSectionStyle,
  layoutStyle,
  orangeTextStyle,
  sectionStyle,
  textStyle,
} from "@pages/orderInfo/styles";
import { StepProps } from "@types";
import { mainSectionStyle, zonecodeWrapper } from "./Receiver2.style";
import { useOrderPostDataChange } from "@pages/orderInfo/hooks/useOrderPostDataChange";
import { useDaumPostcodePopup } from "react-daum-postcode";

const scriptUrl =
  "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

interface DaumPostcodeData {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
  zonecode: string;
}

const Receiver2 = ({ onNext }: StepProps) => {
  const {
    orderPostDataState,
    currentRecipientIndex,
    handleRecipientInputChange,
  } = useOrderPostDataChange();
  const receiver = orderPostDataState.recipientInfo[currentRecipientIndex];

  const [form, setForm] = useState({
    address: receiver?.recipientAddress || "",
    addressDetail: receiver?.recipientAddressDetail || "",
    zonecode: receiver?.recipientPostCode || "",
  });

  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data: DaumPostcodeData) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setForm((prevForm) => ({
      ...prevForm,
      address: fullAddress,
      zonecode: data.zonecode,
    }));
  };

  const handleNextClick = () => {
    if (!form.address || !form.addressDetail || !form.zonecode) {
      alert("주소와 상세주소를 모두 입력해주세요.");
      return;
    }

    handleRecipientInputChange(
      {
        target: { value: form.address },
      } as React.ChangeEvent<HTMLInputElement>,
      "recipientAddress",
      currentRecipientIndex
    );
    handleRecipientInputChange(
      {
        target: { value: form.addressDetail },
      } as React.ChangeEvent<HTMLInputElement>,
      "recipientAddressDetail",
      currentRecipientIndex
    );
    handleRecipientInputChange(
      {
        target: { value: form.zonecode },
      } as React.ChangeEvent<HTMLInputElement>,
      "recipientPostCode",
      currentRecipientIndex
    );
    onNext();
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
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
          <div css={zonecodeWrapper}>
            <Input
              value={form.zonecode}
              type="text"
              placeholder="우편번호"
              inputLabel="우편번호"
              aria-readonly
            />
            <Button variant="fill" onClick={handleClick}>
              주소 검색
            </Button>
          </div>
          <Input
            value={form.address}
            type="text"
            placeholder="건물, 지번 또는 도로명 검색"
            inputLabel="주소"
            aria-readonly
          />
          <Input
            value={form.addressDetail}
            onChange={(e) =>
              setForm({ ...form, addressDetail: e.target.value })
            }
            name="addressDetail"
            type="text"
            placeholder="상세주소 (예시: 101동 1201호 / 단독주택)"
          />
        </section>
        <footer css={buttonSectionStyle}>
          <Button variant="fill" onClick={handleNextClick}>
            다음
          </Button>
        </footer>
      </div>
    </>
  );
};

export default Receiver2;
