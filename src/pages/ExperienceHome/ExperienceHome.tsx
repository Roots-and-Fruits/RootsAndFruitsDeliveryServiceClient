import { IcMainCharacter } from "@svg";
import {
  chracterDivStyle,
  layoutStyle,
  titleStyle,
} from "./ExperienceHome.style";
import { useNavigate } from "react-router-dom";
import { Button } from "@components";
import { buttonSectionStyle } from "@pages/orderInfo/styles";

const ExperienceHome = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/experience/order-info/sender");
  };
  return (
    <div css={layoutStyle}>
      <h1 css={titleStyle}>
        나무와 열매 체험 농장
        <br />
        체험 과일 택배 접수
      </h1>
      <div css={chracterDivStyle}>
        <IcMainCharacter />
      </div>
      <footer css={buttonSectionStyle}>
        <Button variant="fill" onClick={handleButtonClick}>
          작성하기
        </Button>
      </footer>
    </div>
  );
};

export default ExperienceHome;
