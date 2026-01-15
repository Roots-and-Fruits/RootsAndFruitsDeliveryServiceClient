import { Button, CountProduct, CustomCalendar, Input, Modal, RadioInput } from "@components";
import {
  addressFormWrapper,
  alertModal,
  alertModalText,
  buttonWrapper,
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
import { useEffect, useMemo, useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { useNavigate } from "react-router-dom";
import { useOrderPostDataChange } from "src/hooks/useOrderPostDataChange";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";
import { getTwoDaysLaterDate } from "@utils";
import { BUNDLE_KEYWORDS, PRODUCT_BUNDLE_DISCOUNT_ID, TRIAL_BUNDLE_DISCOUNT_ID } from "@constants";
import { ProductInfo } from "src/stores/orderPostData";

const scriptUrl = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

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

const getTotalSum = (productInfo: ProductInfo[]) => {
  return productInfo.reduce((sum, product) => {
    return sum + product.productCount * product.productPrice;
  }, 0);
};

const getiscountCount = (bundleProductCount: number) => {
  return Math.floor(bundleProductCount / 2);
};

const EditReceiver = ({ receiverIndex }: EditReceiverProps) => {
  const { orderPostDataState, handleRecipientInputChange, handleChangeOrderPrice } = useOrderPostDataChange();

  const receiver = useMemo(
    () => orderPostDataState.recipientInfo[receiverIndex] ?? {},
    [orderPostDataState.recipientInfo, receiverIndex]
  );
  const navigate = useNavigate();
  const [category] = useAtom(categoryAtom);

  const [alertText, setAlertText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const [form, setForm] = useState({
    address: receiver?.recipientAddress || "",
    addressDetail: receiver?.recipientAddressDetail || "",
    zonecode: receiver?.recipientPostCode || "",
  });
  const selectedOption = receiver.selectedOption;
  const selectedDate = receiver.deliveryDate;

  useEffect(() => {
    if (receiver && receiver.recipientAddress) {
      setForm({
        address: receiver.recipientAddress,
        addressDetail: receiver.recipientAddressDetail,
        zonecode: receiver.recipientPostCode,
      });
    }
  }, [receiver]);

  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data: DaumPostcodeData) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setForm((prevForm) => ({
      ...prevForm,
      address: fullAddress,
      zonecode: data.zonecode,
    }));
  };

  const checkValidation = () => {
    if (
      !orderPostDataState.recipientInfo[receiverIndex]?.recipientName ||
      !orderPostDataState.recipientInfo[receiverIndex]?.recipientPhone
    ) {
      setAlertText("받는 분의 이름과 휴대폰 번호를 모두 입력해주세요.");
      return false;
    } else if (!form.address || !form.addressDetail || !form.zonecode) {
      setAlertText("주소와 상세주소를 모두 입력해주세요.");
      return false;
    } else if (selectedOption !== "regular" && selectedDate.length < 1) {
      setAlertText("희망 배송일자를 선택해주세요");
      return false;
    }
    return true;
  };

  const handleButtonClick = () => {
    if (!checkValidation()) {
      setIsModalOpen(true);
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

    navigate(`/${category}/order-info/check-info`, {
      replace: true,
    });
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const handleCountChange = (productIndex: number, type: "increase" | "decrease") => {
    const currentProductInfo = receiver.productInfo;

    const updatedProductInfo = [...currentProductInfo];
    const product = updatedProductInfo[productIndex];
    updatedProductInfo[productIndex] = {
      ...product,
      productCount: type === "increase" ? product.productCount + 1 : product.productCount - 1,
    };

    const isBundleProduct =
      !product.productName.toLowerCase().includes("한라봉") &&
      BUNDLE_KEYWORDS.some((keyword) => product.productName.toLowerCase().includes(keyword));

    if (isBundleProduct) {
      receiver.bundleProductCount =
        type === "increase" ? (receiver.bundleProductCount || 0) + 1 : (receiver.bundleProductCount || 0) - 1;
    }

    const bundleDiscoutCount = getiscountCount(receiver.bundleProductCount || 0);

    updatedProductInfo.forEach((product) => {
      if (product.productId === PRODUCT_BUNDLE_DISCOUNT_ID || product.productId === TRIAL_BUNDLE_DISCOUNT_ID) {
        product.productCount = bundleDiscoutCount;
      }
    });

    const totalSum = getTotalSum(updatedProductInfo);

    handleRecipientInputChange(updatedProductInfo, "productInfo", receiverIndex);

    handleChangeOrderPrice(totalSum, receiverIndex);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleRecipientInputChange(e, "selectedOption", receiverIndex);

    if (e.target.value === "regular") {
      handleRecipientInputChange(getTwoDaysLaterDate(), "deliveryDate", receiverIndex);
    } else {
      handleRecipientInputChange("", "deliveryDate", receiverIndex);
    }
  };

  const handleDateChange = (date: string) => {
    handleRecipientInputChange(date, "deliveryDate", receiverIndex);
    return;
  };
  return (
    <>
      <div css={editReceiverLayout}>
        <span css={receiverSpan}>받는 분</span>
        <section css={mainSectionStyle}>
          <Input
            value={orderPostDataState.recipientInfo[receiverIndex]?.recipientName || ""}
            onChange={(e) => handleRecipientInputChange(e, "recipientName", receiverIndex)}
            type="text"
            placeholder="이름을 입력하세요"
            inputLabel="이름"
          />
          <Input
            value={orderPostDataState.recipientInfo[receiverIndex]?.recipientPhone || ""}
            onChange={(e) => handleRecipientInputChange(e, "recipientPhone", receiverIndex)}
            type="text"
            placeholder="휴대폰 번호를 입력하세요"
            inputLabel="휴대폰 번호"
          />
          <div css={addressFormWrapper}>
            <div css={zonecodeWrapper}>
              <Input value={form.zonecode} type="text" placeholder="우편번호" inputLabel="우편번호" aria-readonly />
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
              onChange={(e) => setForm({ ...form, addressDetail: e.target.value })}
              name="addressDetail"
              type="text"
              placeholder="상세주소 (예시: 101동 1201호 / 단독주택)"
            />
          </div>
          <div css={selectProductContainer}>
            <span css={subTitleSpan}>선택 상품</span>
            <div css={selectProductWrapper}>
              {(receiver.productInfo ?? []).map((product, i) => {
                if (
                  product.productId === PRODUCT_BUNDLE_DISCOUNT_ID ||
                  product.productId === TRIAL_BUNDLE_DISCOUNT_ID
                ) {
                  return null;
                }
                return (
                  <CountProduct
                    key={i}
                    productName={product.productName}
                    count={product.productCount}
                    onCountChange={(type: "increase" | "decrease") => handleCountChange(i, type)}
                  />
                );
              })}
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
              {selectedOption === "scheduled" && <CustomCalendar onDateChange={handleDateChange} />}
            </div>
          )}
        </section>
      </div>
      <footer css={buttonSectionStyle}>
        <Button
          variant="fill"
          onClick={handleButtonClick}
          disabled={orderPostDataState.recipientInfo[receiverIndex]?.orderPrice === 0}
        >
          수정 완료
        </Button>
      </footer>
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <article css={alertModal}>
            <p css={alertModalText}>{alertText}</p>
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

export default EditReceiver;
