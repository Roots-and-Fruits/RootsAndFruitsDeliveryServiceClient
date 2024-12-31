import { IcMainCharacter } from "@svg";
import {
  homeHeader,
  homeLayout,
  homeSubTitle,
  homeTitle,
  menuButton,
  menuContainer,
  menuImage,
  menuTitle,
} from "./Home.style";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";
import { useNavigate } from "react-router-dom";
import { CategoryType } from "@types";

const Home = () => {
  const navigate = useNavigate();

  const [, setCategory] = useAtom(categoryAtom);

  const handleButtonClick = (category: CategoryType) => {
    localStorage.clear();
    setCategory(category);
    navigate(`/${category}/order-info/sender`);
  };

  return (
    <div css={homeLayout}>
      <header css={homeHeader}>
        <h1 css={homeTitle}>제주 체험 농장</h1>
        <h2 css={homeSubTitle}>환영합니다 😊</h2>
        <h2 css={homeSubTitle}>필요한 메뉴를 선택해 주세요</h2>
      </header>

      <section css={menuContainer}>
        <article
          css={menuButton}
          onClick={() => handleButtonClick("experience")}
        >
          <div css={menuImage}>
            <img src="/image/experience-home.png" alt="체험 홈 그림" />
          </div>
          <h3 css={menuTitle}>
            체험한 과일
            <br />
            택배 보내기
          </h3>
        </article>

        <article css={menuButton} onClick={() => handleButtonClick("product")}>
          <div css={menuImage}>
            <IcMainCharacter />
          </div>
          <h3 css={menuTitle}>
            상품 구매 <br /> 택배 접수
          </h3>
        </article>
      </section>
    </div>
  );
};

export default Home;
