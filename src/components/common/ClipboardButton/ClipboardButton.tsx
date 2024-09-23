import { useState } from "react";

import { IcClipboardCopy } from "@svg";

import {
  accountNumberStyle,
  buttonWrapperStyle,
  iconStyle,
} from "./ClipboardButton.style";
import Toast from "../Toast/Toast";
import useToast from "src/hooks/useToast";

const ClipboardButton = () => {
  const { showToast, isToastVisible } = useToast();
  const [toastMessage, setToastMessage] = useState("");
  const accountNumber = "1103234341312";
  const handleCopyClick = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(accountNumber);
        setToastMessage("계좌번호가 복사되었어요.");
        showToast();
      } catch {
        setToastMessage("클립보드 복사 실패");
        showToast();
      }
    } else {
      setToastMessage("클립보드에 복사할 수 없습니다.");
      showToast();
    }
  };
  return (
    <button css={buttonWrapperStyle} onClick={handleCopyClick}>
      <span css={accountNumberStyle}>{accountNumber}</span>
      <span css={iconStyle}>
        <IcClipboardCopy />
        <Toast isVisible={isToastVisible} toastBottom={3}>
          {toastMessage}
        </Toast>
      </span>
    </button>
  );
};

export default ClipboardButton;
