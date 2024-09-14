import { Header, ProgressBar } from "@components";

const Complete = () => {
  return (
    <div>
      <Header text="주문 완료" />
      <ProgressBar progress={100} />
    </div>
  );
};

export default Complete;
