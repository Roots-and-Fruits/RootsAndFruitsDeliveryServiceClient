import {
  Button,
  CountProduct,
  CustomCalendar,
  Input,
  RadioInput,
} from "@components";
import {
  addressFormWrapper,
  deliveryDateContainer,
  editReceiverLayout,
  mainSectionStyle,
  radioWrapper,
  receiverSpan,
  selectProductContainer,
  selectProductWrapper,
  subTitle2Span,
  subTitleSpan,
  zonecodeWrapper,
} from "./EditReceiver.style";
import { buttonSectionStyle } from "@pages/orderInfo/styles";
import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { useNavigate } from "react-router-dom";
import { useOrderPostDataChange } from "src/hooks/useOrderPostDataChange";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";
import { getTwoDaysLaterDate } from "@utils";

const scriptUrl =
  "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

interface DaumPostcodeData {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
  zonecode: string;
}
interface EditReceiverProps {
  receiverIndex: number;
}

const EditReceiver = ({ receiverIndex }: EditReceiverProps) => {
  const { orderPostDataState, handleRecipientInputChange } =
    useOrderPostDataChange();

  const receiver = orderPostDataState.recipientInfo[receiverIndex];
  const navigate = useNavigate();
  const [category] = useAtom(categoryAtom);

  const [form, setForm] = useState({
    address: receiver?.recipientAddress || "",
    addressDetail: receiver?.recipientAddressDetail || "",
    zonecode: receiver?.recipientPostCode || "",
  });
  const selectedOption = receiver.selectedOption;
  const selectedDate = receiver.deliveryDate;

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

  const handleButtonClick = () => {
    if (!form.address || !form.addressDetail || !form.zonecode) {
      alert("주소와 상세주소를 모두 입력해주세요.");
      return;
    } else if (selectedOption !== "regular" && selectedDate.length < 1) {
      alert("희망 배송일자를 선택해주세요");
      return;
    }

    handleRecipientInputChange(
      {
        target: { value: form.address },
      } as React.ChangeEvent<HTMLInputElement>,
      "recipientAddress",
      receiverIndex
    );
    handleRecipientInputChange(
      {
        target: { value: form.addressDetail },
      } as React.ChangeEvent<HTMLInputElement>,
      "recipientAddressDetail",
      receiverIndex
    );
    handleRecipientInputChange(
      {
        target: { value: form.zonecode },
      } as React.ChangeEvent<HTMLInputElement>,
      "recipientPostCode",
      receiverIndex
    );
    handleRecipientInputChange(selectedDate, "deliveryDate", receiverIndex);

    navigate(`/${category}/order-info/check-info`);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const handleCountChange = (productIndex: number, newCount: number) => {
    const currentProductInfo = receiver.productInfo;
    const updatedProductInfo = currentProductInfo.map((product, index) => {
      if (index === productIndex) {
        return { ...product, productCount: newCount };
      }
      return product;
    });

    handleRecipientInputChange(
      updatedProductInfo,
      "productInfo",
      receiverIndex
    );
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleRecipientInputChange(e, "selectedOption", receiverIndex);

    if (e.target.value === "regular") {
      handleRecipientInputChange(
        getTwoDaysLaterDate(),
        "deliveryDate",
        receiverIndex
      );
    } else {
      handleRecipientInputChange("", "deliveryDate", receiverIndex);
    }
  };

  const handleDateChange = (date: string) => {
    handleRecipientInputChange(date, "deliveryDate", receiverIndex);
    return;
  };
  return (
    <div css={editReceiverLayout}>
      <span css={receiverSpan}>받는 분</span>
      <section css={mainSectionStyle}>
        <Input
          value={
            orderPostDataState.recipientInfo[receiverIndex]?.recipientName || ""
          }
          onChange={(e) =>
            handleRecipientInputChange(e, "recipientName", receiverIndex)
          }
          type="text"
          placeholder="이름을 입력하세요"
          inputLabel="이름"
        />
        <Input
          value={
            orderPostDataState.recipientInfo[receiverIndex]?.recipientPhone ||
            ""
          }
          onChange={(e) =>
            handleRecipientInputChange(e, "recipientPhone", receiverIndex)
          }
          type="text"
          placeholder="휴대폰 번호를 입력하세요"
          inputLabel="휴대폰 번호"
        />
        <div css={addressFormWrapper}>
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
        </div>
        <div css={selectProductContainer}>
          <span css={subTitleSpan}>선택 상품</span>
          <div css={selectProductWrapper}>
            {receiver.productInfo.map((product, i) => (
              <CountProduct
                key={i}
                productName={product.productName}
                count={product.productCount}
                onCountChange={(newCount) => handleCountChange(i, newCount)}
              />
            ))}
          </div>
        </div>
        {category === "product" && (
          <div css={deliveryDateContainer}>
            <span css={subTitle2Span}>배송 날짜</span>
            <div css={radioWrapper}>
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
            </div>
            {selectedOption === "scheduled" && (
              <CustomCalendar onDateChange={handleDateChange} />
            )}
          </div>
        )}
      </section>
      <footer css={buttonSectionStyle}>
        <Button variant="fill" onClick={handleButtonClick}>
          수정 완료
        </Button>
      </footer>
    </div>
  );
};

export default EditReceiver;
