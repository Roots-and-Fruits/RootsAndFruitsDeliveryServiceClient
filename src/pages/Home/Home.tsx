import { IcMainCharacter } from "@svg";
import {
  homeLayout,
  homeTitle,
  menuButton,
  menuContainer,
  menuImage,
  menuTitle,
} from "./Home.style";
import { useAtom } from "jotai";
import { categoryAtom } from "@stores";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [, setCategory] = useAtom(categoryAtom);

  const handleButtonClick = (category: "product" | "experience") => {
    localStorage.clear();
    setCategory(category);
    navigate(`/${category}/order-info/sender`);
  };

  return (
    <div css={homeLayout}>
      <h1 css={homeTitle}>제주 체험 농장</h1>
      <section css={menuContainer}>
        <article
          css={menuButton}
          onClick={() => handleButtonClick("experience")}
        >
          <div css={menuImage}>
            <img src="/image/experience-home.png" alt="체험 홈 그림" />
          </div>
          <h3 css={menuTitle}>
            오늘만 농부(체험)
            <br />
            택배접수
          </h3>
        </article>

        <article css={menuButton} onClick={() => handleButtonClick("product")}>
          <div css={menuImage}>
            <IcMainCharacter />
          </div>
          <h3 css={menuTitle}>
            상품 구매 <br />
            주문서 작성
          </h3>
        </article>
      </section>
    </div>
  );
};

export default Home;
