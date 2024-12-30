import {
  chracterDivStyle,
  chracterImg,
  layoutStyle,
  titleStyle,
} from "./ExperienceHome.style";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@components";
import { buttonSectionStyle } from "@pages/orderInfo/styles";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";
import { CategoryType } from "@types";

const ExperienceHome = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [, setCategory] = useAtom(categoryAtom);

  const handleButtonClick = () => {
    const categoryName = location.pathname.split("/")[1];
    localStorage.clear();
    setCategory(categoryName as CategoryType);
    navigate(`/${categoryName}/order-info/sender`);
  };

  return (
    <div css={layoutStyle}>
      <h1 css={titleStyle}>
        제주체험농장
        <br />
        오늘만 농부(체험) 택배접수
      </h1>
      <div css={chracterDivStyle}>
        <img
          css={chracterImg}
          src="/image/experience-home.png"
          alt="체험 홈 그림"
        />
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
