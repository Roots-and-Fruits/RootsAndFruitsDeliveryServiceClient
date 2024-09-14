import { IcMainCharacter } from "@svg";
import { chracterDivStyle, layoutStyle, titleStyle } from "./Home.style";
import { useNavigate } from "react-router-dom";
import { Button } from "@components";

const Home = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/order-info/sender");
  };
  return (
    <div css={layoutStyle}>
      <h1 css={titleStyle}>
        나무와 열매 체험 농장
        <br />
        주문서 작성
      </h1>
      <div css={chracterDivStyle}>
        <IcMainCharacter />
      </div>
      <Button variant="fill" onClick={handleButtonClick}>
        작성하기
      </Button>
    </div>
  );
};

export default Home;
