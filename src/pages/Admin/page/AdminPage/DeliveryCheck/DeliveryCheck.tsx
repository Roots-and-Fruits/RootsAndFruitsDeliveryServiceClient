import { useFetchDeliveryDate } from "@apis/domains/admin/useFetchDeliveryDate";
import { Button, Input } from "@components";
import {
  deliveryDateLayout,
  deliveryDateTextWrapper,
  deliveryDateTitleStyle,
  deliveryTextStyle,
  deliveryDateWrapper,
  deliveryDateInputTextStyle,
  deliveryDateInputWrapper,
  deliveryDateInputStyle,
  deliveryDateButtonStyle,
} from "@pages/Admin/page/AdminPage/DeliveryCheck/DeliveryCheck.style";
import { useState } from "react";

const DeliveryCheck = () => {
  const { data: currentDeliveryDate } = useFetchDeliveryDate();
  const [deliveryDate] = useState(String(currentDeliveryDate));

  return (
    <div css={deliveryDateLayout}>
      <div css={deliveryDateTextWrapper}>
        <h3 css={deliveryDateTitleStyle}>배송 날짜 선택 범위 설정</h3>
        <span css={deliveryTextStyle}>
          {`손님이 선택할 수 있는 배송 날짜의 최대 범위를 설정할 수 있습니다. \n입력한 숫자에 따라 고객이 오늘부터 며칠 뒤까지의 날짜를 선택할 수 있게 됩니다. \n예시) ‘10’을 입력하면 고객은 오늘을 기준으로 최대 10일 뒤의 날짜까지 선택할 수 있습니다.`}
        </span>
      </div>

      <div css={deliveryDateWrapper}>
        <div css={deliveryDateInputWrapper}>
          <div css={deliveryDateInputStyle}>
            <Input value={deliveryDate} type="text" />
          </div>
          <span css={deliveryDateInputTextStyle}>일</span>
        </div>

        <div css={deliveryDateButtonStyle}>
          <Button variant="fill">저장</Button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCheck;
