import { IcMainCharacter } from "@svg";
import { titleStyle } from "./Home.style";

const Home = () => {
  return (
    <>
      <h1 css={titleStyle}>
        나무와 열매 체험 농장
        <br />
        주문서 작성
      </h1>
      <IcMainCharacter />
      
    </>
  );
};

export default Home;
