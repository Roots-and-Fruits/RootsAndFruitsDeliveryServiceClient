import { ButtonHTMLAttributes } from "react";

import { IcTossPay } from "@svg";
import Toast from "../Toast/Toast";
import useToast from "src/hooks/useToast";

import { getDeviceType } from "src/utils/getDeviceType";

import { payButtonStyle, paySpanStyle } from "./PayButton.style";

export interface PayButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  totalPrice: number;
}

const PayButton = ({ totalPrice }: PayButtonProps) => {
  const { showToast, isToastVisible } = useToast();
  const deviceType = getDeviceType();

  const handleTossPayClick = () => {
    const bank = "NH농협";
    const accountNo = "2180-2180-2180-9";

    if (deviceType === "Android" || deviceType === "iOS") {
      window.open(
        `supertoss://send?bank=${bank}&accountNo=${accountNo}&origin=linkgen&amount=${totalPrice}`,
        "_blank"
      );
    } else {
      showToast();
    }
  };
  return (
    <>
      <button css={payButtonStyle} onClick={handleTossPayClick}>
        <IcTossPay />
        <span css={paySpanStyle}>토스페이</span>
      </button>

      <Toast isVisible={isToastVisible} toastBottom={3}>
        모바일 기기로 결제를 진행해 주세요.
      </Toast>
    </>
  );
};

export default PayButton;
