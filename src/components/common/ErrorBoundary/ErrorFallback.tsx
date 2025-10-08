import { useNavigate } from "react-router-dom";
import {
  errorContainerStyle,
  errorContentStyle,
  errorIconStyle,
  errorTitleStyle,
  errorMessageStyle,
} from "./ErrorFallback.style";
import { Button } from "@components";

const ErrorFallback = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div css={errorContainerStyle}>
      <div css={errorContentStyle}>
        <div css={errorIconStyle}>⚠️</div>
        <h1 css={errorTitleStyle}>문제가 발생했어요</h1>
        <p css={errorMessageStyle}>
          예상치 못한 오류가 발생했습니다.
          <br />
          잠시 후 다시 시도해주세요.
        </p>
        <Button variant="fill" onClick={handleGoHome}>
          홈으로 돌아가기
        </Button>
      </div>
    </div>
  );
};

export default ErrorFallback;
