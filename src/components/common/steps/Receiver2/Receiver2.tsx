import React, { useEffect, useState } from "react";
import { Button, Input, Modal } from "@components";
import {
  buttonSectionStyle,
  layoutStyle,
  coloredTextStyle,
  sectionStyle,
  textStyle,
} from "@pages/orderInfo/styles";
import { StepProps } from "@types";
import {
  alertModal,
  alertModalText,
  buttonWrapper,
  mainSectionStyle,
  zonecodeWrapper,
} from "./Receiver2.style";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { useOrderPostDataChange } from "src/hooks/useOrderPostDataChange";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";

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
  const [category] = useAtom(categoryAtom);

  const {
    orderPostDataState,
    currentRecipientIndex,
    handleRecipientInputChange,
  } = useOrderPostDataChange();
  const receiver = orderPostDataState.recipientInfo[currentRecipientIndex];

  const [form, setForm] = useState({
    address: "",
    addressDetail: "",
    zonecode: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
    if (!form.address || !form.addressDetail.trim() || !form.zonecode) {
      setIsModalOpen(true);
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

  useEffect(() => {
    if (receiver) {
      setForm({
        address: receiver.recipientAddress || "",
        addressDetail: receiver.recipientAddressDetail || "",
        zonecode: receiver.recipientPostCode || "",
      });
    }
  }, [receiver]);

  return (
    <>
      <div css={layoutStyle}>
        <section css={sectionStyle}>
          <div css={textStyle}>
            <span css={coloredTextStyle(category)}>받는 분</span>의
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
              disabled
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
            disabled
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
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <article css={alertModal}>
            <p css={alertModalText(category)}>
              <strong>주소</strong>와 <strong>상세주소</strong>를 모두
              입력해주세요.
            </p>
            <div css={buttonWrapper}>
              <Button variant="fill" onClick={() => setIsModalOpen(false)}>
                확인
              </Button>
            </div>
          </article>
        </Modal>
      )}
    </>
  );
};

export default Receiver2;
