import { Header, ProgressBar } from "@components";
import { useLocation } from "react-router-dom";
import EditSender from "./EditSender/EditSender";
import EditReceiver from "./EditReceiver/EditReceiver";

const Edit = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
      <Header text="주문 정보 수정" />
      <ProgressBar progress={85.68} />
      {location.state === "sender" ? <EditSender /> : <EditReceiver />}
    </>
  );
};

export default Edit;
