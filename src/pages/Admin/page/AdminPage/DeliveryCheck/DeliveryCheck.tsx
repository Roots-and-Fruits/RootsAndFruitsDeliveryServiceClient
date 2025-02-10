import { useFetchDeliveryDate } from "@apis/domains/admin/useFetchDeliveryDate";
import { Button, Input } from "@components";
import {
  deliveryDateLayout,
  deliveryDateTitleStyle,
  deliveryTextStyle,
  inputContainer,
  wrapper,
} from "./DeliveryCheck.style";
import { useEffect, useState } from "react";
import { usePatchDeliveryDate } from "@apis/domains/admin/usePatchDeliveryDate";

const DeliveryCheck = () => {
  const { data: currentDeliveryDate, isSuccess } = useFetchDeliveryDate();
  const { mutate } = usePatchDeliveryDate();
  const [deliveryDate, setDeliveryDate] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDeliveryDate(value);
  };

  const handleButtonClick = () => {
    if (Number(deliveryDate) > 1) {
      mutate(deliveryDate);
    } else {
      alert("최소 2일 이상으로 설정해주세요.");
    }
  };

  useEffect(() => {
    if (isSuccess && currentDeliveryDate) {
      setDeliveryDate(currentDeliveryDate.toString());
    }
  }, [currentDeliveryDate, isSuccess]);

  return (
    <div css={deliveryDateLayout}>
      <h3 css={deliveryDateTitleStyle}>배송 날짜 선택 범위 설정</h3>
      <p css={deliveryTextStyle}>
        손님이 선택할 수 있는 배송 날짜의 최대 범위를 설정할 수 있습니다.
      </p>
      <p css={deliveryTextStyle}>
        입력한 숫자에 따라 고객이 오늘부터 며칠 뒤까지의 날짜를 선택할 수 있게
        됩니다.
      </p>
      <p css={deliveryTextStyle}>
        {`예시) ‘10’을 입력하면 고객은 오늘을 기준으로 최대 10일 뒤의 날짜까지
          선택할 수 있습니다.`}
      </p>

      <div css={inputContainer}>
        <div css={wrapper}>
          <Input
            value={deliveryDate}
            type="number"
            onChange={handleInputChange}
          />
        </div>
        <p css={deliveryDateTitleStyle}>일</p>
        <div css={wrapper}>
          {currentDeliveryDate?.toString() !== deliveryDate && (
            <Button variant="fill" onClick={handleButtonClick}>
              저장
            </Button>
          )}
        </div>
      </div>
      <button
        onClick={() => {
          throw new Error("This is your first error!");
        }}
      >
        Break the world
      </button>
    </div>
  );
};

export default DeliveryCheck;
